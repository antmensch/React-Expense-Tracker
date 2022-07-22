import './GeneralLoginForm.css'
import { useNavigate, Link } from 'react-router-dom';
import coverLogin from './login-cover.png';

export default function LoginSigninForm(props) {
	const navigate = useNavigate();
	let typeLogin = null;
	let typeSignup = null;

	function setType(url) {
		if (url === '/login') {
			typeLogin = true;
		} else if (url === '/signup') {
			typeSignup = true;
		}
	}

	setType(window.location.pathname);

	function loginHandler() {
		if (typeLogin) {
			navigate('/');
		} else if (typeSignup) {
			navigate('/login');
		}
		window.location.reload();
	}

	return (
		<div className="login-page">
			<div className='all-text-wrapper'>
			<h2>{typeLogin? "Welcome Back" : "Create New Account"}</h2>
			<p>Welcome Back! Please Enter Your Details</p>
			<form className="login">
				<div className="login__field">
					<input
						type="text"
						name="userEmail"
						className="login__input"
						placeholder={props.fieldOne}
					/>
				</div>
				<div className="login__field">
					<input
						type={typeLogin? "password" : 'text'}
						name="userPassword"
						className="login__input"
						placeholder={props.fieldTwo}
					/>
				</div>
				{typeSignup === true && (
					<div className="login__field">
						<input
							type="password"
							name="userPassword"
							className="login__input"
							placeholder={props.fieldThree}
						/>
					</div>
				)}
				<button className="button login__submit" onClick={loginHandler}>
					<span className="button__text">{typeLogin ? 'Log In Now' : 'Sign Up'}</span>
				</button>
			</form>
			<p>{`sign ${typeLogin? 'in' : 'up'} with Google`}</p>
			{!typeSignup && <Link to="/signup" className="sign-up-btn">
				<h3>Sign Up</h3>
			</Link>}
			</div>
            <img src={coverLogin} alt='cover' className="login--coverImg"/>
		</div>
	);
}
