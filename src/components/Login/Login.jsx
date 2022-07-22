import './Login.css'
import { useNavigate, Link } from "react-router-dom";
import coverLogin from './img/login-cover.png';

export default function Login() {
const navigate = useNavigate();


function loginHandler() { 
    console.log('the user logged in')
  	navigate('/')
	window.location.reload()
}

	return (
		<div className="login-page">
			<div>
		<form className="login">
			<div className="login__field">
				<input
					type="text"
					name="userEmail"
					className="login__input"
					placeholder="Email"
				/>
			</div>
			<div className="login__field">
				<input
					type="password"
					name="userPassword"
					className="login__input"
					placeholder="Password"
				/>
			</div>
			<button className="button login__submit" onClick={loginHandler}>
				<span className="button__text">Log In Now</span>
			</button>
		</form>
		<Link to="/signup" className="sign-up-btn">
		<h3>Sign Up</h3>
	</Link>

			</div>
			<img src={coverLogin} alt='cover' className="login--coverImg"/>
	</div>
	);
}
