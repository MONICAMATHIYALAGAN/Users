import {useState} from 'react';

const CreateUser = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[mobileNumber, setMobileNumber] = useState(0);
    const[gender, setGender] = useState('');
    const[games, setGames] = useState('');

    const handleSubmit = () => {

    }
    return (
        <>
        <form onSubmit = {handleSubmit}>
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
              type="text"
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
              type="text"
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
              style={{ width: "40%" }}
              type="text"
              id="gender"
              value={gender}
              onChange={(event)=>setGender(event.target.value)}
              className="form-control"
              placeholder="Enter Your Gender"
            />
        </div>
        <div className="form-group">
            <label htmlFor="games" style={{color:"black"}}>Games:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              id="games"
              value={name}
              onChange={(event)=>setGames(event.target.value)}
              className="form-control"
              placeholder="Enter Your Games"
            />
        </div>

        </form>

        </>
    )
}

export default CreateUser;