//import react  
import React, { useState } from "react";

//import layout
import LayoutAccount from '../../../Layouts/Account';

//import Head, usePage
import { Head, usePage } from '@inertiajs/inertia-react';

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from 'sweetalert2';

export default function transactionEdit() {

    //destruct props "errors" & "category"
    const { errors, transaction } = usePage().props;

    //state
    const [status_shiping, setStatus_shiping] = useState(transaction.status_shiping);
    const [status, setStatus] = useState(transaction.status);

    //method "updateCategory"
    const updateTransaction = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(`/account/transactions/${transaction.id}`, {

            //data
            status_shiping: status_shiping,
            _method: "PUT"
        }, {
            onSuccess: () => {

                //show alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Pesanan berhasil di update!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
    }

    return (
        <>
            <Head>
                <title>Edit Pesanan - Catering Aisyah</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-folder"></i> Edit Pesanan</span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateTransaction}>

                                    <div className="mb-3">
                                    <select className="form-select" value={status_shiping} onChange={(e) => setStatus_shiping(e.target.value)}>
                                            <option value="">-- Select Pesanan --</option>
                                            <option value={transaction.menunggu}  key={transaction.id}>Menunggu</option>
                                            <option value={transaction.diterima} key={transaction.id}>Diterima</option>
                                            <option value={transaction.diterima} key={transaction.id}>Delivery</option>
                                            <option value={transaction.cancel} key={transaction.id}>Cancel</option>
                                    </select>
                                                        
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger">
                                            {errors.name}
                                        </div>
                                    )}
                    <div>
                                        <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> Update</button>
                                        <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    )

}