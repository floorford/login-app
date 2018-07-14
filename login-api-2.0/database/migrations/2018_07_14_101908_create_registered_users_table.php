<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRegisteredUsersTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('registered_users', function (Blueprint $table) {
      $table->increments('id');
      $table->string("email", 255);
      $table->string("password", 255);
      $table->boolean("logged_in")->default(false);
      $table->timestamps();
   });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('registered_users');
  }
}
