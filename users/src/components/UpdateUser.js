import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./login";

const UpdateUser = () => {
    const{_id}  = useParams();
    let navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState('');
    const [gender, setGender] = useState("");
    useEffect(()=>{ axios.get(`http://localhost:4000/resource/${_id}`).then (
        (res) => {
            if(res.status === 200) {
                setName(res.data.name)
                setEmail(res.data.email)
                setMobileNumber(res.data.mobileNumber)
                setGender(res.data.gender)
            }
        }
    )}, [_id])

    const updateUser = async () => {
        const payload = {
            name: name,
            email: email,
            mobileNumber: mobileNumber,
            gender: gender,
          };
        let res = await axios.put(`https://crudcrud.com/api/b25dc4d466e64846b4744dac54f47a3d/resource/${_id}`, payload) ;
        if(res.status === 200) {
            alert("user details updated successfully")
            navigate(`/details/${_id}`)
        }
    }

    let dataForm = <>
    {localStorage.user==='admin' ?<div>
        <Login ></Login>
        <div> 

        <form className="form login">
            <label>name</label>
            <input name="name" style={{ width: "150%" }}
            id="name" type={'text'} className="form-control"
            value={name} onChange = {(e) => {setName(e.target.value)}} /><br />
            <label>email</label>
            <input name="email" style={{ width: "150%" }}
            id="email" type={'text'} className="form-control"
            value={email}  onChange = {(e) => {setEmail(e.target.value)} } /><br />
            <label>gender</label>
            <input name="gender" style={{ width: "150%" }}
            id="gender" type={'text'} className="form-control"
            value={gender}  onChange = {(e) => {setGender(e.target.value)} } /> <br />
            <label>mobileNumber</label>
            <input name="mobileNumber" style={{ width: "150%" }}
            id="mobileNumber" type={'text'} className="form-control"
            value={mobileNumber}  onChange = {(e) => {setMobileNumber(e.target.value)} } /><br />
        </form>
        <button className="btn btn-primary" onClick={updateUser}>Update</button>
        </div>
        </div>:<div><h1 >login first to  view this page</h1>
        <button type="button" className="btn btn-primary" onClick={this.loginHandler}>Go to Login Page</button>
            </div>
    }
    </>

    return dataForm
}

export default UpdateUser