import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"

export function FakestoreResults(){

    const [searchparams] = useSearchParams();

    const [products, setProducts] = useState([{id:0, title:null, description:null, category:null, price:0, rating:{rate:0, count:0}, image:null}]);

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${searchparams.get('category')}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[])

    function handleBackClick(){
        navigate("/search");
    }

    return(
        <div>
            <h2>Search Results</h2>
            <div>
                {
                    products.map(product=>
                        <img src={product.image} key={product.id} width="100" height="100" className="mx-2" />
                    )
                }
            </div>
            <button onClick={handleBackClick} className="btn btn-dark mt-2">Back</button>
        </div>
    )
}