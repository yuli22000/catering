//import react  
import React from "react";

//import layout
import LayoutAccount from '../../../Layouts/Account';

//import Head, usePage
import { Head, usePage } from '@inertiajs/inertia-react';

//import component slider create
import BankCreate from './Create';
//import component delete
import Delete from '../../../Shared/Delete';

export default function BankIndex() {

    //destruct props "sliders"
    const { banks } = usePage().props;

    return (
        <>
            <Head>
                <title>Banks - Catering Aisyah purple</title>
            </Head>
            <LayoutAccount>
            <BankCreate />
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold"><i className="fa fa-images"></i> Image Bank</span>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped table-hovered">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ width: '5%' }}>No.</th>
                                                <th scope="col" style={{ width: '20%' }}>Image</th>
                                                <th scope="col" style={{ width: '15%' }}>Name</th>
                                                <th scope="col" style={{ width: '15%' }}>Rekening</th>
                                                <th scope="col" style={{ width: '15%' }}>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {banks.data.map((bank, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">{++index + (banks.current_page - 1) * banks.per_page}</td>
                                                    <td className="text-center">
                                                        <img src={bank.image} width={'200'} className="rounded-3" />
                                                    </td>
                                                    <td className="text-center">
                                                        {bank.name}
                                                    </td>
                                                    <td className="text-center">
                                                        {bank.rekening}
                                                    </td>
                                                    <td className="text-center">
                                                        <Delete URL={'/account/banks'} id={bank.id} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    )

}