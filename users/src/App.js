import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/login';
import CreateUser from './components/createUser';
import AllUsers from './components/AllUsers';
import GetDetails from './components/GetDetails';
import UpdateUser from './components/UpdateUser';


function App() {
  return (
    <BrowserRouter>
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
