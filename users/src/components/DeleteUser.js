import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Login from "./login";

const DeleteUser = () => {
    const _id = useParams()._id
    const [message, setMessage] = useState('')
    useEffect(() => { axios.delete(`https://crudcrud.com/api/b25dc4d466e64846b4744dac54f47a3d/resource/${_id}`).then (
        (res) => {
            if( res.status === 200) {
                setMessage('User deleted Successfully')
            } 
        }
)})

    return <>
    {localStorage.user==='admin' ?<div>
        <Login ></Login>
        <h1>{message}</h1>
    </div>:<div><h1 >login first to  view this page</h1>
    <button type="button" className="btn btn-primary" onClick={this.loginHandler}>Go to Login Page</button>
        </div>
    }
    </>
}
export default DeleteUser