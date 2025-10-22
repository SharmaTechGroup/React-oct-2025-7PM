import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, useNavigate } from "react-router-dom";


export function AdminDashboard(){

    const [cookies, setCookie, removeCookie] = useCookies(['admin_id']);

    const [videos, setVideos] = useState([{title:null, description:null, url:null, likes:0, dislikes:0, views:0, comments:null, category_id:0}])

    const navigate = useNavigate();

    function handleSignout(){
        removeCookie('admin_id');
        navigate('/');
    }

    function LoadVideos(){
        axios.get('http://localhost:4400/videos')
        .then(response=>{
            setVideos(response.data);
        })
    }

    useEffect(()=>{

         if(cookies['admin_id']){
             LoadVideos();
         } else {
            navigate('/admin-login');
         }

    },[])

    return(
        <div>
            <h3 className="d-flex justify-content-between"> <span>Admin Dashboard</span> <span>{cookies['admin_id']}</span> <button onClick={handleSignout} className="btn btn-link">Signout</button> </h3>
            <div className="mt-2">
                <div>
                    <Link to="/add-video" className="btn btn-primary bi bi-camera-video"> Add New Video </Link>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Preview</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            videos.map(video=>
                                <tr key={video.title}>
                                    <td>{video.title}</td>
                                    <td>
                                        <iframe src={video.url} width="200" height="100"></iframe>
                                    </td>
                                    <td>
                                        <Link to={`/edit-video/${video.id}`} className="btn btn-warning bi bi-pen-fill"> Edit </Link>
                                        <Link to={`/delete-video/${video.id}`} className="btn btn-danger mx-2 bi bi-trash-fill"> Delete </Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}