<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTestsRequest;
use App\Http\Requests\UpdateTestsRequest;
use App\Models\Tests;

class TestsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $tests_details = Tests::latest()->with('user')->get();
        return response()->json($tests_details);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTestsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTestsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tests  $tests
     * @return \Illuminate\Http\Response
     */
    public function show(Tests $tests)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tests  $tests
     * @return \Illuminate\Http\Response
     */
    public function edit(Tests $tests)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTestsRequest  $request
     * @param  \App\Models\Tests  $tests
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTestsRequest $request, Tests $tests)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tests  $tests
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tests $tests)
    {
        //
    }
}
