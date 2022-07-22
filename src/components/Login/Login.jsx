export default function Login() {
	return (
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
			<button className="button login__submit">
				<span className="button__text">Log In Now</span>
			</button>
		</form>
	);
}
