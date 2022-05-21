import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login";

const AllUsers = () => {
    const [users, SetUsers] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        axios.get('https://crudcrud.com/api/b25dc4d466e64846b4744dac54f47a3d/resource').then(
            (res) => {
                if(res.status === 200) {
                    SetUsers(res.data)
                }
            }
        )
    }, [])

   

    const getDetails = (id) => {
        navigate(`/details/${id}`)
    }

    let value = <>
     <nav>
      <button className="btn btn-primary"><Link to={'/createUser'}>CreateUser</Link></button>
      {/* <Link to={'/users'}>Get All Users</Link> */}
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
                return (<tr key={user.id}>
                        <td>{user.name}</td>
                        <td><button className="btn btn-primary" onClick={() => getDetails(user.id)}>Get Details</button></td>
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