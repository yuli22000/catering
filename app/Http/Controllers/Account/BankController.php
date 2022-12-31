<?php

namespace App\Http\Controllers\Account;

use App\Models\Bank;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class BankController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //get sliders
        $banks = Bank::latest()->paginate(5);

        //return inertia
        return inertia('Account/Banks/Index', [
            'banks' => $banks,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /**
         * Validate request
         */
        $this->validate($request, [
            'name'      => 'required',
            'rekening'  => 'required',
            'image'     => 'required|mimes:png,jpg',
        ]);

        //upload image
        $image = $request->file('image');
        $image->storeAs('public/banks', $image->hashName());

        //create slider
        Bank::create([
            'name'  => $request->name,
            'rekening'  => $request->rekening,
            'image' => $image->hashName()
        ]);

        //redirect
        return redirect()->route('account.banks.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //find slider by ID
        $bank = Bank::findOrFail($id);

        //remove image from server
        Storage::disk('local')->delete('public/banks/' . basename($bank->image));

        //delete slider
        $bank->delete();

        //redirect
        return redirect()->route('account.banks.index');
    }
}
