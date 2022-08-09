import React from 'react';
import './Settings.css';

function Settings() {

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
      <button className='settings--editButton'>Edit</button>
    </div>

    <form className='settings--form'>
      
      <div className="settings--form-container">
        <label htmlFor='firstName' className='settings--form-label settings--form-firstNameLabel'>First Name</label>
        <input id="firstName" type="text" className="settings--form-firstName settings--form-input" />
      </div>

      <div className="settings--form-container">
        <label htmlFor="lastName" className='settings--form-label settings--form-lastNameLabel'>Last Name</label>
        <input type="text" className="settings--form-lastName settings--form-input" id="lastName" />
      </div>

      <div className="settings--form-container">
        <label htmlFor="birthDate" className="settings--form-label settings--form-birthDateLabel">Date of Birth</label>
        <input type="date" className="settings--form-birthDate settings--form-input" id="birthDate" />
      </div>

      <div className="settings--form-container">
        <label htmlFor="mobile" className="settings--form-label settings--form-mobileLabel">Mobile Number</label>
        <input type="tel" className="settings--form-mobile settings--form-input" id="mobile" pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'/> 
      </div>

      <div className="settings--form-emailContainer settings--form-container">
        <label htmlFor="email" className="settings--form-label settings--form-emailLabel">Email</label>
        <input type="email" className="settings--form-email settings--form-input" id="email" />
      </div>

      <div className="settings--form-container">
        <label htmlFor="newPassword" className="settings--form-label settings--form-newPasswordLabel">New Password</label>
        <input type="password" className="settings--form-newPassword settings--form-input" id="newPassword" />
      </div>

      <div className="settings--form-container">
        <label htmlFor="confirmPassword" className="settings--form-label settings--form-confirmPasswordLabel">Confirm Password</label>
        <input type="password" className="settings--form-confirmPassword settings--form-input" id="confirmPassword" />
      </div>

      <div className="settings--form-container settings--form-buttonContainer">
        <button className='settings--form-updateButton' onClick={e => handleUpdateClick(e)}>Update</button>
      </div>

      
      
    </form>

    </>
  )
}

export default Settings