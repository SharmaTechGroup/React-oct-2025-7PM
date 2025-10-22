import axios from "axios"
import { useFormik } from "formik"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"

export function AdminLogin(){


    const [cookies, setCookie, removeCookie] = useCookies(['admin_id']);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            admin_id: '',
            password: ''
        },
        onSubmit:(admin)=> {
            axios.get(`http://localhost:4400/admin`)
            .then(response=>{
                var result = response.data.find(item => item.admin_id===admin.admin_id);
                if(result){
                    if(result.password===admin.password){
                        setCookie('admin_id', admin.admin_id);
                        navigate('/admin-dashboard');
                    } else {
                        alert('Invalid Password');
                    }
                } else {
                    alert('Invalid Admin Id');
                }
            })
        }
    })

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h3>Admin Login</h3>
                <dl>
                    <dt>Admin Id</dt>
                    <dd><input name="admin_id" onChange={formik.handleChange} type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input name="password" onChange={formik.handleChange} type="password" /></dd>
                </dl>
                <button className="btn btn-warning" type="submit">Login</button>
            </form>
        </div>
    )
}