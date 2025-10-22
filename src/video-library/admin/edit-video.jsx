import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

export function EditVideo(){


    const params = useParams();
    const navigate = useNavigate();

    const [video, setVideo] = useState({title:null, description:null, url:null, likes:0, dislikes:0, views:0, comments:null, category_id:0});
    const [categories, setCategories] = useState([{category_id:0, category_name:''}]);

    function LoadVideo(){
        axios.get(`http://localhost:4400/videos/${params.id}`)
        .then(response=>{
            setVideo(response.data);
        })
    }

    function LoadCategories(){
        axios.get(`http://localhost:4400/categories`)
        .then(response=>{
            response.data.unshift({category_id:-1, category_name:'Select A Category'});
            setCategories(response.data);
        })
    }

    useEffect(()=>{
        LoadVideo();
        LoadCategories();
    },[])

    const formik = useFormik({
        initialValues: {
            title: video.title,
            description: video.description,
            url: video.url, 
            likes: video.likes,
            views: video.views,
            dislikes: video.dislikes,
            comments: video.comments,
            category_id: video.category_id
        },
        onSubmit: (video)=>{
            axios.put(`http://localhost:4400/videos/${params.id}`, video);
            alert('Video Updated Successfully..');
            navigate('/admin-dashboard');
        },
        enableReinitialize: true
    })


    return(
        <div>
            <h2>Edit Video</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl className="row w-50">
                    <dt className="col-3">Title</dt>
                    <dd className="col-9"><input type="text" value={formik.values.title} onChange={formik.handleChange} name="title" /></dd>
                    <dt className="col-3">Description</dt>
                    <dd className="col-9"><input type="text" value={formik.values.description} onChange={formik.handleChange} name="description" /></dd>
                    <dt className="col-3">URL</dt>
                    <dd className="col-9"><input type="text" value={formik.values.url} onChange={formik.handleChange} name="url" /></dd>
                    <dt className="col-3">Views</dt>
                    <dd className="col-9"><input type="number" value={formik.values.views} onChange={formik.handleChange} name="views" /></dd>
                     <dt className="col-3">Likes</dt>
                    <dd className="col-9"><input type="number" value={formik.values.likes} onChange={formik.handleChange} name="likes" /></dd>
                     <dt className="col-3">Dislikes</dt>
                    <dd className="col-9"><input type="number" value={formik.values.dislikes} onChange={formik.handleChange} name="dislikes" /></dd>
                     <dt className="col-3">Comments</dt>
                    <dd className="col-9"><input type="text" value={formik.values.comments} onChange={formik.handleChange} name="comments" /></dd>
                    <dt className="col-3">Category</dt>
                    <dd className="col-9">
                        <select name="category_id" value={formik.values.category_id} onChange={formik.handleChange}>
                            {
                                categories.map(category=>
                                    <option value={category.category_id} key={category.category_id}> {category.category_name.toUpperCase()} </option>
                                )
                            }
                        </select>
                    </dd>
                </dl>
                <button type="submit" className="btn btn-success">Save</button>
                <Link to="/admin-dashboard" className="btn btn-warning mx-2"> Cancel </Link>
            </form>
        </div>
    )
}