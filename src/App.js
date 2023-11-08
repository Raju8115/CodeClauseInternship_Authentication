import './App.css';
import Home from './Home';
import Google_Signup from "./SignIn_files"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Entrypage from './Entrypage';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Entrypage/>}/>
          <Route path='/login' element={<Google_Signup/>}/>
          <Route path='/google-home' element={ <Home/>}/>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
