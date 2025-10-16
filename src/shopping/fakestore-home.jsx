import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function FakestoreHome(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            setCategories(response.data);
        })
    },[])

    return(
        <div className="container-fluid">
            <h3>Home</h3>
            <ol className="list-unstyled">
                {
                    categories.map(category=>
                        <li className="my-2 bg-dark text-white w-25 p-2" key={category}> <Link className="text-white text-decoration-none" to={`/products/${category}`}> {category.toUpperCase()} </Link> </li>
                    )
                }
            </ol>
        </div>
    )
}