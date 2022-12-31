//import react  
import React, { useState } from "react";

//import layout
import LayoutAccount from '../../../Layouts/Account';


//import Head, usePage, Link
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import { Inertia } from "@inertiajs/inertia";

//import permissions
import hasAnyPermission from '../../../Utils/Permissions';

//import formatPrice
import FormatPrice from '../../../Utils/FormatPrice';

//import component search
import Search from '../../../Shared/Search';

//import component pagination
import Pagination from '../../../Shared/Pagination';
//import Sweet Alert
import Swal from 'sweetalert2';

export default function TransactionIndex() {

    //destruct props "transactions"
    const { transactions } = usePage().props;

    const [status_shiping, setStatus_shiping] = useState(transactions.status_shiping);
    const updateStatus = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.put('/account/transactions/${id}', {

            //data
            status_shiping: status_shiping,
        }, {
            onSuccess: () => {

                //show alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Data updated successfully!',
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
                <title>Transactions - Catering Aisyah</title>
            </Head>
            <LayoutAccount>
                {hasAnyPermission(['transactions.edit']) &&
                    <div className="row mt-4">
                        <div className="col-12 col-md-12 col-lg-12 mb-4">
                            <div className="alert alert-success border-0 shadow-sm mb-0">
                                Pilih Status Pesanan...
                            </div>
                        </div>
                    </div>
                }
                <div class="row mt-5">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-9 col-12 mb-2">

                                <Search URL={'/account/transactions'}/>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-shopping-cart"></i> Transactions</span> 
                            </div>

                            <div class="card-header">
                                <span className="font-weight-bold">tombol print</span>
                            </div>
                            
                   
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped table-hovered">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ width: '5%' }}>No.</th>
                                                <th scope="col" style={{ width: '10%' }}>Full Name</th>
                                                <th scope="col" style={{ width: '10%' }}>Status Pesanan</th>
                                                <th scope="col" style={{ width: '15%' }}>Grand Total</th>
                                                <th scope="col" style={{ width: '15%' }}>Dp (Uang Muka)</th>
                                                <th scope="col" style={{ width: '15%' }}>Sisa Pembayaran</th>
                                                <th scope="col" style={{ width: '20%' }}>Created At</th>
                                                <th scope="col" style={{ width: '20%' }}>Actions</th>
                                                {hasAnyPermission(['transactions.edit']) &&
                                                    <th scope="col" style={{ width: '25%' }}>Status</th>
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {transactions.data.map((transaction, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">{++index + (transactions.current_page - 1) * transactions.per_page}</td>
                                                    <td>{transaction.user.name}</td>
                                                    <td> <span class="badge rounded-pill bg-danger">{transaction.status_shiping}</span></td>
                                                    <td>Rp. {FormatPrice(transaction.grand_total)}</td>
                                                    <td>Rp. {FormatPrice(transaction.grand_dp)}</td>
                                                    <td>Rp. {FormatPrice(transaction.grand_sisa)}</td>
                                                    <td>{transaction.created_at}</td>
                                                    <td className="text-center">
                                                        {hasAnyPermission(['transactions.show']) &&
                                                            <Link href={`/account/transactions/${transaction.invoice}`} className="btn btn-dark btn-sm me-2"><i className="fa fa-list-ul"></i></Link>
                                                        }
                                                    </td>
                                                    
                                                    <td>
                                                        {hasAnyPermission(['transactions.edit']) &&
                                                            <Link href={`/account/transactions/${transaction.id}/edit`} className="btn btn-primary btn-sm me-2"><i className="fa fa-pencil-alt"></i></Link>
                                                        }
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <Pagination links={transactions.links} align={'end'} />

                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    )

}