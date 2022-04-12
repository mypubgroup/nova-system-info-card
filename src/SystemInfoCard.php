<?php

namespace Codeat3\NovaSystemInfoCard;

use Laravel\Nova\Card;

class SystemInfoCard extends Card
{
    /** @var string */
    public $width = '1/3';

    /** @return string */
    public function component()
    {
        return 'system-info-card';
    }
}
