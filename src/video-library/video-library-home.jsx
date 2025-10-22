import { Link } from "react-router-dom";


export function VideoLibraryHome(){
    return(
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
            <div>
                <Link to="/user-login" className="btn btn-warning"> User Login </Link>
                <Link to="/admin-login" className="btn btn-dark mx-2"> Admin Login </Link>
            </div>
        </div>
    )
}