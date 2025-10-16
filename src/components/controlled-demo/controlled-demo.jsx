import { useState } from "react";
import { DataGrid } from "../../controlled-components/data-grid";

export function ControlledDemo(){

    const [employees] = useState([
        {FirstName:'Kiran', LastName:'Kumar', Salary:45000},
        {FirstName:'Raj', LastName:'Kumar', Salary:35000},    
    ]);
    const [products] = useState([
        {Name: 'TV', Price:24000},
        {Name: 'Mobile', Price: 34000},
        {Name: 'Watch', Price: 5000}
    ])

    const [layoutName, setLayoutName] = useState('card');

    function handleLayoutChange(e){ 
        if(e.target.value==="grid"){
            setLayoutName('grid');
        } else {
            setLayoutName('card');
        }
    }

    return(
        <div className="container-fluid">
            <h2>Controlled Demo</h2>
            <select onChange={handleLayoutChange} className="my-2 form-select w-25">
                <option>Choose Layout</option>
                <option value='grid'>Grid</option>
                <option value='card'>Card</option>
            </select>
            <DataGrid layout={layoutName} caption="Employee Details" data={employees} />
            <DataGrid layout={layoutName} caption="Product Details" data={products} />
        </div>
    )
}