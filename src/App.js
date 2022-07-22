import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import Signin from './components/Login/Signin/Signin'
import Signup from './components/Login/Signup/Signup'

function App() {
  return (
    <div className="App">
    { window.location.pathname !== '/login' && window.location.pathname !== '/signup' && <Navbar />}
      <Routes>
        <Route path="/login" element={<Signin />}/>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
