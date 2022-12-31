<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Bank extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'rekening',
        'image'
    ];

    protected function image(): Attribute
    {
        return Attribute::make(
            get: fn ($image) => asset('/storage/banks/' . $image),
        );
    }
}
