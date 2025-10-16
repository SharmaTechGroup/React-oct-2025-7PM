
export function TimeoutDemo(){


    function Signout(){
        alert("Your session timeout - You will be signed out");
        sessionStorage.removeItem("uname");
        window.location.reload();
    }

    function handleSignInClick(){
        sessionStorage.setItem("uname", "John");
        alert("Signed In");
        setTimeout(Signout, 10000);
    }

    return(
        <div className="p-4">
            <button onClick={handleSignInClick}>Sign In</button>
        </div>
    )
}