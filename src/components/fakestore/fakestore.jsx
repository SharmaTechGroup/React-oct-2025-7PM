import axios from "axios";
import { useEffect, useState } from "react"
import { Products } from "../../controlled-components/products";

export function Fakestore(){

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{id:0, title:null, description:null, price:0, image:null, category:null, rating:{rate:0, count:0}}])
    const [searchString, setSearchString] = useState();
    const [component, setComponent] = useState();

    function LoadCategories(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            response.data.unshift('all');
            setCategories(response.data);
        })
    }

    function LoadProducts(url){
        axios.get(url)
        .then(response=>{
            setProducts(response.data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts('https://fakestoreapi.com/products');
        setComponent(<Products data={products} />);
    },[])

    function handleCategoryChange(e){
        var categoryName = e.target.value;
        if(categoryName==='all'){
            LoadProducts('https://fakestoreapi.com/products');
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${categoryName}`);
        }
    }
    function handleSearchChange(e){
        setSearchString(e.target.value);
    }

    function handleSearchClick(){
        LoadProducts(`https://fakestoreapi.com/products/category/${searchString}`);
        if(categories.indexOf(searchString)===-1){
            setComponent(<div>Category Not Found</div>)
        } else {
            setComponent(<Products data={products} />);
        }
    }

    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-2 mt-3 bg-light">
                <div className="fs-4 fw-bold">Fakestore</div>
                <nav>
                    <div className="input-group">
                        <input onChange={handleSearchChange} type="text" placeholder="Search fakestore.com" className="form-control"/>
                        <button onClick={handleSearchClick} className="btn btn-warning bi bi-search"></button>
                    </div>
                </nav>
                <div>
                    <button className="bi btn btn-warning bi-cart4 position-relative"><span className="badge rounded rounded-circle bg-danger text-white position-absolute">0</span></button>
                </div>
            </header>
            <section className="mt-4 row">
                <div className="col-2">
                   <div className="mt-4">
                     <label className="form-label">Select Category</label>
                     <div>
                        <select onChange={handleCategoryChange} className="form-select">
                            {
                                categories.map(category=><option key={category} value={category}>{category.toUpperCase()}</option>)
                            }
                        </select>
                     </div>
                   </div>
                </div>
                <div className="col-10 overflow-auto" style={{height:'550px'}}>
                    {
                        component
                    }
                </div>
            </section>
        </div>
    )
}