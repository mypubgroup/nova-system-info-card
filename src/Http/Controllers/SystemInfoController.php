<?php

namespace Codeat3\NovaSystemInfoCard\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Container\Container;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Laravel\Nova\Nova;
class SystemInfoController
{
    protected array $supportedDrivers = [
        'sqlite',
        'mysql',
        'pgsql',
        'sqlsrv',
    ];

    public function check(Request $request)
    {
        return [
            'os' => php_uname('s'),
            'php' => phpversion(),
            'redis' => phpversion('redis'),
            'database' => $this->getDatabaseVersion(),
            'laravel' => Container::getInstance()->version(),
            'nova' => Nova::version(),
            'utc_time' => Carbon::now('UTC')->toRssString(),
        ];
    }

    protected function getDatabaseVersion(): string
    {
        $defaultDriver = DB::connection()->getConfig('driver');

        if (! in_array($defaultDriver, $this->supportedDrivers)) {
            return 'Unknown';
        }

        $results = DB::select(
            DB::raw("SELECT version() as `version`")
        );

        return Collection::make($results)->pluck('version')->first() ?? 'Unknown';
    }
}
