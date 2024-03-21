<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++) {
            User::create([
                "user_id" => 1000 + $i,
                "name" => "User $i",
                "email" => "user$i@email.com",
                'gender' => $i % 2 == 0 ? 'M' : 'F',
                'status' => $i % 2 == 0 ? 1 : 0,
            ]);
        }
    }
}
