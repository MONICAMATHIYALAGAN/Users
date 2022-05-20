import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const UpdateUser = () => {
    let id = useParams().id
    let [details, setDetails] = useState({})
    let [data, setData] = useState(details)
    useEffect(()=>{ axios.get(`http://localhost:4000/resource/${id}`).then (
        (res) => {
            if(res.status === 200) {
                setDetails(res.data)
            }
        }
    )}, [id])

    const updateUser = async () => {
        let res = await axios.put(`http://localhost:4000/resource/${id}`, details) ;
        console.log(res)
    }

    let dataForm = <>
    {details && <div>
    <form>
        <label>name</label>
        <input type={'text'} defaultValue={details.name} onChange = {(e) => {setDetails({name: e.target.value})
        console.log((e.target.value))} } />
        <label>email</label>
        <input type={'text'} defaultValue={details.email} onChange = {(e) => {setDetails({email: e.target.value})
        console.log((e.target.value))} } />
        <label>gender</label>
        <input type={'text'} defaultValue={details.gender} onChange = {(e) => {setDetails({gender: e.target.value})
        console.log((e.target.value))} } /> <br />
        <label>mobileNumber</label>
        <input type={'text'} defaultValue={details.mobileNumber} onChange = {(e) => {setDetails({mobileNumber: e.target.value})
        console.log((e.target.value))} } />
    </form>
    <button onClick={updateUser}>Update</button>
     </div>}
    </>

    return dataForm
}

export default UpdateUser