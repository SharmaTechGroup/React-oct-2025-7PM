import axios from "axios";
import { useEffect, useState } from "react"
import './event-binding.css';

export function EventBinding(){

   
    const [mobiles, setMobiles] = useState([{img_src:null}]);
    const [preview, setPreivew] = useState('iphone-green.jpg');

    function LoadMobiles(){
        axios.get("mobiles.json")
        .then(response=>{
             setMobiles(response.data);
        })
    }

    useEffect(()=>{
        LoadMobiles();
    },[])

    function handleMouseOver(e){
        setPreivew(e.target.src);
    }

    return(
        <div className="p-4">
           <div className="row">
                <div className="col-2">
                    {
                        mobiles.map(mobile=>
                            <div className="my-4" key={mobile}>
                                <img className="border-style" onMouseOver={handleMouseOver} src={mobile.img_src} width="50" height="50" />
                            </div>
                        )
                    }
                </div>
                <div className="col-10">
                    <img width="400" height="400" src={preview} />
                </div>
           </div>
        </div>
    )
}