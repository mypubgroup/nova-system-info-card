<?php

namespace Codeat3\NovaSystemInfoCard\Http\Controllers;

use DB;
use Laravel\Nova\Nova;

class SystemInfoController
{
    public function check()
    {
        $date_utc = new \DateTime("now", new \DateTimeZone("UTC"));
        return [
            'os' => php_uname('s'),
            'php' => phpversion(),
            'redis' => phpversion('redis'),
            'database' => $this->getDatabase(),
            'laravel' => app()->version(),
            'nova' => Nova::version(),
            'utc_time' => $date_utc->format(\DateTimeInterface::RSS),
        ];
    }

    private function getDatabase()
    {
        $knownDatabases = [
            'sqlite',
            'mysql',
            'pgsql',
            'sqlsrv',
        ];

        if (! in_array(config('database.default'), $knownDatabases)) {
            return 'Unknown';
        }

        $results = DB::select(DB::raw("select version()"));

        return $results[0]->{'version()'};
    }
}
