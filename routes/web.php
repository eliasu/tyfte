<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NumberController;
use Illuminate\Http\Request;
use Statamic\Facades\Form;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

// In your web.php routes file

// calls a update function in app/Http/Controllers/NumberController.php
Route::post('update-number', [NumberController::class, 'update']);