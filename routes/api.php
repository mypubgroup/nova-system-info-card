<?php

use Codeat3\NovaSystemInfoCard\Http\Controllers\SystemInfoController;
use Illuminate\Support\Facades\Route;

Route::get('check', SystemInfoController::class);
