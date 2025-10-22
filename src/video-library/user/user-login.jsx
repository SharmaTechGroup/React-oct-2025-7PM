import { Link } from "react-router-dom";


export function UserLogin(){
    return(
        <div>
            <h3>User Login</h3>
            <form>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" name="user_id" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="password" /></dd>
                </dl>
                <button className="btn btn-warning mx-2">Login</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
            <div className="mt-4">
                <Link to="/user-register"> New User ?  </Link>
            </div>
        </div>
    )
}