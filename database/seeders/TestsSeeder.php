<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TestsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('tests')->insert([
            'status'=>'Repaired',
            'type'=>'C870767348 36V 10.4Ah 374.4Wh',
            'user_id'=>1
        ]);
        DB::table('tests')->insert([
            'status'=>'Not Repaired',
            'type'=>'C870767348 36V 10.4Ah 374.4Wh',
            'user_id'=>1
        ]);
        DB::table('tests')->insert([
            'status'=>'Incoming',
            'type'=>'C870767348 36V 10.4Ah 374.4Wh',
            'user_id'=>1
        ]);
        DB::table('tests')->insert([
            'status'=>'Pending',
            'type'=>'C870767348 36V 10.4Ah 374.4Wh',
            'user_id'=>1
        ]);
        DB::table('tests')->insert([
            'status'=>'Repaired',
            'type'=>'C870767348 36V 10.4Ah 374.4Wh',
            'user_id'=>1
        ]);
    }
}
