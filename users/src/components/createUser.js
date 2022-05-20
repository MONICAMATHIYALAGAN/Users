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
              placeholder="Enter Name"
            />
          </div>
        </form>

        </>
    )
}

export default CreateUser;