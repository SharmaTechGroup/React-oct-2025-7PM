import { useEffect, useState } from "react";
import moment from "moment";

export function DataBinding(){

   
    const [pattern] = useState(/\+91\d{10}/);
    const [mobile] = useState('+919876543210');
  
    return(
        <div className="container p-4">
            <h2>Data Binding</h2>
            <p>{(mobile.match(pattern))? "Verified": "Invalid Mobile"}</p>
        </div>
    )
}