import { useRef, useState } from "react"

export function DebounceDemo(){

    const [msg, setMsg] = useState('');

    let thread = useRef(null);


    function level1(){
        setMsg('Volume Increased : 20%');
    }

    function level2(){
        setMsg('Volume Increased : 60%');
    }

    function level3(){
        setMsg('Volume Full');
    }
   
    function VolumeUpClick(){
       setTimeout(level1, 2000);
       thread.current = setTimeout(level2, 6000);
       setTimeout(level3, 10000);
    }
    
    function CancelClick(){
        alert("Level 2 Canceled");
        clearTimeout(thread.current);
    }

    return(
        <div className="container-fluid p-4">
            <button onClick={VolumeUpClick} className="btn btn-primary bi bi-volume-up"> </button>
            <button onClick={CancelClick} className="btn btn-warning mx-2">Cancel Level2</button>
            <p className="fs-4 fw-bold">{msg}</p>
        </div>
    )
}