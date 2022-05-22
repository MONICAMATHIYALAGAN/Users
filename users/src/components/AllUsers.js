import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login";

const AllUsers = () => {
    const [users, SetUsers] = useState([])
    let navigate = useNavigate();
    // load the data initial on the UI page
    useEffect(() => {
        axios.get('https://crudcrud.com/api/f78bc976b8e54ee3819da2550a1a8a69/resource').then(
            (res) => {
                if(res.status === 200) {
                    SetUsers(res.data)
                }
            }
        )
    }, [])

   
// navigation to details page
    const getDetails = (_id) => {
        navigate(`/details/${_id}`)
    }

    let value = <>
     <nav>
      <button className="btn btn-primary"><Link to={'/createUser'}>CreateUser</Link></button>
    </nav>
    {localStorage.user==='admin' ?<div>
        <Login ></Login>
        <table className="table" style={{color:"white"}}>
            <thead>
                <tr>
                <th>Name</th>
                <th>Get Details</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, key) => {
                return (<tr key={user._id}>
                        <td>{user.name}</td>
                        <td><button className="btn btn-primary" onClick={() => getDetails(user._id)}>Get Details</button></td>
                </tr>)
                })}
            </tbody>
        </table>
    </div>:<div><h1 >login first to  view this page</h1>
            <button type="button" className="btn btn-primary" onClick={this.loginHandler}>Go to Login Page</button>
                </div>
            }
    </>

    return value
}

export default AllUsers