import './GeneralLoginForm.css';
import logo from '../../../img/logo.svg';
import { useNavigate, Link } from 'react-router-dom';
import coverLogin from './login-cover.png';
import googleLogo from './google-logo.png';

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
			<div className="all-text-wrapper">
				<Link className="navbar--logoWrapper" to="/">
					<img
						src={logo}
						alt="website logo"
						width="30px"
						height="30px"
						className="navbar--logo"
					/>
					<span className="navbar--logoText"> Maglo. </span>
				</Link>
				<h2>{typeLogin ? 'Welcome Back' : 'Create New Account'}</h2>
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
							type={typeLogin ? 'password' : 'text'}
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
						<span className="button__text">
							{typeLogin ? 'Log In Now' : 'Create Account'}
						</span>
					</button>
				</form>
				<p className='google-login'>
					<img style={{ height: '12px', cursor: 'pointer' }} alt="" src={googleLogo} />
					{`sign ${typeLogin ? 'in' : 'up'} with Google`}
				</p>
				<p className='have-account-bottom-line'>
					<span>{`${
						typeLogin ? 'Dont Have an account? ' : 'Already Have an Account? '
					}`}</span>

					<Link to={typeLogin ? '/signup' : '/login'} className="sign-up-btn">
						{`${typeLogin ? 'Sign Up for Free' : 'Sign In'}`}
					</Link>
				</p>
			</div>
			<img src={coverLogin} alt="cover" className="login--coverImg" />
		</div>
	);
}
