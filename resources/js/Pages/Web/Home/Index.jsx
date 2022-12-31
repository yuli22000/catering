//import React
import React from "react";
//import layout web
import LayoutWeb from '../../../Layouts/Web';

//import Head, usePage, Link
import { Head, usePage, Link } from '@inertiajs/inertia-react';

//import component slider
import Slider from '../../../Components/Slider';


//import component card category
import CardCategory from '../../../Shared/CardCategory';

//import component slider
import CardProduct from '../../../Shared/CardProduct';



export default function HomeIndex() {
    // membuat interval untuk mereload halaman setiap 3 detik
    $('.trending-products').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
  
    //destruct props "sliders", "categories", "products"
    const { sliders, categories,products} = usePage().props;

    return (
        <>
            <Head>
                <title>Catering Aisyah - Happy Shopping</title>
            </Head>
            <LayoutWeb>

                <Slider sliders={sliders} />

                <div className="container mt-4 mb-5">
                    <div className="fade-in">
                        <div className="row justify-content-center">
                            <div className="col-md-8">

                                {/** categories */}
                                <div className="row justify-content-between mb-3">
                                    <div className="col-md-6 col-6 text-start"><strong> Categories</strong></div>
                                    <div className="col-md-6 col-6 text-end">
                                        <Link href="/categories" className="text-dark"><strong>See More <i className="fa fa-long-arrow-alt-right"></i></strong></Link>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    {categories.map((category, index) => (
                                        <CardCategory category={category} key={index} />
                                    ))}
                                </div>

                                {/** products */}
                                    
                                <div className="row justify-content-between mb-3 mt-4">
                                    <div className="col-md-6 col-6 text-start"><strong> Products</strong></div>
                                    <div className="col-md-6 col-6 text-end">
                                        <Link href="/products" className="text-dark"><strong>See More <i className="fa fa-long-arrow-alt-right"></i></strong></Link>
                                    </div>
                                </div>

                                <div class="col-md-12">
                        <div class="owl-carousel owl-theme trending-products">
                                    {products.map((product, index) => (

                                        <CardProduct product={product} key={index} />

                                    ))}
                             </div>
                                </div>
                            

                            </div>
                        </div>
                    </div>
                </div>
            </LayoutWeb>

        </>
    )

}