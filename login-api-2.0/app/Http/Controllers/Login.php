<?php

namespace App\Http\Controllers;

use App\RegisteredUser;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;

class Login extends Controller
{
  /**
   * Change the logged_in data for that user from false to true.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function login(Request $request, RegisteredUser $user)
  {
    // get post request data for email and password
    $email = $request->only("email");
    $inputPass = $request->only("password");

    // isolate the string value for the email array to sanitize it
    $key2='email';
    $strEmail = $email[$key2];

    // clean the email of illegal characters
    $cleanEmail = filter_var($strEmail, FILTER_SANITIZE_EMAIL);

    // $user is database object, checking the email exists in the database, and then if it does if the hashed password matches the input password
    $user = RegisteredUser::where('email', '=', $cleanEmail)->get();
    if(count($user) > 0 && count($user) < 2)
    {
      if(Hash::check($inputPass['password'], $user[0]['password']))
      {
        // changing logged_in from false to true
        $user[0]['logged_in'] = true;

        // saving the update to the database
        $user[0]->save();
        return new UserResource($user[0]);
      }
      else
        return new UserResource($user[0]);
    }
    else
      return new UserResource($user[0]);
  }

  /**
   * Change the logged_in data for that user from true to false.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function logout(Request $request, RegisteredUser $user)
  {
    $email = $request->only("email");

    $user = RegisteredUser::where('email', '=', $email['email'])->get();

    // changing logged_in from true to false
    $user[0]['logged_in'] = false;

    // saving the update to the database
    $user[0]->save();

    // return the updated version
    return new UserResource($user[0]);
  }
}
