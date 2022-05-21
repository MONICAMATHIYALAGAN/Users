import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login";

const GetDetails = () =>
{
    const _id = useParams()._id;
    let navigate = useNavigate();
    const [details, setDetails] = useState({})
    useEffect(() => {
        axios.get(`https://crudcrud.com/api/b25dc4d466e64846b4744dac54f47a3d/resource/${_id}`).then(
            (res) => {
                console.log('res', res);
                if(res.status === 200) {
                    setDetails(res.data) 
                }
            }
        )
    }, [_id])

    const updateUser = (_id) => {
        navigate(`/updateUser/${_id}`)
    }

    const deleteUser = async (_id) => {
        let data = await axios.delete(`http://localhost:4000/resource/${_id}`)
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