import { useState } from "react"
import { CarouselDemo } from "../carousel-demo/carousel-demo";
import { FormDemo } from "../form-demo/form-demo";

export function ConditionDemo(){

    const [component, setComponent] = useState();
    const [user, setUser] = useState();

    function handleNameChange(e){
        setUser(e.target.value);
    }
    
    function handleSignInClick(){
        if(user==="john"){
            setComponent(<CarouselDemo />);
        } else {
            setComponent(<FormDemo />);
        }
    }

    return(
        <div className="container-fluid">
            <h2>Conditional Render</h2>
            <input type="text" onChange={handleNameChange} />
            <button onClick={handleSignInClick}>Signin</button>
            <hr />
            <div>
                {
                    component
                }
            </div>
        </div>
    )
}