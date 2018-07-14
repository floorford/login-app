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
    $inputEmail = $request->only("email");
    $inputPass = $request->only("password");

    // $user is database object, checking the email exists in the database, and then if it does if the hashed password matches the input password
    $user = RegisteredUser::where('email', '=', $inputEmail['email'])->get();
    if(count($user) > 0 && count($user) < 2)
    {
      if(Hash::check($inputPass['password'], $user[0]['password']))
      {
        // changing logged_in from false to true
        $user[0]['logged_in'] = true;

        // saving the update to the database
        $user[0]->save();
        echo $user[0]['logged_in'];
      }
      else
        echo "Your password or email is incorrect, please try again";
    }
    else
      echo "Your password or email is incorrect, please try again";
  }

  /**
   * Change the logged_in data for that user from true to false.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function logout(Request $request, User $user)
  {
    // get the request data - this is getting information from the app, about its login/logout status (true/false) and assigning it to the data variable
    $data = $request->only(["logged_in"]);

    // taking that data (true/false) updating the user in the database
    $user->fill($data)->save();

    // return the updated version
    return new UserResource($user);
  }
}
