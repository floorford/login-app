<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RegisteredUser extends Model
{
  // Only allow the email and password field to get updated via mass assignment
  protected $fillable = ["email", "password"];  //
}
