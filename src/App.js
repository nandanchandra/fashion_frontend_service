import React from "react";
import "./styles.css";
import "./Routes";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
	);
}
