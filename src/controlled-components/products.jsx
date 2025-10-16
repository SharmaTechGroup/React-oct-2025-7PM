

export function Products(props){
     return(
        <div className="d-flex flex-wrap flex-row">
            {
                props.data.map(item=>
                    <div key={item.id} className="card m-2 p-2" style={{width:'200px'}}>
                        <img className="card-img-top" src={item.image} height="100" />
                        <div className="card-header" style={{height:'120px'}}>
                            {item.title}
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{item.price}</dd>
                                <dt>Rating</dt>
                                <dd>{item.rating.rate} <span className="bi bi-star-fill text-success"></span> </dd>
                            </dl>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-warning w-100">Add to Cart</button>
                        </div>
                    </div>
                )
            }
        </div>
     )
}