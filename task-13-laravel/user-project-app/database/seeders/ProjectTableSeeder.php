<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++) {
            Project::create([
                'project_id' => 2000 + $i,
                'project_name' => "Project $i",
                'project_desc' => "Description for Project $i",
            ]);
        }
    }
}
