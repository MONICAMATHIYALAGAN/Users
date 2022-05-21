import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const UpdateUser = () => {
    const{id}  = useParams();
    let navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState('');
    const [gender, setGender] = useState("");
    useEffect(()=>{ axios.get(`http://localhost:4000/resource/${id}`).then (
        (res) => {
            if(res.status === 200) {
                setName(res.data.name)
                setEmail(res.data.email)
                setMobileNumber(res.data.mobileNumber)
                setGender(res.data.gender)
            }
        }
    )}, [id])

    const updateUser = async () => {
        const payload = {
            name: name,
            email: email,
            mobileNumber: mobileNumber,
            gender: gender,
          };
        let res = await axios.put(`http://localhost:4000/resource/${id}`, payload) ;
        if(res.status === 200) {
            alert("user details updated successfully")
            navigate(`/details/${id}`)
        }
    }

    let dataForm = <>
    <div>
    <form>
        <label>name</label>
        <input name="name" id="name" type={'text'} value={name} onChange = {(e) => {setName(e.target.value)}} />
        <label>email</label>
        <input name="email" id="email" type={'text'} value={email}  onChange = {(e) => {setEmail(e.target.value)} } />
        <label>gender</label>
        <input name="gender" id="gender" type={'text'} value={gender}  onChange = {(e) => {setGender(e.target.value)} } /> <br />
        <label>mobileNumber</label>
        <input name="mobileNumber" id="mobileNumber" type={'text'} value={mobileNumber}  onChange = {(e) => {setMobileNumber(e.target.value)} } />
    </form>
    <button onClick={updateUser}>Update</button>
     </div>
    </>

    return dataForm
}

export default UpdateUser