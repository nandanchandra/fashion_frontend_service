import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";

import PrivateRoutes from "./auth/helper/privateRoute";
import userDashboard from "./user/userDashboard";

const Routesx = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/signin" element={<Signin />} />
			<Route
				exact
				path="/user/dashboard"
				element={<PrivateRoutes component={userDashboard} />}
			/>
		</Routes>
	);
};

export default Routesx;
