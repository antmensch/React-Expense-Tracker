import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import Signin from './components/Login/Signin/Signin'
import Signup from './components/Login/Signup/Signup'
import {getTestExpenses} from './testdata';

function App() {
  
  let currentLocation  = useLocation();

  const [expenses, setExpenses] = useState({});
  const [nightMode, setNightMode] = useState(false);
  const [displayedComp, setDisplayedComp] = useState('');

  useEffect(() => {
    const loc = currentLocation.pathname;
    let pageHeading = '';

    switch (loc){
      case '/dashboard':
        pageHeading='Dashboard';
        break;
      case '/':
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

  useEffect(() => {
    async function getAndSetExpenses() {
      let result = await getTestExpenses();
      let json = await JSON.parse(result);
      setExpenses(json);
    }
    getAndSetExpenses();
  }, [currentLocation]);

  return (
    <div className="App">
      
        { window.location.pathname !== '/login' && window.location.pathname !== '/signup' && <aside><Navbar /></aside>}
      
      <div className='mainPart'>
        { currentLocation.pathname != '/login' && currentLocation.pathname != '/signup' &&  <Header currentPage={displayedComp} isInNightMode={nightMode} setNightMode={setNightMode} />}
        <main className='content'>
          <Routes>
            <Route path="/" element={ JSON.stringify(expenses) == '{}' ? <p>Loading data</p> : <Dashboard expenses={expenses} receiveExpences={'a'} /> } />
            <Route path="/dashboard" element={ JSON.stringify(expenses) == '{}' ? <p>Loading data</p> : <Dashboard expenses={expenses} receiveExpences={'a'} /> } />} />
            <Route path="/login" element={<Signin />}/>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
