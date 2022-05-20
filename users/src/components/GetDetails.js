import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const GetDetails = () =>
{
    const id = useParams().id;
    let navigate = useNavigate();
    const [details, setDetails] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:4000/resource/${id}`).then(
            (res) => {
                if(res.status === 200) {
                    setDetails(res.data) 
                    console.log('in details page', res)
                }
            }
        )
    }, [id])

    const updateUser = (id) => {
        navigate(`/updateUser/${id}`)
    }

    const deleteUser = async (id) => {
        let data = await axios.delete(`http://localhost:4000/resource/${id}`)
        if(data.status === 200 ){
            alert('deleted successfully')
            navigate('/createUser')
        } else {
            alert('something went wrong')
        }
    }

    return <>
    <table className="table">
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
              <tr key={details.id}>
                    <td>{details.name}</td>
                    <td>{details.email}</td>
                    <td>{details.mobileNumber}</td>
                    <td>{details.gender}</td>
                    <td ><button onClick={() => updateUser(details.id)}>Update</button></td>
                    <td><button onClick={() => deleteUser(details.id)}>Delete</button></td>
               </tr>
        </tbody>
    </table>
    </>

}

export default GetDetails