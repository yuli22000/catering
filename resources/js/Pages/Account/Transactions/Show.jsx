//import react  
import React, { Component, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
//import layout
import LayoutAccount from '../../../Layouts/Account';

//import Head, usePage
import { Head, usePage, Link } from '@inertiajs/inertia-react';

//import formatPrice
import FormatPrice from '../../../Utils/FormatPrice';
//import Sweet Alert
import Swal from 'sweetalert2';

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";
import BankIndex from './Index';

export default function TransactionShow() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () => alert('Print success')
    });

    //destruct props "transaction"
    const { transaction,errors} = usePage().props;

    const [bukti, setBukti] = useState('');
    const [nominal, setNominal] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [name, setName] = useState('');

    const { banks } = usePage().props;

    //method storeImage
    const storeTransaction = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post('/account/transactions/store_transaction',  {

            //data
            bukti: bukti,
            name: name,
            tanggal: tanggal,
            nominal: nominal,
            transaction_id: transaction.id,

        }, {
            onSuccess: () => {

                //show alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Data saved successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });

                //set state to null
                // setBukti(null);
                // setName('');
                // setTanggal('');
                // setNominal('');
            }
        });
    }



    return (
        <>
            <Head>
                <title>Detail Transaction - Catering Aisyah</title>
            </Head>
            <LayoutAccount>

            <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-shopping-bag"></i> Form Pembyaran</span>
                            </div>
                            <div className="card-body">

  
                                
                            {banks.data.map((bank, index) => (
                                    <div class="card" style={{ width: '18rem' }} key={index}>
                                    {transaction.status_shiping == 'diterima' &&
                                        <div class="card-body mb-3 text-center" >
                                            <h5 class="card-title">CARD</h5>
                                            <img src={bank.image} width={'200'} height={'200'} className="rounded-3" />
                            
                                            <label className="form-label fw-bold"> {bank.rekening}  </label>
                                            <label className="form-label fw-bold mx-3" >  a/n {bank.name}</label>
                                        </div>
                                    }
                                        </div>
                                          ))}   
                                    
                                {/* {transaction.bukti_transfers.data.map((detail, index) => ( */}
                                    <form onSubmit={storeTransaction}>     
                                    {transaction.status_shiping == 'diterima'  &&
                                        <div className="mb-3 mt-3">
                                    
                                            <label className="form-label fw-bold">Nama </label>
                                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                        
                                        </div>
                                    }

                                    {
                                        errors.name && (
                                            <div className="alert alert-danger">
                                                {errors.name}
                                            </div>
                                        )
                                    }
                                    
                                    
                                    {transaction.status_shiping == 'diterima' &&
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Bukti tf</label>
                                            <input type="file" className="form-control" onChange={(e) => setBukti(e.target.files[0])} />
                                        </div>
                                    }
                                        {
                                            errors.bukti && (
                                                <div className="alert alert-danger">
                                                    {errors.bukti}
                                                </div>
                                            )
                                        }
                                      
                                    {transaction.status_shiping == 'diterima' &&
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Nominal</label>
                                            <input type="text" className="form-control" value={transaction.grand_dp} disabled onChange={(e) => setNominal(e.target.value)} />
                                        </div>
                                    }
                                        {
                                            errors.nominal && (
                                                <div className="alert alert-danger">
                                                    {errors.nominal}
                                                </div>
                                            )
                                        }
                                        

                                        <div>
                                        {transaction.status_shiping == 'diterima' &&
                                            <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> Save</button>
                                        }
                                        {transaction.status_shiping == 'diterima' &&
                                            <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> Reset</button>
                                        }

                                        </div>
                                  
                                    </form>

                            </div>
                        </div>
                    </div>
                </div>


            <div className="row mt-4">
                        <div className="col-12 col-md-12 col-lg-12 mb-4">
                            <div className="alert alert-success border-0 shadow-sm mb-0">
                            <h6>Menunggu konfirmasi pesanan dari Admin</h6>
                            <span>Setelah status pesanan DITERIMA, akan muncul form pembayaran DP</span> 
                        </div>

                        </div>
                    </div>
                <div className="row mt-4 mb-4">
                    <div className="col-12">

                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-shopping-cart"></i> Detail Transaction</span>
                            </div>
                            <button onClick={handlePrint} className="btn btn-success btn-md border-0 shadow rounded-3 w-100 mb-5">PRINT INVOICE</button>
                            <div className="card-body">
                            <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
                                <table className="table table-bordered">
                                    <tr>
                                        <td className="p-3" style={{ width: '25%' }}>
                                            NO. INVOICE
                                        </td>
                                        <td className="p-3" style={{ width: '1%' }}>:</td>
                                        <td className="p-3">
                                            {transaction.invoice}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">
                                            FULL NAME
                                        </td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {transaction.user.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">
                                            COURIER / SERVICE / COST
                                        </td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {transaction.courier_name} / {transaction.courier_service} / Rp.
                                            {FormatPrice(transaction.courier_cost)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">
                                            CITY
                                        </td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {transaction.city.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">
                                            PROVINCE
                                        </td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {transaction.province.name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">
                                            ADDRESS
                                        </td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {transaction.address}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">
                                            CATATAN PEMEBELI
                                        </td>
                                        <td>:</td>
                                        <td className="p-2">
                                            {transaction.catatan}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">
                                            GRAND TOTAL
                                        </td>
                                        <td>:</td>
                                        <td className="p-2">
                                            Rp. {FormatPrice(transaction.grand_total)}
                                        </td>
                                    </tr>
                                    <tr>
                                    <td className="p-3">
                                            Uang Muka
                                        </td>
                                        <td>:</td>
                                        <td className="p-2">
                                            Rp. {FormatPrice(transaction.grand_dp)}
                                        </td>
                                    </tr>
                                    <tr>
                                    <td className="p-3">
                                            SISA PEMBYARAN
                                        </td>
                                        <td>:</td>
                                        <td className="p-2">
                                            Rp. {FormatPrice(transaction.grand_sisa)}
                                        </td>
                                    </tr>
                                        <tr>
                                        <td className="p-3">
                                            Status pesanan
                                        </td>
                                        <td>:</td>
                                        <td className="p-2">
                                        <button class="btn btn-info bg-warning btn-sm border-0 shadow-sm">{transaction.status_shiping}</button>    
                                        </td>
                                            
                                    </tr>
                                    <tr>
                                        {/* <td>
                                            STATUS
                                        </td>
                                        <td>:</td>
                                            
                                         <td className="p-2">
                                            {transaction.status_shiping == 'diterima' | transaction.status_shiping == 'delivery' && 
                                                <a href={`https://app-sandbox.duitku.com/redirect_checkout?reference=${transaction.reference}&lang=id`} className="btn btn-success btn-sm border-0 shadow-sm"  >BAYAR DP</a>
                                            }
                                            
                                        
                                        
                                            {transaction.status == 'PAID' &&
                                                <button className="btn btn-sm btn-success border-0 shadow-sm"><i className="fa fa-check-circle"></i> PAID</button>
                                            }
                                            {transaction.status == 'CANCELLED' &&
                                                <button className="btn btn-sm btn-danger border-0 shadow-sm"><i className="fa fa-times"></i> CANCELLED</button>
                                                }
                                        
                                        </td> */}
                                    </tr>
                                </table>
                                </div>
                            </div>
                        </div>

                        
                        <div className="card border-0 rounded shadow-sm border-top-success mt-4">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-shopping-bag"></i> Detail Pembyaran</span>
                            </div>
                            <div className="card-body">
                                {transaction.bukti_transfers.data.map((detail, index) => (
                                    <div key={index}>
                                        <div className="row g-0">
                                            <div className="col-md-3 col-3"> 
                                                <img src={detail.bukti} className="img-fluid rounded-3" />
                                              
                                            </div>
                                            <div className="col-md-9 col-9">
                                                <div className="card-body">
                                                 

                                                    <div className="row">
                                                        <div className="col-md-3 col-6">
                                                            <div>
                                                                    Ditransfer atas nama : <strong>{detail.name}</strong>
                                                            </div>
                                                            <div>
                                                                    Nama Akun : <strong>{transaction.user.name}</strong>
                                                            </div>
                                                            
                                                                <div className="mt-3">
                                                                    Nominal : <strong>{transaction.grand_dp}</strong>
                                                                </div>
                                                                <div className="mt-3">
                                                                    Tanggal : <strong> {transaction.created_at}</strong>
                                                                </div>
                                                             
                                                              
                                                        </div>
                                                   
                                                    </div>

                                                    <hr />

                                                    {/* <h5>Rp. {FormatPrice(detail.price)}</h5> */}

                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card border-0 rounded shadow-sm border-top-success mt-4">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-shopping-bag"></i> Detail Product</span>
                            </div>
                            <div className="card-body">
                                {transaction.transaction_details.map((detail, index) => (
                                    <div key={index}>
                                        <div className="row g-0">
                                            <div className="col-md-3 col-3">
                                                <img src={detail.product_image} className="img-fluid rounded-3" />
                                            </div>
                                            <div className="col-md-6 col-9">
                                                <div className="card-body">
                                                    <h4 className="card-title">{detail.product.title}</h4>

                                                    <div className="row">
                                                        <div className="col-md-12 col-6">
                                                            <div>
                                                                Qty : <strong>{detail.qty}</strong>
                                                            </div>
                                                            <div className="mt-3">
                                                                Size : <strong>{detail.size}</strong>
                                                            </div>
                                                            <div className="mt-3">
                                                                Mix Menu : <strong>{detail.name}</strong>
                                                            </div>
                                                        </div>
                                                   
                                                    </div>

                                                    <hr />

                                                    <h5>Rp. {FormatPrice(detail.price)}</h5>

                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </LayoutAccount>
        </>
    )

}