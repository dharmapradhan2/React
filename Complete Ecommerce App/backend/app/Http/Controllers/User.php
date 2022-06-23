<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;
class User extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Users::get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()->json('create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'password'=>'required',
        ]);
        // echo '<pre>';
        // print_r($request->all());
        $users=new Users;
        $users->name=$request['name'];
        $users->password=$request['password'];
        $users->save();
        // $user=Users::create([
        //     'name'=>$request['name'],
        //     'password'=>$request['password']
        // ]);
        // print_r($request);
        // return view('welcome')->with($request);
        return response()->json('Sucessfully inserted data');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($name,$password)
    {
        // return response()->json($id);
        $search=Users::where('name',$name)->where('password',$password)->get();
        if (!is_null($search)) {
            return response()->json($search);
        } else {
            return response()->json('Invalid');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
