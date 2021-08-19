<?php

namespace Vtlabs\Doctor\Filters;

use EloquentFilter\ModelFilter;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\App;
use Vtlabs\Core\Helpers\CoreHelper;

class DoctorFilter extends ModelFilter
{
    public function setup()
    {
        // filter blank profiles
        $this->whereNotNull('name');

        // filter vendors based on user location
        // @TODO: read distance value from settings
        if($this->input('long') && $this->input('lat')) {
            $subqueryDistance = "ST_Distance_Sphere(Point(longitude,"
                . " latitude),"
                . " Point(" . $this->input('long') . ", " . $this->input('lat') . "))"
                . " as distance";

            $subqueryDistanceWhere = "ST_Distance_Sphere(Point(longitude,"
                . " latitude),"
                . " Point(" . $this->input('long') . ", " . $this->input('lat') . "))"
                . " < 8000";

            $this->select('*', DB::raw($subqueryDistance))
                ->whereRaw($subqueryDistanceWhere);
        }
    }

    public function search($search)
    {
        $locale = App::getLocale();
        return CoreHelper::searchTranslated($this, 'name', $locale, $search);
    }

    public function name($name)
    {
        $locale = App::getLocale();
        return CoreHelper::searchTranslated($this, 'name', $locale, $name);
    }

    public function specializations($id)
    {
        return $this->whereHas('specializations', function($query) use ($id)
        {
            return $query->where('id', $id);
        });
    }

    public function degree($id)
    {
        return $this->whereHas('degrees', function($query) use ($id)
        {
            return $query->where('id', $id);
        });
    }

    public function service($id)
    {
        return $this->whereHas('services', function($query) use ($id)
        {
            return $query->where('id', $id);
        });
    }

    public function type($id)
    {
        return $this->whereHas('types', function($query) use ($id)
        {
            return $query->where('id', $id);
        });
    }

    public function hospital($id)
    {
        return $this->whereHas('hospitals', function($query) use ($id)
        {
            return $query->where('id', $id);
        });
    }
}
