import React from "react";
import Menu from "./Menu";

const Base = ({
	title = "Test Title",
	description = "Test Description",
	className = "bg-dark text-white p-4",
	children,
}) => {
	return (
		<div className="bg-dark">
			<Menu />
			<div className="container-fluid">
				<div className="jumbotron bg-dark text-white text-center">
					<h2 className="display-4">{title}</h2>
					<p className="lead">{description}</p>
				</div>
				<div className={className}>{children}</div>
			</div>
			<footer className="footer bg-dark mt-auto py-3">
				<div className="container-fluid bg-success text-white text-center py-3">
					<h3> Test Test</h3>
					<button className="btn btn-warning btn-lg">Contact Us</button>
					<div className="container">
						<span className="text-warning"> Test React</span>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Base;
