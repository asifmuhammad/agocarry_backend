<?php

namespace Vtlabs\Core\Filters;

use EloquentFilter\ModelFilter;

class MobileLanguageFilter extends ModelFilter
{
    public function langaugeCode($langaugeCode)
    {
        return $this->where('langaugeCode', $langaugeCode);
    }
}
