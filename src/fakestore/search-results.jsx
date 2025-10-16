import { useContext, useEffect } from "react"
import { SearchContext } from "./search-products"

export function SearchResults({onAddToCartClick}){

    let context = useContext(SearchContext)

    function handleAddClick(product){
        onAddToCartClick(product);
    }

    return(
        <div className="d-flex flex-wrap">
            {
                context.map(product=>
                    <div style={{width:'200px'}} className="card m-2 p-2" key={product.id}>
                        <img className="card-img-top" src={product.image} height="120"/>
                        <div className="card-header overflow-auto" style={{height:'120px'}}>
                            {product.title}
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button onClick={()=> handleAddClick(product) } className="btn btn-warning bi bi-cart4 w-100"> Add to Cart</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}