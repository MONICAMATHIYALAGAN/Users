import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const AllUsers = () => {
    const [users, SetUsers] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:4000/resource').then(
            (res) => {
                if(res.status === 200) {
                    SetUsers(res.data) 
                    console.log('response', res)
                }
            }
        )
    }, [])

   

    const getDetails = (id) => {
        navigate(`/details/${id}`)
    }

    let value = <>
    <table className="table">
        <thead>
            <tr>
            <th>Name</th>
            {/* <th>Email</th>
            <th>Number</th>
            <th>Gender</th>
            <th>UpdateUser</th>
            <th>DeleteUser</th> */}
            <th>Get Details</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user, key) => {
               return (<tr key={user.id}>
                    <td>{user.name}</td>
                    <td><button onClick={() => getDetails(user.id)}>Get Details</button></td>
                    {/* <td>{user.email}</td>
                    <td>{user.mobileNumber}</td>
                    <td>{user.gender}</td>
                    <td ><button onClick={() => updateUser(user.id)}>Update</button></td>
                    <td><button onClick={() => deleteUser(user.id)}>Delete</button></td> */}
               </tr>)
            })}
        </tbody>
    </table>
    </>

    return value
}

export default AllUsers