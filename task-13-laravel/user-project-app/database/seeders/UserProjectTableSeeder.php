<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserProject;

class UserProjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        for($i=1; $i<=20; $i++)
        {
            UserProject::create([
                "user_id" => rand(1001, 1010),
                "project_id" => rand(2001, 2010)
            ]);
        }
    }
}
