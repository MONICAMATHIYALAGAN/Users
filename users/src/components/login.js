import {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import './../App.css'  
const Login = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [success,setSuccess] = useState('')
    const [error,setError]= useState('')
 
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        if(username===""||password==="") {
            setError("Enter username and password")
            setSuccess("")
        }
        else {
            if(username ==="admin" && password === "admin"){
                setSuccess("Login successful")
                setError("")
                localStorage.setItem('user',username)
                navigate('/createUser')
              
            } else {
                setSuccess("")
                setError("Please provide valid id")
            }
            
        }
    }

    const  logOut= (event) => {
      setUsername('')
      setPassword('')
      localStorage.clear()
      window.location.reload();
      window.open("/","_self")
    }
  return (
    <>
      <div className="login" 
        style={localStorage.user==='admin' ?{display:'none'}:{display:'block'}}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" style={{color:"black"}}>Username:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              id="name"
              value={username}
              onChange={(event)=>setUsername(event.target.value)}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd" style={{color:"black"}}>Password:</label>
            <input
              style={{ width: "40%" }}
              type="password"
              id="pwd"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              className="form-control"
              placeholder="Enter password"
            />
          </div><br/>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          {success?<div className="text-success">{success}</div>:null}
          {error?<div className="text-danger"><i class="bi-exclamation-octagon-fill">{error}</i> </div>:null}
        </form>
        
      </div>
      <button type="button" className="btn btn-primary logout" 
        onClick={logOut}
         style={localStorage.user==='admin' ?null:{display:'none'}}
        > Logout
          </button>
    </>
  );
};
export default Login;