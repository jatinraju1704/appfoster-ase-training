<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Faker\Factory as Faker;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = Faker::create();

        for ($i = 1; $i <= 10; $i++) {
            User::create([
                "user_id" => 1000 + $i,
                "name" => $i % 2 == 0 ? $faker->name('male') :  $faker->name('female'), 
                "email" => $faker->unique()->safeEmail,
                'gender' => $i % 2 == 0 ? 'M' : 'F',
                'status' => $i % 2 == 0 ? 1 : 0,
            ]);
        }
    }
}
