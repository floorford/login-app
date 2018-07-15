<?php

namespace App\Http\Controllers;

use App\RegisteredUser;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;

class Registration extends Controller
{
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    // get post request data for email and password and save as two arrays
    $email = $request->only("email");
    $password = $request->only("password");

    // isolate the string value for each of the above arrays
    $key1='password';
    $strPassword = $password[$key1];

    $key2='email';
    $strEmail = $email[$key2];

    // hash the password
    $hashedPassword = Hash::make($strPassword);

    // clean the email of illegal characters
    $cleanEmail = filter_var($strEmail, FILTER_SANITIZE_EMAIL);

    $user = RegisteredUser::where('email', '=', $cleanEmail)->get();
    if(count($user) > 0)
    {
      return "You already have an account with us, please login by clicking on the button below";
    }
    else {
      // re-assign the data into the format required from the database
      $data = ["email" => $cleanEmail, "password" => $hashedPassword];


      // create registered_user with data and store in DB
      $registered_user = RegisteredUser::create($data);

      // return the resource
      // automatically uses the right status code
      new UserResource($registered_user); //got rid of return
      return "Congratulations you're now registered! Please login by clicking on the button below";
    }
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    // left this as could be used to update the user's password or email
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    // this function could be used to remove a registered user from the database at their request
  }
}
