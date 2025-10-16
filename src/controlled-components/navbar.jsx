export function Navbar(props){
    return(
        <nav className={`d-flex my-2 border ${props.theme} justify-content-between p-2 border-1`}>
            <div className="fw-bold fs-5">{props.brand}</div>
            <div>
                {
                    props.menu.map(item=><span className="mx-4" key={item}>{item}</span>)
                }
            </div>
            <div>
                <button className="bi btn bi-person-fill"> Signin </button>
                <button className="bi bi-heart btn"></button>
                <button className="bi bi-facebook btn"></button>
            </div>
        </nav>
    )
}