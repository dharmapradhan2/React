<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $primaryKey = 'order_no';
    protected $fillable = [
        'orderId',
        'order_time',
        'orderedItems',
        'purchase_units',
        'price',
        'email',
        'full_name',
    ];
}