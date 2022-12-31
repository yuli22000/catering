//import React
import React from "react";

//import Link
import { Link } from '@inertiajs/inertia-react';

//import formatPrice
import FormatPrice from '../Utils/FormatPrice';




export default function CardProduct({ product }) {


    return (
        <>
                {/* <div class="col-md-8"> */}
                    <div class="product-card">
                        <Link href={`/products/${product.slug}`} >
                        {product.product_images.length > 0
                                ? <img src={product.product_images[0].image} style={{ height:'200px' }} className="w-100 rounded-top p-1" />
                                : <img src="/assets/images/image.png" className="w-100 rounded-top p-1" />
                            }
                        </Link>
                        <div class="product-card-body">
                            <h5 class="product-name">
                               <a href="">
                               {product.title}
                            </a>
                            </h5>
                        <div>
                            <hr />
                            <span class="selling-price">Rp. {FormatPrice(product.product_sizes[0].price)}</span>
                            </div>

                        </div>
                    </div>
                    
                
                {/* </div> */}
        
        </>
    )

}