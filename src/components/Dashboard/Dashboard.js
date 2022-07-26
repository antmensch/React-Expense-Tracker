import React, { useState } from 'react'
import walletIcon from './img/wallet-solid.svg'
import './Dashboard.css'

function Dashboard() {

    const [selectedView, setSelectedView] = useState('total');

    function getTotalSpending() {
        return 5240.21;
    }

    function getMonthlySpending() {
        return 250.80;
    }

    function getDailySpending() {
        return 10.24;
    }

  return (
    <div className='dashboard--wrapper'>
        <main className='dashboard--main'>
            <div className='dashboard--totalsSection'>
                <div className="dashboard--totalsCard">
                    <div className='walletIcon-container'>
                        <img className='walletIcon' src={walletIcon} alt="image of a wallet" width="15px" height="15px" />
                    </div>
                    
                    <div className='card--contentWrapper'>
                        <h6 className='card--heading'>Total Spending</h6>
                        <p className='card--amount'>{`$${getTotalSpending()}`}</p>
                    </div>
                </div>

                <div className="dashboard--totalsCard">
                    <div className='walletIcon-container'>
                            <img className='walletIcon' src={walletIcon} alt="image of a wallet" width="15px" height="15px" />
                        </div>
                        
                        <div className='card--contentWrapper'>
                            <h6 className='card--heading'>Monthly Spending</h6>
                            <p className='card--amount'>{`$${getMonthlySpending()}`}</p>
                        </div>
                    </div>
                <div className="dashboard--totalsCard">
                <div className='walletIcon-container'>
                        <img className='walletIcon' src={walletIcon} alt="image of a wallet" width="15px" height="15px" />
                    </div>
                    
                    <div className='card--contentWrapper'>
                        <h6 className='card--heading'>Daily Spending</h6>
                        <p className='card--amount'>{`$${getDailySpending()}`}</p>
                    </div>
                </div>
            </div>
            <section className='dashboard--chartSection'>
                <h3 className='dashboard--sectionHeader'>Working Capital</h3>
            </section>
            <section className='dashboard--recentSection'>
                <h3 className="dashboard--sectionHeader">Recent Expenses</h3>
            </section>
        </main>
        <div className="dashboard--recurringExpenses">
            recurring
        </div>
    </div>
  )
}

export default Dashboard