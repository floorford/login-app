<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request)
  {
    // just show the email, password, and logged_in properties
    // $this represents the current user
    return [
      "email" => $this->email,
      // "password" => $this->password,
      "logged_in" => $this->logged_in,
    ];
  }
}
