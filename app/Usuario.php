<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table= "usuario";
    protected $fillable = ['id', 'username', 'password','nombre','estado','rol_id'];
}
