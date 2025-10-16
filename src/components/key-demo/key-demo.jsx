import axios from "axios";
import { useEffect, useState } from "react"

export function KeyDemo(){


    const [users, setUsers] = useState([{user_id:null}]);
    const [msg, setMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [togglePwdMsg, setTogglePwdMsg] = useState('d-none');

    function LoadUsers(){
        axios.get("users.json")
        .then(response=>{
            setUsers(response.data);
        })
    }

     useEffect(()=>{
        LoadUsers();
     },[])
    
    function VerifyUser(e){
        for(var user of users){
            if(user.user_id===e.target.value){
                setMsg('User Id Taken - Try Another');
                setErrorClass('text-danger');
                break;
            } else {
                setMsg('User Id Available');
                setErrorClass('text-success');
            }
        }
    }
    function VerifyCaps(e){
        if(e.which>=65 && e.which<=90){
            setTogglePwdMsg('d-block');
        } else {
            setTogglePwdMsg('d-none');
        }
    }

    return(
        <div className="p-3">
            <h3>Register User</h3>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={VerifyUser} /></dd>
                <dd className={errorClass} >{msg}</dd>
                <dt>Password</dt>
                <dd>
                    <input type="password"  onKeyPress={VerifyCaps} />
                </dd>
                <dd className={togglePwdMsg}>
                    <span className="bi text-warning bi-exclamation-triangle"> Warning : Caps ON </span>
                </dd>
            </dl>
        </div>
    )
}