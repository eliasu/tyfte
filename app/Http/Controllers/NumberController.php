<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\Facades\GlobalSet;

class NumberController extends Controller
{   
    public function update(Request $request) {
        // retrieve the 'love_counter' Global Set
        $set = GlobalSet::findByHandle('love_counter'); // returns a `GlobalSet`
        $variables = $set->inCurrentSite(); // returns a `Variables`
        $newNumber = $variables->get('count'); // returns the value
        
        // increment number
        $newNumber = $newNumber + 1;

        // set new value of "Count" field in global set
        $variables->set('count', $newNumber);
        $set->save();

        return $newNumber;
    }
}