//import React
import React from "react";

//import Link
import { Link } from '@inertiajs/inertia-react';

export default function Header() {

    return (
        <>
            <div className="footer-area">
            <div className="container">
                <div className="fade-in">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
        

                        <h4 class="footer-heading">AISYAH PURPLE</h4>
                        <div class="footer-underline"></div>
                        <p>
                            Aisyah Purple melayani jasa boga berkualitas dan bercitarasa prima dengan tampilan yang lebih eksklusif dan lebih terpercaya dengan memberikanjamuan bagi tamu-tamu penting anda. Beragam menu masakan nusantara dan dunia menjadikan Salsa sebagai jasa Catering yang inovatif dengan lebih dari 200 koleksi menu lezat yang siap dihidangkan.
                        </p>
                    </div>
                    <div class="col-md-2">
                        <h4 class="footer-heading">Quick Links</h4>
                        <div class="footer-underline"></div>
                        <div class="mb-2"><a href="" class="text-white">Home</a></div>
                        <div class="mb-2"><a href="/about" class="text-white">About Us</a></div>
                    </div>
                    <div class="col-md-2">
                        <h4 class="footer-heading">Contact Us</h4>
                        <div class="footer-underline"></div>
                        <div class="mb-2">
                            <a href="" class="text-white">
                                <i class="fa fa-phone"></i> +62812 7688-1744
                            </a>
                        </div>
                        <div class="mb-2">
                            <a href="" class="text-white">
                                <i class="fa fa-envelope"></i> aisyahpurplecatering@gmail.com
                            </a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class="copyright-area mb-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p class=""> &copy; 2022 - Catering Aisyah . All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
         </div>
  
        </>
    )

}