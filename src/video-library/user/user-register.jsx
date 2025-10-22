import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function UserRegister(){

    const navigate = useNavigate();
    const [userMsg, setUserMsg] = useState('');
    const [userClass, setUserClass] = useState('');
   
    const formik = useFormik({
        initialValues: {
            user_id: '',
            user_name: '',
            password:'',
            mobile:''
        },
        onSubmit: (user)=> {
            axios.post('http://localhost:4400/users', user);
            alert('User Registered Successfully..');
            navigate('/user-login');
        }
    })

    function VerifyUser(e){
        axios.get('http://localhost:4400/users')
        .then(response=>{
             for(var user of response.data){
                  if(user.user_id===e.target.value){
                      setUserMsg('User Id Taken - Try Another');
                      setUserClass('text-danger');
                      break;
                  } else {
                      setUserMsg('User Id Available');
                      setUserClass('text-success');
                  }
             }
        })
    }

    return(
        <div>
            <h3>Reigster User</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onKeyUp={VerifyUser} onChange={formik.handleChange} name="user_id" /></dd>
                    <dd className={userClass}>{userMsg}</dd>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="user_name" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="password" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="mobile" /></dd>
                </dl>
                <button type="submit" className="btn btn-warning"> Register </button>
                <Link to="/user-login" className="btn btn-link mx-2">Have Account?</Link>
            </form>
        </div>
    )
}