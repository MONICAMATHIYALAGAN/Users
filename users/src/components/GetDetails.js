import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login";

const GetDetails = () =>
{
    let _id = useParams();
    let navigate = useNavigate();
    const [details, setDetails] = useState({})
    _id = Object.values(_id);
    // Load the data initially on the page
    useEffect(() => {
        axios.get(`https://crudcrud.com/api/f78bc976b8e54ee3819da2550a1a8a69/resource/${_id}`).then(
            (res) => {
                if(res.status === 200) {
                    setDetails(res.data) 
                }
            }
        )
    }, [])

    //  navigate to update page
    const updateUser = (_id) => {
        navigate(`/updateUser/${_id}`)
    }

    const deleteUser = async (_id) => {
        let data = await axios.delete(`https://crudcrud.com/api/f78bc976b8e54ee3819da2550a1a8a69/resource/${_id}`)
        if(data.status === 200 ){
            alert('deleted successfully')
            navigate('/users')
        } else {
            alert('something went wrong')
        }
    }

    return <>
    <nav>
      {/* <button><Link to={'/createUser'}>CreateUser</Link></button> */}
      <button className="btn btn-primary"><Link to={'/users'}>Get All Users</Link></button>
    </nav>
        {localStorage.user==='admin' ?<div>
            <Login ></Login>
            <table className="table" style={{color:"white"}}>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Gender</th>
                    <th>UpdateUser</th>
                    <th>DeleteUser</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={details._id}>
                            <td>{details.name}</td>
                            <td>{details.email}</td>
                            <td>{details.mobileNumber}</td>
                            <td>{details.gender}</td>
                            <td ><button className="btn btn-primary" onClick={() => updateUser(details._id)}>Update</button></td>
                            <td><button className="btn btn-primary" onClick={() => deleteUser(details._id)}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>:<div><h1 >login first to  view this page</h1>
            <button type="button" className="btn btn-primary" onClick={this.loginHandler}>Go to Login Page</button>
                </div>
            }
    </>

}

export default GetDetails