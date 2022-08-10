import React, { useState } from 'react';
import './Settings.css';

function Settings() {

  const [editMode, toggleEditMode] = useState(false);
  const[userData, setUserData] = useState({}); // this should fetch user data from firebase

  function handleEditClick() {
    toggleEditMode(prev => !prev);
  }

  function handleUpdateClick(e) {
    e.preventDefault();
  }
  return (
    <>
    <div className='settings--header'>
      <h3 className='settings--heading'>Account information</h3>
      <p className='settings--subheading'>Update your accout information</p>
    </div>

    <div className='settings--formHeader'>
      <h4 className='settings--formHeading'>Personal Information</h4>
      <button className='settings--editButton' onClick={handleEditClick}>{editMode ? 'Stop Editing' : 'Edit'}</button>
    </div>

    <form className='settings--form'>
      
      <div className="settings--form-container">
        <label htmlFor='firstName' className='settings--form-label settings--form-firstNameLabel'>First Name</label>
        <input disabled={!editMode} autoComplete='given-name' id="firstName" type="text" className="settings--form-firstName settings--form-input" />
      </div>

      <div className="settings--form-container">
        <label htmlFor="lastName" className='settings--form-label settings--form-lastNameLabel'>Last Name</label>
        <input disabled={!editMode} autoComplete='family-name' type="text" className="settings--form-lastName settings--form-input" id="lastName" />
      </div>

      <div className="settings--form-container">
        <label htmlFor="birthDate" className="settings--form-label settings--form-birthDateLabel">Date of Birth</label>
        <input disabled={!editMode} autoComplete='bday' type="date" className="settings--form-birthDate settings--form-input" id="birthDate" />
      </div>

      <div className="settings--form-container">
        <label htmlFor="mobile" className="settings--form-label settings--form-mobileLabel">Mobile Number</label>
        <input disabled={!editMode} autoComplete='tel' type="tel" className="settings--form-mobile settings--form-input" id="mobile" pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'/> 
      </div>

      <div className="settings--form-emailContainer settings--form-container">
        <label htmlFor="email" className="settings--form-label settings--form-emailLabel">Email</label>
        <input disabled={!editMode} autoComplete='email' type="email" className="settings--form-email settings--form-input" id="email" />
        <svg height="20px" width="20px" className='settings--form-icon-left settings--form-iconEmail' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"/></svg>
      </div>

      <div className="settings--form-container">
        <label htmlFor="newPassword" className="settings--form-label settings--form-newPasswordLabel">New Password</label>
        <input disabled={!editMode} autoComplete='new-password' type="password" className="settings--form-newPassword settings--form-input" id="newPassword" />
          <svg className='settings--form-icon-left' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4816 9.16675H3.5186C2.49585 9.16675 1.66675 9.98078 1.66675 10.9849V17.3486C1.66675 18.3527 2.49585 19.1667 3.5186 19.1667H16.4816C17.5043 19.1667 18.3334 18.3527 18.3334 17.3486V10.9849C18.3334 9.98078 17.5043 9.16675 16.4816 9.16675Z" stroke="#A2A2A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 9.16659V5.46288C5 4.23503 5.52678 3.05746 6.46447 2.18924C7.40215 1.32102 8.67392 0.833252 10 0.833252C11.3261 0.833252 12.5979 1.32102 13.5355 2.18924C14.4732 3.05746 15 4.23503 15 5.46288V9.16659" stroke="#A2A2A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <svg className='settings--form-icon-right' height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"/></svg>
      </div>

      <div className="settings--form-container">
        <label htmlFor="confirmPassword" className="settings--form-label settings--form-confirmPasswordLabel">Confirm Password</label>
        <input disabled={!editMode} autoComplete='off' type="password" className="settings--form-confirmPassword settings--form-input" id="confirmPassword" />
        <svg className='settings--form-icon-left' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4816 9.16675H3.5186C2.49585 9.16675 1.66675 9.98078 1.66675 10.9849V17.3486C1.66675 18.3527 2.49585 19.1667 3.5186 19.1667H16.4816C17.5043 19.1667 18.3334 18.3527 18.3334 17.3486V10.9849C18.3334 9.98078 17.5043 9.16675 16.4816 9.16675Z" stroke="#A2A2A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 9.16659V5.46288C5 4.23503 5.52678 3.05746 6.46447 2.18924C7.40215 1.32102 8.67392 0.833252 10 0.833252C11.3261 0.833252 12.5979 1.32102 13.5355 2.18924C14.4732 3.05746 15 4.23503 15 5.46288V9.16659" stroke="#A2A2A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

          <svg className='settings--form-icon-right' height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"/></svg>
      </div>

      <div className="settings--form-container settings--form-buttonContainer">
        <button disabled={!editMode} style={editMode ? {} : {backgroundColor: 'grey', cursor: 'default'}} className='settings--form-updateButton' onClick={e => handleUpdateClick(e)}>Update</button>
      </div>

      
      
    </form>

    </>
  )
}

export default Settings