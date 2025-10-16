import { useState } from "react"

export function MouseMove(){


    const [styleObj, setStyleObject] = useState({});

    function handleMouseMove(e){
        setStyleObject({
            position:'fixed',
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        })
    }

    return(
        <div className="p-3" onMouseMove={handleMouseMove}>
            
            <div style={{height:'1000px'}}>
                <p className="fs-3">Move mouse pointer to test</p>
            </div>
            <img width="50" style={styleObj} height="50" src="flag.gif" />
        </div>
    )
}