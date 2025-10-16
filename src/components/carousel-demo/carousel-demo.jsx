import axios from "axios";
import { useEffect, useRef, useState } from "react"

export function CarouselDemo(){


    const [product, setProduct] = useState({id:0, title:null, price:0, description:null, category:null, image:null, rating:{rate:0, count:0}});
    const [status, setStatus] = useState('Slide Show - Manual');

    let productId = useRef(1);
    let thread = useRef(null);

    function LoadProductManual(id){
         axios.get(`https://fakestoreapi.com/products/${id}`)
         .then(response=>{
            setProduct(response.data);
         })
    }

    function LoadProductAuto(){
        productId.current = productId.current + 1;
        axios.get(`https://fakestoreapi.com/products/${productId.current}`)
        .then(response=>{
            setProduct(response.data);
        })
    }

    function NextClick(){
        productId.current = productId.current + 1;
        LoadProductManual(productId.current);
         setStatus('Slide Show - Manual');
    }
    function PreviousClick(){
        productId.current = productId.current - 1;
        LoadProductManual(productId.current);
         setStatus('Slide Show - Manual');
    }

    function SeekbarChange(e){
        productId.current = parseInt(e.target.value);
        LoadProductManual(productId.current);
        setStatus('Slide Show - Manual');
    }

    function PlayClick(){
        thread.current = setInterval(LoadProductAuto, 5000);
        setStatus('Slide Show - Running');
    }

    function PauseClick(){
        clearInterval(thread.current);
        setStatus('Slide Show - Paused');
    }

    useEffect(()=>{
        LoadProductManual(1);
    },[])


    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card p-2 mt-4 w-50">
                <div className="card-header text-center overflow-auto" style={{height:'60px'}}>
                    {product.title}
                    <div>
                        [{status}]
                    </div>
                </div>
                <div className="card-body row">
                    <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                        <button onClick={PreviousClick} className="btn btn-dark bi bi-chevron-left"></button>
                    </div>
                    <div className="col-10 position-relative">
                        <div className="position-absolute fs-6 rounded rounded-circle end-0 top-0 badge p-3 bg-danger text-white"> {product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})} </div>
                        <img height="350" src={product.image} width="100%" />
                        <div>
                            <input onChange={SeekbarChange} type="range" min={1} max={20} value={productId.current} className="form-range" />
                        </div>
                    </div>
                    <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                        <button onClick={NextClick} className="btn btn-dark bi bi-chevron-right"></button>
                    </div>
                </div>
                <div className="card-footer text-center">
                        <button onClick={PlayClick} className="btn btn-outline-warning bi bi-play mx-2"></button>
                        <button onClick={PauseClick} className="btn btn-outline-danger bi bi-pause mx-2"></button>
                </div>
            </div>
        </div>
    )
}