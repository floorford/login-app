<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ErrorResource extends JsonResource
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
      "email" => "",
      "logged_in" => false
    ];
  }
}
