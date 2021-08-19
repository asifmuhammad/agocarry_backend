<?php

namespace Vtlabs\Doctor\Filters;

use EloquentFilter\ModelFilter;
use Illuminate\Support\Facades\App;
use Vtlabs\Core\Helpers\CoreHelper;

class HospitalFilter extends ModelFilter
{
    public function setup()
    {
    }

    public function name($name)
    {
        $locale = App::getLocale();
        return CoreHelper::searchTranslated($this, 'name', $locale, $name);
    }
}
