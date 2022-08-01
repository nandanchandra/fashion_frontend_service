import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Base from "../core/Base";
import { authenticate, isAuthenticated, signIn } from "../auth/helper/index";

const Signin = () => {
	const [values, setValues] = useState({
		email: "",
		password: "",
		error: "",
		success: false,
		loading: false,
		didRedirect: false,
	});

	const { email, password, error, success, loading, didRedirect } = values;

	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false, loading: true });

		signIn({ email, password })
			.then((data) => {
				console.log("DATA", data);
				if (data.token) {
					let sessionToken = data.token;
					authenticate(sessionToken, () => {
						console.log("TOKEN ADDED");
					});
					setValues({
						...values,
						loading: true,
						didRedirect: true,
					});
				} else {
					setValues({
						...values,
						loading: false,
						didRedirect: true,
					});
				}
			})
			.catch((e) => console.log(e));
	};

	const performRedirect = () => {
		if (isAuthenticated()) {
			return <Redirect to="/" />;
		}
	};

	const loadingMessage = () => {
		return (
			loading && (
				<div className="alert alert-info">
					<h2>Loading</h2>
				</div>
			)
		);
	};

	const successMessage = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<div
						className="alert alert-success"
						style={{ display: success ? "" : "none" }}
					>
						New account created successfully.Please{" "}
						<Link to="/signin">login now.</Link>
					</div>
				</div>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<div
						className="alert alert-danger"
						style={{ display: error ? "" : "none" }}
					>
						Check all fields again.
					</div>
				</div>
			</div>
		);
	};

	const signInForm = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<form>
						<div className="form-group">
							<label className="text-light">Email</label>
							<input
								className="form-control"
								value={email}
								onChange={handleChange("email")}
								type="text"
							/>
						</div>
						<div className="form-group">
							<label className="text-light">Password</label>
							<input
								className="form-control"
								value={password}
								onChange={handleChange("password")}
								type="Password"
							/>
						</div>
						<button onClick={onSubmit} className="btn btn-success btn-block">
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	};

	return (
		<Base
			title="Signin"
			description="Hello User Please Enter your signin details"
		>
			{loadingMessage()}
			{successMessage()}
			{errorMessage()}
			{signInForm()}
			<p className="text-white text-center">{JSON.stringify(values)}</p>
			{performRedirect()}
		</Base>
	);
};

export default Signin;
