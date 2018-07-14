<?php

$router->post("register", "Registration@store");
$router->post("login", "Login@login");
$router->post("logout", "Login@logout");
