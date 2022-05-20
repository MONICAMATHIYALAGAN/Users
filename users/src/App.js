import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/login';
import CreateUser from './components/createUser';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Login />} />
      <Route path="/createUser"  element={<CreateUser />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
