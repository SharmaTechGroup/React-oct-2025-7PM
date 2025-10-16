import { useState } from "react"

export function FocusDemo(){


    const [code, setCode] = useState('');
    const [tip, setTip] = useState('');
    const [msg, setMsg] = useState('');

    function handleChange(e){
        setCode(e.target.value);
    }

    function handleBlur(){
        setCode(code.toUpperCase());
        setTip('');
    }
    function handleFocus(){
        setTip('eg: IFSC Code SBIN000022, HDFC932234');
    }

    function handlePaste(){
        document.onpaste = function(){
            return false;
        }
    }
    function handleCopy(e){
        setMsg(` ${e.target.value} Copied to clipboard`);
    }
    function handleContext(){
        document.oncontextmenu = function(){
            alert('Right Click Not Allowed');
            return false;
        }
    }

    return(
        <div className="container-fluid p-2" onContextMenu={handleContext}>
            <h2>Right Click Disabled on this page.</h2>
            <dl>
                <dt>Your Bank IFSC Code</dt>
                <dd>
                    <input type="text" onFocus={handleFocus} onChange={handleChange} value={code} onBlur={handleBlur} />
                </dd>
                <dd className="fs-7 text-warning">{tip}</dd>
                <dt>Verify Code</dt>
                <dd>
                    <input type="text" onCopy={handleCopy} onPaste={handlePaste} />
                </dd>
                <dd>{msg}</dd>
            </dl>
        </div>
    )
}