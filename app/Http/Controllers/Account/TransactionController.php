<?php

namespace App\Http\Controllers\Account;

use App\Models\Transaction;
use App\Models\Bank;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BuktiTransfer;
use Barryvdh\DomPDF\Facade\Pdf;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /**
         * get role
         */
        $role = auth()->user()->getRoleNames();


        /**
         * get transactions
         */
        if ($role[0] == 'admin') {

            //get transactions
            $transactions = Transaction::with('user')->when(request()->q, function ($categories) {
                $categories = $categories->where('invoice', 'like', '%' . request()->q . '%');
            })->latest()->paginate(5);
        } else {

            //get transactions
            $transactions = Transaction::with('user')->when(request()->q, function ($categories) {
                $categories = $categories->where('invoice', 'like', '%' . request()->q . '%');
            })->where('user_id', auth()->user()->id)->latest()->paginate(5);
        }

        //append query string to pagination links
        $transactions->appends(['q' => request()->q]);

        //return inertia
        return inertia('Account/Transactions/Index', [
            'transactions' => $transactions,

        ]);
    }


    public function edit(Transaction $transaction)
    {
        return inertia('Account/Transactions/Edit', [
            'transaction' => $transaction,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transaction $transaction)
    {
        /**
         * validate
         */
        $this->validate($request, [
            'transaction'          => 'required' . $transaction->id,
        ]);



        //update category without image
        $transaction->update([
            'status_shiping'          => $request->status_shiping,
            'status'          => $request->status,
        ]);

        //redirect
        return redirect()->route('account.transactions.index');
    }



    /**
     * show
     *
     * @param  mixed $invoice
     * @return void
     */
    public function show($invoice)
    {
        //get detail transaction by "reference"
        $transaction = Transaction::with('transactionDetails.product', 'user', 'province', 'city')->where('invoice', $invoice)->first();
        $banks = Bank::latest()->paginate(5);
        $transaction->setRelation('buktiTransfers', $transaction->buktiTransfers()->paginate(5));
        //return inertia
        return inertia('Account/Transactions/Show', [
            'transaction' => $transaction,
            'banks' => $banks,
        ]);
    }

    public function storeTransaction(Request $request)
    {
        /**
         * Validate request
         */
        $this->validate($request, [
            'bukti'      => 'required|mimes:png,jpg',

        ]);

        //get product by ID
        $transaction = Transaction::findOrFail($request->transaction_id);

        //get request file image
        $bukti = $request->file('bukti');

        //move to storage folder
        $bukti->storeAs('public/transactions', $bukti->hashName());

        //insert database
        $transaction->buktiTransfers()->create([
            'bukti'     => $bukti->hashName(),
            'name'     => $request->name,
        ]);

        //return back
        //return back
        return redirect()->back();
    }

    public function generateInovice($transactionId)
    {

        $transaction = Transaction::findOrFail($transactionId);
        $transaction->setRelation('buktiTransfers', $transaction->buktiTransfers()->paginate(5));
        $data = ['transaction' => $transaction];
        $pdf = Pdf::loadView('account.transactions.index', $data);
        return $pdf->download('invoice.pdf');
    }
}
