import { createContext, useEffect, useState } from "react";
import { SearchResults } from "./search-results";
import axios from "axios";

export let SearchContext = createContext(null);

export function SearchProducts(){

    const [products, setProducts] = useState([{id:0, title:null, image:null, price:0, category:null, description:null, rating:{rate:0, count:0}}])
    const [searchText, setSearchText] = useState();
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    function LoadProducts(url){
        axios.get(url)
        .then(response=>{
            setProducts(response.data);
        })
    }
    function handleSearchTextChange(e){
        setSearchText(e.target.value);
    }

    function handleSearchClick(){
        LoadProducts(`https://fakestoreapi.com/products/category/${searchText}`);
    }

    function CollectDataFromChild(product){
        cartItems.push(product);
        alert(`${product.title}\nAdded to Cart`);
        setCartCount(cartItems.length);
    }

    useEffect(()=>{
        LoadProducts('https://fakestoreapi.com/products');
    },[])

    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-2 bg-light mt-2">
                <div className="fw-bold fs-4">Fakestore</div>
                <nav>
                    <div className="input-group">
                        <input onChange={handleSearchTextChange} type="text" placeholder="eg: eletronics, jewelery" className="form-control" />
                        <button onClick={handleSearchClick} className="btn btn-warning bi bi-search"></button>
                    </div>
                </nav>
                <div>
                    <button data-bs-target="#cart" data-bs-toggle="offcanvas" className="btn btn-warning bi bi-cart4 position-relative">
                         <span className="badge rounded rounded-circle bg-danger text-white position-absolute">{cartCount}</span>
                    </button>
                    <div className="offcanvas offcanvas-end" id="cart">
                        <div className="offcanvas-header">
                            <h4>Your Cart Items</h4>
                            <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Preview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map(item=>
                                            <tr key={item.id}>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                    <img  width="50" height="50" src={item.image} />
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-4 overflow-auto" style={{height:'550px'}}>
                <SearchContext value={products} >
                    <SearchResults onAddToCartClick={CollectDataFromChild} />
                </SearchContext>
            </section>
        </div>
    )
}