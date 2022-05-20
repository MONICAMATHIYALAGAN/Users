import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './components/login';
import CreateUser from './components/createUser';
import AllUsers from './components/AllUsers';
import DeleteUser from './components/DeleteUser';
import UpdateUser from './components/UpdateUser';


function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to={'/createUser'}>CreateUser</Link>
      <Link to={'/users'}>Get All Users</Link>
      <Link to={'/users/:id'}>Details</Link>
    </nav>
    <Routes>
      <Route path="/"  element={<Login />} />
      <Route path="/createUser"  element={<CreateUser />} />
      <Route path='/users' element={<AllUsers/>} />
      <Route path='/deleteUser/:id' element = {<DeleteUser />} />
      <Route path='/updateUser/:id' element = {<UpdateUser />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
