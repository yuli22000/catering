//import hook react
import React, { useState } from "react";

//import menu component
import Menu from '../../../components/Menu';

//import menu component
import Header from '../../../components/Header';
//import Head, usePage and Link
import { Head, usePage, Link } from '@inertiajs/inertia-react';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function Login() {

    return (
        <>
              <Header />
            <Head>
                <title>Halaman About</title>
            </Head>
            <div className="container"  style={{ marginBottom: '80px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-4 mt-80">
                        <div className="text-center mb-4">
                            <img src="/assets/images/logo.png" width={'60'} />
                            <h4><strong>Catering</strong> Aisyah</h4>
                        </div>
                        <div className="card border-0 rounded-3 shadow-sm border-top-success">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="fw-bold">CITARASA PRIMA, KUALITAS UTAMA</h6>
                                    <hr />
                                    <div className="register text-center mt-3">Aisyah Purple melayani jasa boga berkualitas dan bercitarasa prima dengan tampilan yang lebih eksklusif dan lebih terpercaya dalam memberikan jamuan bagi tamu-tamu penting Anda</div>
                                    <div className="register text-center mt-3 mb-5">
                                        Beragam menu masakan Nusantara dan dunia menjadikan Aisyah Purple sebagai jasa Catering yang Inovatif dengan lebih dari 200 koleksi menu lezat yang siap dihidangkan.
                                    </div>

                                    <div className="register text-center mt-3 mb-5">
                                    Lokasi kami :
                                    </div>
                                </div>
                               
                         
                                
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0753961544156!2d104.05196431475379!3d1.1057069991934676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x221ac7ef9ebc1671!2zMcKwMDYnMjAuNiJOIDEwNMKwMDMnMTUuMCJF!5e0!3m2!1sid!2sid!4v1670995861667!5m2!1sid!2sid"  width="100%" height="400"  frameborder="0" border="0" allowfullscreen=""
                                    aria-hidden="false" tabindex="0"></iframe>
                    
                               
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

            <Menu />
        </>
    )

}