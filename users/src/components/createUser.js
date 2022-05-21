import {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './login';

const CreateUser = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[mobileNumber, setMobileNumber] = useState('');
    const[gender, setGender] = useState('');
    const [nameErr,setNameErr] = useState({})
    const [emailErr,setEmailErr] = useState({})
    const [mobileNumberErr,setMobileNumberErr] = useState({})
    const [genderErr,setGenderErr] = useState({})

    const handleSubmit = async (e) => {
      e.preventDefault();
      const isValid = formValidation();
      if(isValid) {
          const payload = { 'name' : name, 'email' : email, 'mobileNumber': mobileNumber, 'gender': gender }
          console.log('payload', payload);
        axios.post('https://crudcrud.com/api/b25dc4d466e64846b4744dac54f47a3d/resource', payload)
        .then(res => { 
            if(res.status === 200) {
              alert('User created successfully')
              setEmail('')
              setName('')
              setMobileNumber('')
              setGender('')
            } else {
              alert('something went wrong please try again later')
            }
      } ).catch (e =>{
        alert('something went Worng')
    })
        
      }

    }
    const formValidation = () => {
      const nameErr = {};
      const emailErr = {};
      const mobileNumberErr = {};
      const genderErr = {};
      let isValid = true;

      if(!name) {
        nameErr.nameEmpty = 'Please Enter your Name';
        isValid = false;
      }
      if(!email) {
        emailErr.emailEmpty = 'Please Enter your Email';
        isValid = false;
      }
      if(!mobileNumber) {
        mobileNumber.mobileNumberEmpty = 'Please Enter your Mobile Number';
        isValid = false;
      }
      if(mobileNumber.length < 10) {
        mobileNumber.mobileNumberEmpty = 'Mobile Number should be 10 digit';
        isValid = false;
      }
      if(mobileNumber.length > 10) {
        mobileNumber.mobileNumberEmpty = 'Mobile Number should be 10 digit ';
        isValid = false;
      }
      if(!gender) {
        genderErr.genderEmpty = 'Please select Gender';
        isValid = false;
      }
      setNameErr(nameErr);
      setEmailErr(emailErr);
      setMobileNumberErr(mobileNumberErr);
      setGenderErr(genderErr);

      return isValid;


    }
    return (
        <>
     <nav>
      {/* <button><Link to={'/createUser'}>CreateUser</Link></button> */}
      <button className="btn btn-primary"><Link to={'/users'}>Get All Users</Link></button>
    </nav>
    {localStorage.user==='admin' ?<div>
        <Login ></Login>
        <div className='user'>
        <form className="form login" onSubmit = {handleSubmit}>
        <div className="form-group">
            <label htmlFor="name" style={{color:"white"}}>Username:</label>
            <input
              style={{ width: "150%" }}
              type="text"
              id="name"
              value={name}
              onChange={(event)=>setName(event.target.value)}
              className="form-control"
              placeholder="Enter Your Name"
            />
            {Object.keys(nameErr).map((key) => {
              return <div style= {{color: "red"}}>{nameErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="email" style={{color:"white"}}>Email ID:</label>
            <input
              style={{ width: "150%" }}
              type={'email'}
              id="email"
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
              className="form-control"
              placeholder="Enter Your Email ID"
            />
            {Object.keys(emailErr).map((key) => {
              return <div style= {{color: "red"}}>{emailErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="mobileNumber" style={{color:"white"}}>Mobile Number:</label>
            <input
              style={{ width: "150%" }}
              type={'text'}
              id="mobileNumber"
              value={mobileNumber}
              onChange={(event)=>setMobileNumber(event.target.value)}
              className="form-control"
              placeholder="Enter your Mobile Number"
            />
            {Object.keys(mobileNumberErr).map((key) => {
              return <div style= {{color: "red"}}>{mobileNumberErr[key]}</div>
            })}
        </div>
        <div className="form-group">
            <label htmlFor="gender" style={{color:"white"}}>Gender:</label>
            <input
              type='radio'
              id="gender"
              name='gender'
              value='male'
              style={{color:"white"}}
              onChange={(event)=>setGender(event.target.value)}
            /> Male
            <input
              type='radio'
              id="gender"
              name='gender'
              value='female'
              style={{color:"white"}}
              onChange={(event)=>setGender(event.target.value)}
            /> Female
            {Object.keys(genderErr).map((key) => {
              return <div style= {{color: "red"}}>{genderErr[key]}</div>
            })}
        </div>

        <button type='submit' className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>:<div><h1 >login first to  view this page</h1>
        <button type="button" className="btn btn-primary" onClick={this.loginHandler}>Go to Login Page</button>
            </div>
    }
    </>
    )
}

export default CreateUser;