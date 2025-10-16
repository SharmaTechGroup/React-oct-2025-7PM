import { createContext, useContext, useState } from "react"

let UserContext = createContext(null);

export function Level1(){

    let context = useContext(UserContext);

    return(
        <div className="m-4 p-4 bg-dark text-white">
            <h4>Level-1 - {context} </h4>
            <Level2 />
        </div>
    )
}

export function Level2(){

    let context = useContext(UserContext);

    return(
        <div className="m-4 p-4 bg-danger text-white">
            <h4>Level-2 - {context}</h4>
        </div>
    )
}
export function ContextDemo(){
    const [user, setUser] = useState('John');
    function handleNameChange(e){
        setUser(e.target.value);
    }
    return(
        <div className="p-5 bg-warning">
            <h1>Parent <input type="text" onChange={handleNameChange} /> </h1>
            <UserContext value={user} >
                <Level1 />
            </UserContext>
        </div>
    )
}