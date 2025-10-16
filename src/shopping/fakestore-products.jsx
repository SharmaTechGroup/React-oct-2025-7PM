import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";


export function FakestoreProducts(){

    const params = useParams();
    const [products, setProducts] = useState([{id:0, title:null, description:null, category:null, price:0, rating:{rate:0, count:0}, image:null}]);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[])

    return(
        <div className="container-fluid">
            <h3> { params.category.toUpperCase() } PRODUCTS </h3>
            <div className="row">
              <div className="col">
                    <div className="d-flex flex-row flex-wrap">
                {
                    products.map(product=>
                        <div key={product.id} className="card m-2 p-2" style={{width:'140px'}}>
                            <img src={product.image} height="100" className="card-img-top" />
                            <div className="card-footer">
                                <Link className="btn btn-primary" to={`details/${product.id}`}> <span className="bi bi-eye"></span> View </Link>
                            </div>
                        </div>
                    )
                }
            </div>
            <Link to="/">Back to Home</Link>
              </div>
              <div className="col">
                   <Outlet />
              </div>
            </div>
        </div>
    )
}