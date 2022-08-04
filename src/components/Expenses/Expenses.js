import React, { useState } from 'react';
import './Expenses.css';
import searchIcon from './img/search-icon.svg';
import filterIcon from './img/filter-icon.svg';
import createIcon from './img/create-icon.svg';

function Expenses(props) {

    const [searchQuery, setSearchQuery] = useState('');

    function handleSearchInput(e) {
        e.preventDefault();
        setSearchQuery(e.target.value);
    }

  return (
    <div className='expenses--container'>

        <div className="expenses--header">
            <label className="expenses--search">
                <img className='expenses--searchIcon' src={searchIcon} width="16px" height="16px" />
                <input 
                    className='expenses--searchInput' 
                    type="text" 
                    placeholder='Search anything on transactions'
                    onChange={e => handleSearchInput(e)}
                    value={searchQuery}
                     />
            </label>
            <div className="expenses--buttonsContainer">
                <button className="expenses--button expenses--buttonCreate">
                    <img className="expenses--headerButtonIcon" width="16px" height="16px" src={createIcon} />
                    <span>Create Expense</span>
                </button>
                <button className="expenses--button expenses--buttonFilter">
                    <img className="expenses--headerButtonIcon" width="16px" height="16px" src={filterIcon} />
                    <span>Filter</span>
                </button>
            </div>
        </div>

        <div className='expenses--tableContainer'>
            <table className='expenses--table'>
                <thead className='expenses--thead'>
                    <tr>
                        <th className='expenses--th expenses--thName'>NAME/BUSINESS</th>
                        <th className='expenses--th expenses--thType'>TYPE</th>
                        <th className='expenses--th expenses--thAmount'>AMOUNT</th>
                        <th className='expenses--th expenses--thDate'>DATE</th>
                        <th className='expenses--th expenses--thId'>INVOICE ID</th>
                        <th className='expenses--th expenses--thAction'>ACTION</th>
                    </tr>

                </thead>

                <tbody className='expenses--tbody'>
                    {
                        props.expenses.map(elem => (
                            <tr key={elem.id} className='expenses--tableRow'>
                                <td className="expenses--td expenses--tdName">
                                    <img className='expenses--picture' src={elem.pictureLink} width="40px" height="40px" />
                                    <div className='expenses--descriptionContainer'>
                                        <div className='expenses--descriptionText'>{elem.description}</div>
                                        <div className='expenses--descriptionSeller'>{elem.vendor}</div>
                                    </div>
                                    
                                </td>
                                <td className="expenses--td expenses--tdType">{elem.type}</td>
                                <td className="expenses--td expenses--tdAmount">{`$${elem.amount.toFixed(2)}`}</td>
                                <td className="expenses--td expenses--tdDate">
                                    <div className="expenses--tdDateDay">{elem.date}</div>
                                    <div className="expenses--tdDateTime">{`at ${elem.time}`}</div>
                                </td>
                                <td className="expenses--td expenses--tdId">{elem.invoiceId}</td>
                                <td className="expenses--td expenses--tdAction">
                                    <button className='expenses--button expenses--tableButton expenses--tableButtonEdit'>Edit</button>
                                    <button className='expenses--button expenses--tableButton expenses--tableButtonDelete'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </div>

    </div>
  )
}

export default Expenses;