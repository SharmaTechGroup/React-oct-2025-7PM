import { useEffect, useState } from "react";
import axios from "axios";

export function Flipkart(){


    const [product, setProduct] = useState({title:null, price:0, image:null, rating:{rate:0, ratings:0, reviews:0}, offers:[]});

    function LoadProduct(){
        axios.get("product.json")
        .then(response => {
             setProduct(response.data);
        })
    }

    useEffect(()=> {
        LoadProduct();
    },[])

    return(
        <div>
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%" />
                </div>
                <div className="col-9">
                    <div className="fs-5">{product.title}</div>
                    <div className="mt-2">
                        <span className="badge bg-success text-white rounded">{product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                        <span className="mx-2 fw-bold text-secondary"> {product.rating.ratings.toLocaleString('en-in')} ratings & {product.rating.reviews} reviews </span>
                    </div>
                    <div className="my-2 fs-1 fw-bold">
                        {product.price.toLocaleString('en', {style:'currency', currency:'INR', minimumFractionDigits:0})}
                    </div>
                    <div className="mt-4">
                        <h6>Available Offers</h6>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=>
                                    <li className="bi bi-tag-fill text-success my-3" key={offer}> <span className="text-secondary"> {offer} </span> </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}