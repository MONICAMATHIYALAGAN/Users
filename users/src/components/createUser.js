import {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreateUser = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[mobileNumber, setMobileNumber] = useState('');
    const[gender, setGender] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const payload = { 'name' : name, 'email' : email, 'mobileNumber': mobileNumber, 'gender': gender , 'id': id+1}
      let res =  await axios.post('http://localhost:4000/resource', payload)
      if(res.status === 201) {
        alert('User created successfully')
        setEmail('')
        setName('')
        setMobileNumber('')
        setGender('')
        setId('')
      } else {
        alert('something went wrong please try again later')
      }

    }
    return (
        <>
     <nav>
      <Link to={'/createUser'}>CreateUser</Link>
      <Link to={'/users'}>Get All Users</Link>
    </nav>
    <div className='user'>
        <form onSubmit = {handleSubmit}>
        <div className="form-group">
            <label htmlFor="id" style={{color:"black"}}>Id:</label>
            <input
              style={{ width: "40%" }}
              type={'number'}
              id="id" 
              value={id}
              onChange={(event)=>setId(event.target.value)}
              className="form-control"
              placeholder="Enter Id"
            />
        </div>
        <div className="form-group">
            <label htmlFor="name" style={{color:"black"}}>Username:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              id="name"
              value={name}
              onChange={(event)=>setName(event.target.value)}
              className="form-control"
              placeholder="Enter Your Name"
            />
        </div>
        <div className="form-group">
            <label htmlFor="email" style={{color:"black"}}>Email ID:</label>
            <input
              style={{ width: "40%" }}
              type={'email'}
              id="email"
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
              className="form-control"
              placeholder="Enter Your Email ID"
            />
        </div>
        <div className="form-group">
            <label htmlFor="mobileNumber" style={{color:"black"}}>Mobile Number:</label>
            <input
              style={{ width: "40%" }}
              type={'number'}
              id="mobileNumber"
              value={mobileNumber}
              onChange={(event)=>setMobileNumber(event.target.value)}
              className="form-control"
              placeholder="Enter your Mobile Number"
            />
        </div>
        <div className="form-group">
            <label htmlFor="gender" style={{color:"black"}}>Gender:</label>
            <input
              type='radio'
              id="gender"
              name='gender'
              value='male'
              onChange={(event)=>setGender(event.target.value)}
            /> Male
            <input
              type='radio'
              id="gender"
              name='gender'
              value='female'
              onChange={(event)=>setGender(event.target.value)}
            /> Female
        </div>

        <button type='submit'>Submit</button>

        </form>
        </div>
        </>
    )
}

export default CreateUser;