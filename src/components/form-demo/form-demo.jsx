import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as yup from "yup";

export function FormDemo(){

    const formik = useFormik({
         initialValues: {
            UserName: '',
            Email: '',
            Mobile: '',
            City: ''
         },
         validationSchema : yup.object({
            UserName: yup.string().required('User Name Required').min(4, "Name too short"),
            Email: yup.string().email('Invalid Email').required('Email Required'),
            Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/, 'Invalid Mobile +91 & 10 digits')
         }) ,
         onSubmit : (user)=> {
            console.log(user);
         }
    })
    

    return(
        <div className="container-fluid p-3">
            <h3>Register User</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...formik.getFieldProps("UserName")} name="UserName" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Email</dt>
                    <dd><input type="email" onChange={formik.handleChange}  name="Email"  /></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange}  name="Mobile"  /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option value="-1">Select City</option>
                            <option>Delhi</option>
                            <option>Chennai</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}