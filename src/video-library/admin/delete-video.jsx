import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

export function DeleteVideo(){

    const params = useParams();
    const navigate = useNavigate();

    const [video, setVideo] = useState({title:null, description:null, url:null, likes:0, dislikes:0, views:0, comments:null, category_id:0});

    function LoadVideo(){
        axios.get(`http://localhost:4400/videos/${params.id}`)
        .then(response=>{
            setVideo(response.data);
        })
    }
    useEffect(()=>{
        LoadVideo();
    },[])

    function handleDeleteClick(){
        axios.delete(`http://localhost:4400/videos/${params.id}`);
        alert('Video Deleted..');
        navigate('/admin-dashboard');
    }

    return(
        <div>
            <h2>Delete Video</h2>
            <div>
                {video.title}
            </div>
            <div>
                <iframe width="300" height="200" src={video.url}></iframe>
            </div>
            <div>
                Are you sure? 
            </div>
            <div>
                <button onClick={handleDeleteClick} className="btn btn-danger">Yes</button>
                <Link className="btn btn-warning mx-2" to="/admin-dashboard" >No</Link>
            </div>
        </div>
    )
}