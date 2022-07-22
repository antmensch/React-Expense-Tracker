<<<<<<< HEAD
=======
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login'
>>>>>>> e4b4de175a5ee8bde80eca6124b5e993bcfd6a7f
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      app component
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
=======
   <Routes>
    <Route path='/' element={<Login/>} />
    </Routes>
    
  )
>>>>>>> e4b4de175a5ee8bde80eca6124b5e993bcfd6a7f
}

export default App;
