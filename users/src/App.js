import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './components/login';
import CreateUser from './components/createUser';
import AllUsers from './components/AllUsers';
import GetDetails from './components/GetDetails';
import UpdateUser from './components/UpdateUser';


function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to={'/createUser'}>CreateUser</Link>
      <Link to={'/users'}>Get All Users</Link>
      <Link to={'/details/:id'}>Details</Link>
    </nav>
    <Routes>
      <Route path="/"  element={<Login />} />
      <Route path="/createUser"  element={<CreateUser />} />
      <Route path='/users' element={<AllUsers/>} />
      <Route path='/details/:id' element = {<GetDetails />} />
      <Route path='/updateUser/:id' element = {<UpdateUser />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
