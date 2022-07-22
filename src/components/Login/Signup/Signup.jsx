import LoginSigninForm from '../GeneralLoginForm/GeneralLoginForm';
import React from 'react';

function Signup() {
	return (
		<LoginSigninForm
			fieldOne="Full Name"
			fieldTwo="Email"
			fieldThree="Password"
		/>
	);
}

export default Signup;
