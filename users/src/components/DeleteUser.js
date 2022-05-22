import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Login from "./login";

const DeleteUser = () => {
    let _id = useParams();
    _id = Object.values(_id);
    const [message, setMessage] = useState('')
    // Load the data initial on the page
    useEffect(() => { axios.delete(`https://crudcrud.com/api/f78bc976b8e54ee3819da2550a1a8a69/resource/${_id}`).then (
        (res) => {
            if( res.status === 200) {
                setMessage('User deleted Successfully')
            } 
        }
)}, [])

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