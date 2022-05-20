import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const DeleteUser = () => {
    const id = useParams().id
    const [message, setMessage] = useState('')
    useEffect(() => { axios.delete(`http://localhost:4000/resource/${id}`).then (
        (res) => {
            if( res.status === 200) {
                setMessage('User deleted Successfully')
            } 
        }
)})

    return <h1>{message}</h1>
}
export default DeleteUser