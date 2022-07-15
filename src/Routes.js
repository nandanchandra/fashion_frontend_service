import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./core/Home";

const Routesx = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};

export default Routesx;
