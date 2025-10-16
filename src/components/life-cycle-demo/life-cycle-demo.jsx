import { useEffect, useState } from "react"


export function Login(){

    useEffect(()=>{
        console.log('Login Component Mounted');
        return()=>{
            console.log('Login Component will unmount');
        }
    },[])

    return(
        <div>
            <h3>Login</h3>
        </div>
    )
}
export function Register(){
     useEffect(()=>{
        console.log('Register Component Mounted');
        return()=>{
            console.log('Register Component will unmount');
        }
    },[])
    return(
        <div>
            <h3>Register</h3>
        </div>
    )
}

export function LifeCycleDemo(){

    const [component, setComponent] = useState();

    function handleLoginClick(){
        setComponent(<Login />);
    }

    function handleRegisterClick(){
        setComponent(<Register />);
    }

    return(
        <div className="container-fluid">
            <h2>Life Cycle</h2>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleRegisterClick} className="mx-2">Register</button>
            <hr />
            {component}
        </div>
    )
}