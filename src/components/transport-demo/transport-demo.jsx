import { useState } from "react";

export function ChildComponent({onChildComponentClickEvent}){

    function handleButtonClick(){
        const data = "Hello ! from Child";
        onChildComponentClickEvent(data);
    }

    return(
        <div className="m-4 p-4 bg-light text-dark">
            <h4>Child Component</h4>
            <button onClick={handleButtonClick} className="btn btn-warning">Send Data to Parent</button>
        </div>
    )
}

export function TransportDemo(){

    const [data, setData] = useState();

    function ChildClick(e){
        setData(e);
    }

    return(
        <div className="m-4 p-4 bg-dark text-white">
            <h2>Parent Component</h2>
            <p>{data}</p>
            <ChildComponent onChildComponentClickEvent={ChildClick}  />
        </div>
    )
}