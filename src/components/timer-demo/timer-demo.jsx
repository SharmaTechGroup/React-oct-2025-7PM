import { useEffect, useState } from "react"

export function TimerDemo(){

    const [today, setToday] = useState(new Date());

    useEffect(()=>{
        setInterval(function(){
            setToday(new Date());
        },1000)
    },[])

    return(
        <div className="d-flex container-fluid justify-content-center p-4">
            <div className="fs-2 fw-bold">{today.toLocaleTimeString()}</div>
        </div>
    )
}