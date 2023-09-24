import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import './App.css'

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
