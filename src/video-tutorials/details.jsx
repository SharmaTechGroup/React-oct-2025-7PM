import { useParams } from "react-router-dom"

export function Details(){

    const params = useParams();

    return(
        <div>
            <h2>Product Details</h2>
            <dl>
                <dt>Product ID</dt>
                <dd>{params.id}</dd>
                <dt>Name</dt>
                <dd>{params.name}</dd>
                <dt>Price</dt>
                <dd>{params.price}</dd>
            </dl>
        </div>
    )
}