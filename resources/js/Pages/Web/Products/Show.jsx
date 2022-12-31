import React, { useState } from "react";

//import layout web
import LayoutWeb from '../../../Layouts/Web';

//import Head, usePage
import { Head, usePage } from '@inertiajs/inertia-react';

//import formatPrice
import FormatPrice from '../../../Utils/FormatPrice';

//import component add to cart
import AddTocart from './AddToCart';

export default function ProductShow() {
   
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://catering-1.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
    //destruct props "product"
    const { product } = usePage().props;

    //define state
    const [productImage, setProductImage] = useState(product.product_images[0].image);
    const [name, setName] = useState([]);
    const [harga, setHarga] = useState(product.product_mixes[0].harga);
    const [size, setSize] = useState(product.product_sizes[0].size);
    const [price, setPrice] = useState(product.product_sizes[0].price);
    const [namePrices, setNamePrices] = useState({});

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
          setName([...name, value]);
          setNamePrices({ ...namePrices, [value]: product.product_mixes.find(mix => mix.name === value).harga });
        } else {
          setName(name.filter(val => val !== value));
          const { [value]: removed, ...rest } = namePrices;
          setNamePrices(rest);
        }
      };
      
      const totalPrice = price + Object.values(namePrices).reduce((total, current) => total + current, 0);
    const changeSizeAndPrice = (size, price) => {
        setSize(size);
        setPrice(price);
    }

    const changeSizeAndHarga = (name, harga) => {
        setName([...name]);
        setHarga(harga);
      }

    return (
        
        <>
            <Head>
                <title>{`${product.title} - Catering Aisyah - Happy Shopping`}</title>
            </Head>
            <LayoutWeb>

                <div className="container mt-70 mb-5">
                    <div className="fade-in">
                        <div className="row justify-content-center">
                            <div className="col-md-8">

                                <div className="card border-0 bg-gray rounded-0 shadow-sm pt-2 mb-0">
                                    <div className="card-body text-center">
                                        <img src={productImage} width="300" className="rounded-3" />
                                    </div>
                                </div>
                                <div className="card border-0 rounded-top-none rounded shadow-sm mt-0 mb-3">
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-md-6 col-6 text-start">
                                                <h5>{product.title}</h5>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="row">
                                        <div className="col-md-6 col-6">
                                                <h5>Rp. {FormatPrice(price)}</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 col-12">
                                                <h5>Total harga : Rp.  {FormatPrice(totalPrice)}</h5>
                                            </div>
                                        
                                        </div>
                                        <div className="colors mt-4">
                                            <h5 className="mt-3">Size : </h5>
                                            <div className="mt-3">
                                                {product.product_sizes.map((size, index) => (
                                                    <button onClick={() => changeSizeAndPrice(size.size, size.price)} className="btn btn-success btn-sm me-2 border-0 shadow-sm w-full" key={index}>{size.size}</button>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <h5 className="mt-3">Pilihan Menu Mix : </h5>
                                        {product.product_mixes.map((name, index) => (
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox"  onClick={() => changeSizeAndHarga(name.name, name.harga)} 
                                                    value={name.name}
                                                    onChange={handleCheckboxChange}
                                                />
                                                {/* <label onClick={() => changeSizeAndHarga(name.name, harga.harga)} className="btn btn-success btn-sm me-2 border-0 shadow-sm w-5" key={index}>{name.name}</label> */}
                                                <label  className="form-check-label" key={index}>{name.name}</label>
                                            </div>
                                        ))}
                                        <hr />
                                        <div class="vstack gap-2 col-md-5">
                                        <button type="button" data-bs-toggle="collapse" href="#multiCollapseExample1" class="btn btn-outline-secondary">Lihat detail harga mix menu</button>
                                        {/* <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Harga Menu Mix</a> */}
                                        <div class="row">
                                <div class="col">
                                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                                    <div class="card card-body mt-2">
                                    <table class="table">
                                        <thead>    
                                            <tr>
                                            <th scope="col">Nama Mix Menu</th>
                                            <th scope="col">Harga</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product.product_mixes.map((name, index) => (
                                                <tr>
                                                    <td>{ name.name}</td>
                                                    <td>{name.harga }</td>
                                                </tr>
                                            ))}             
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                                            </div>
                                            </div>
                                    </div>
                                </div>

                                <div className="card border-0 rounded shadow-sm mb-5">
                                    <div className="card-body">
                                        <h5>Description</h5>
                                        <hr />
                                        <div dangerouslySetInnerHTML={{ __html: product.description }} />
                                    </div>
                                   
                                </div>

                                <div className="card border-0 rounded shadow-sm mb-5">
                                    <div className="card-body">
                                    <div id="disqus_thread"></div>
                                    </div>
                                    </div>

                                <AddTocart
                                    product_id={product.id}
                                    productImage={productImage}                
                                    name={name.join(", ")}           
                                    size={size}
                                    price={totalPrice}
                                    totalPrice={totalPrice}
                                    harga={harga}
                                    weight={product.weight}                
                                />
                           
                            </div>
                        </div>
                    </div>
                </div>

            </LayoutWeb>
        </>
    )

}