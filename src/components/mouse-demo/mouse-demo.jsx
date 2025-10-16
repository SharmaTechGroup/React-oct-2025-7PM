import { useState } from 'react';
import './mouse-demo.css';

export function MouseDemo(){

    const [animationObject, setAnimationObject] = useState({animationName:'Spin', animationDuration:'5s', animationIterationCount:'infinite', animationTimingFunction:'linear'});

    function handleMouseUp(){
        setAnimationObject({animationName:'Spin', animationDuration:'5s', animationIterationCount:'infinite', animationTimingFunction:'linear'});
    }
    function handleMouseDown(){
        setAnimationObject({animationName:'Spin', animationDuration:'1s', animationIterationCount:'infinite', animationTimingFunction:'linear'});
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <img onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} src='react.svg' style={animationObject} width="200" height="200" />
        </div>
    )
}