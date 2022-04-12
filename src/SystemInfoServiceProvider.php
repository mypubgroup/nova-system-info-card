<?php

namespace Codeat3\NovaSystemInfoCard;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Nova;

class SystemInfoServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->app->booted(function (): void {
            $this->routes();
        });

        Nova::serving(static function (): void {
            Nova::script('nova-system-info', __DIR__ . '/../dist/js/card.js');
            Nova::style('nova-system-info', __DIR__ . '/../dist/css/card.css');
        });
    }

    protected function routes(): void
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova'])
            ->prefix('nova-vendor/codeat3/nova-system-info-card')
            ->group(__DIR__ . '/../routes/api.php');
    }
}
