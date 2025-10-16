import axios from "axios";
import { useEffect, useState } from "react"

export function Nasa(){

    const [marsObject , setMarsObject] = useState({photos:[]});

    function LoadData(){
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=FJfuJp29jaHFRmmsz1MwNV0m3a2AbBkUdFiNyhoI')
        .then(response=>{
            setMarsObject(response.data);
        })
    }
    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <h2>Mars Rover Photos Cards</h2>
            <main className="d-flex flex-wrap">
                {
                    marsObject.photos.map(item=>
                        <div key={item.id} style={{width:'250px'}} className="card m-2 p-2">
                            <img src={item.img_src} className="card-img-top" height="120" />
                            <div className="card-header">
                                <div className="fs-4 fw-bold">{item.id}</div>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt className="bi bi-camera"> Camera</dt>
                                    <dd>{item.camera.full_name}</dd>
                                    <dt className="bi bi-rocket"> Rover </dt>
                                    <dd> {item.rover.name} </dd>
                                </dl>
                            </div>
                            <div>
                                <a href={item.img_src} target="_blank" className="bi bi-eye-fill btn btn-primary w-100"> Preview </a>
                            </div>
                        </div>
                    )
                }
            </main>
        </div>
    )
}