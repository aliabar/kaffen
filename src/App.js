
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Routes>
    <Route path="/"element={<Home />}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Menu" element={<Menu/>}/>
  </Routes>
 
    </div>
  );
}

export default App;
