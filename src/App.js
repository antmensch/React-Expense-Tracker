import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import Signin from './components/Login/Signin/Signin'
import Signup from './components/Login/Signup/Signup'
import Expenses from './components/Expenses/Expenses';
import Settings from './components/Settings/Settings';
import {getTestExpenses, getTestRecurringExpenses} from './testdata';

function App() {
  
  let currentLocation  = useLocation();

  const [expenses, setExpenses] = useState({});
  const [recurringExpenses, setRecurringExpenses] = useState({});
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
      const resultExpenses = await getTestExpenses();
      const jsonExpenses = await JSON.parse(resultExpenses);

      const resultRecurringExpenses = await getTestRecurringExpenses();
      const jsonRecurringExpenses = await JSON.parse(resultRecurringExpenses);
      setExpenses(jsonExpenses);
      setRecurringExpenses(jsonRecurringExpenses);
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
            <Route path="/" element = {
               JSON.stringify(expenses) == '{}' || 
               JSON.stringify(recurringExpenses) == '{}' ? 
               <p>Loading data</p> : 
               <Dashboard expenses={expenses} recurringExpenses={recurringExpenses} receiveExpences={'a'} /> 
               } />
            <Route path="/dashboard" element={ 
              JSON.stringify(expenses) == '{}' ||
              JSON.stringify(recurringExpenses) == '{}' ? 
              <p>Loading data</p> : 
              <Dashboard expenses={expenses} recurringExpenses={recurringExpenses} receiveExpences={'a'} /> 
              } />
            <Route path="/expenses" element={JSON.stringify(expenses) == '{}' ? <p>Loading data</p> : <Expenses expenses={expenses} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Signin />}/>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
