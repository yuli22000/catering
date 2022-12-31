<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class BuktiTransfer extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'transactions_id',
        'name',
        'tanggal',
        'bukti',
        'nominal'
    ];

    protected function bukti(): Attribute
    {
        return Attribute::make(
            get: fn ($bukti) => asset('/storage/transactions/' . $bukti),
        );
    }
}
