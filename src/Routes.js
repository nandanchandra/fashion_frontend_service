import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";

import PrivateRoutes from "./auth/helper/privateRoute";
import userDashboard from "./user/userDashboard";
import Cart from "./core/Cart";

const Routes = () => {
	return (
		<BrowserRouter forceRefresh={true}>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/signin" exact component={Signin} />
				<Route path="/cart" exact component={Cart} />
				<PrivateRoutes path="/user/dashboard" exact component={userDashboard} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
