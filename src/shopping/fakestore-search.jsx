
import { TextField, Button } from "@mui/material"

export function FakestoreSearch(){
    return(
        <div>
            <h3>Search Products</h3>
            <h2>Bootstrap</h2>
            <form method="get" className="input-group w-25" action="/results">
                <input type="text" name="category" className="form-control" />
                <button type="submit" className="btn btn-danger">Search</button>
            </form>
            <h2 className="mt-4">React MUI</h2>
            <form action="/results">
                 <div className="w-25">
            <div>
                <TextField type="text" name="category" label="Search Amazon" variant="standard" className="w-100"></TextField>
            </div>
            <div className="mt-3">
                <Button type="submit" variant="contained" color="error" className="w-100" >Search</Button>
            </div>
            </div>
            </form>
        </div>
    )
}