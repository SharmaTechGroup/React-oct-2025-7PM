import "./login.css";

export function Login()
{
    return(
        <div className="login-form">
            <form className="form-style alert alert-dismissible alert-warning">
                <h2 className="bi bi-person-circle"> User Login</h2>
                <button className="btn btn-close" data-bs-dismiss="alert"></button>
                <dl>
                    <dt> User Name</dt>
                    <dd> <input type="text" className="form-control" /> </dd>
                     <dt> Password</dt>
                    <dd> <input type="password" className="form-control" /> </dd>
                </dl>
                <button className="btn btn-warning w-100">Login</button>
            </form>
        </div>
    )
}