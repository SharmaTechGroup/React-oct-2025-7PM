import { useRef, useState } from "react"
import './loading-status.css';

export function LoadingStatus(){

    const [toggleButton, setToggleButton] = useState('');
    const [toggleProgress, setToggleProgress] = useState('d-none');
    const [toggleImage, setToggleImage] = useState('d-none');
    const [pvalue, setPalue] = useState(0);

    let progressValue = useRef(1);
    let thread = useRef(null);

    function StartDownloading(){
        progressValue.current = progressValue.current + 1;
        setPalue(progressValue.current);
        if(progressValue.current===100){
            setToggleImage('d-block');
            setToggleProgress('d-none');
            clearInterval(thread.current);
        }
    }

    function LoadClick(){
        thread.current = setInterval(StartDownloading,100);
        setToggleButton('d-none');
        setToggleProgress('d-block');
    }

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="text-center">
                <div className={toggleButton}>
                    <button onClick={LoadClick} className="btn btn-primary">Load Image</button>
                </div>
                <div className={toggleProgress}>
                    <progress min={1} max={100} value={pvalue} style={{height:'40px', width:'300px'}}></progress>
                    <div>
                        <button className="btn btn-success bi bi-play mx-2"></button>
                        <button className="btn btn-warning bi bi-pause"></button>
                    </div>
                    <p> {pvalue} % Completed </p>
                </div>
                <div className={toggleImage}>
                    <img src="iphone-pink.png" width='500' height='500' />
                </div>
            </div>
        </div>
    )
}