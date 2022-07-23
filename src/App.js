import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import {Route, Routes, useLocation} from 'react-router-dom';
import Signin from './components/Login/Signin/Signin'
import Signup from './components/Login/Signup/Signup'

function App() {
  
  let currentLocation  = useLocation();
  const [nightMode, setNightMode] = useState(false);
  const [displayedComp, setDisplayedComp] = useState('');
  useEffect(() => {
    const loc = currentLocation.pathname;
    let pageHeading = '';

    switch (loc){
      case '/dashboard':
        pageHeading='Dashboard';
        break;
      case '/expenses':
        pageHeading='Expenses';
        break;
      case '/settings':
        pageHeading='Settings';
        break;
      default: 
        pageHeading='Expense Tracker'
    }
    setDisplayedComp(pageHeading);

  }, [currentLocation.pathname]);

  return (
    <div className="App">
      
      <aside>
        { window.location.pathname !== '/login' && window.location.pathname !== '/signup' && <Navbar />}
      </aside>
      
      <div className='mainPart'>
        { currentLocation.pathname != '/login' && currentLocation.pathname != '/signup' &&  <Header currentPage={displayedComp} />}
        <main className='content'>
          <Routes>
            <Route path="/login" element={<Signin />}/>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
      


    
      
    </div>
  );
}

export default App;
