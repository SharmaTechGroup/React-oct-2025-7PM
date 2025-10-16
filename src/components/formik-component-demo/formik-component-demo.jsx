import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function FormikComponentDemo(){
    return(
        <div className="container-fluid p-3">
            <h3>Register User</h3>
            <Formik initialValues={{UserName:'', Mobile:''}} validationSchema={yup.object({UserName:yup.string().required('Name Required'), Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/, 'Invalid Mobile')})} onSubmit={(user)=>{console.log(user)}}>
                {
                    form => 
                    <Form>
                    <dl>
                        <dt>User Name</dt>
                        <dd><Field type="text" name="UserName" /></dd>
                        <dd className="text-danger"> <ErrorMessage name="UserName" /> </dd>
                        <dt>Mobile</dt>
                        <dd><Field type="text" name="Mobile" /></dd>
                        <dd className="text-danger"> <ErrorMessage name="Mobile" /> </dd>
                    </dl>
                    <button disabled={(form.isValid)?false:true} type="submit" className="mx-2">Submit</button>
                    <button className={(form.dirty)?'d-inline':'d-none'} type="submit">Save</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}