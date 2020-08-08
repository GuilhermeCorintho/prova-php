<?php

namespace App\Http\Controllers;

use App\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function getAllPersons() {
        $persons = Person::get()->toJson(JSON_PRETTY_PRINT);
        return response($persons, 200);
      }

      public function createPerson(Request $request) {
        $person = new Person();
        $person->name = $request->name;
        $person->phone = $request->phone;
        $person->birthdate = $request->birthdate;
        $person->email = $request->email;
        $person->save();

        return response()->json([
            "message" => "person record created"
        ], 201);
      }


      public function getPerson($id) {
        if (Person::where('id', $id)->exists()) {
            $person = Person::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($person, 200);
          } else {
            return response()->json([
              "message" => "Person not found"
            ], 404);
          }
      }

      public function updatePerson(Request $request, $id) {
        if (Person::where('id', $id)->exists()) {
            $person = Person::find($id);
            $person->phone = is_null($request->phone) ? $person->phone : $request->phone;
            $person->save();
    
            return response()->json([
                "message" => "records updated successfully"
            ], 200);
            } else {
            return response()->json([
                "message" => "Person not found"
            ], 404);
            
        }
      }

      public function deletePerson ($id) {
        // logic to delete a Person record goes here
      }
}
