import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import walletIcon from './img/wallet-solid.svg'
import './Dashboard.css'
import Chart from './Chart/Chart';

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
                <Chart />
            </section>
            <section className='dashboard--recentSection'>
                <div className='dashboard--header'>
                    <h3 className="dashboard--sectionHeading">Recent Expenses</h3>
                    <Link className='dashboard--link' to='/expenses'>
                        <span>View all</span>
                        <svg width="12px" height="10px" fill="#29A073" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg>
                    </Link>
                </div>

                <div>
                    <table className='recent--table'>
                        <thead className='recent--thead'>
                            <tr className='recent--theadRow'>
                                <th className='recent--th' colSpan="2">Name/Business</th>
                                <th className='recent--th'>Type</th>
                                <th className='recent--th'>Amount</th>
                                <th className='recent--th'>Date</th>
                            </tr>
                        </thead>

                        <tbody className='recent--tbody'>
                            <tr className='recent--tbodyRow'>
                                <td className='recent--tbodyData'>Picture</td>
                                <td className='recent--tbodyData'>Name</td>
                                <td className='recent--tbodyData'>Type</td>
                                <td className='recent--tbodyData'>Amount</td>
                                <td className='recent--tbodyData'>Data</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </section>
        </main>
        <div className="dashboard--recurringExpenses">
            recurring
        </div>
    </div>
  )
}

export default Dashboard