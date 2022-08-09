import { API } from "../../backend";
import { cartEmpty } from "../../core/helper/cartHelper";

export const signUp = (user) => {
	return fetch(`${API}user/`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.error(err));
};

export const signIn = (user) => {
	const formData = new FormData();

	for (const name in user) {
		formData.append(name, user[name]);
	}

	return fetch(`${API}user/login/`, {
		method: "POST",
		body: formData,
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
	if (typeof window !== undefined) {
		localStorage.setItem("auth", JSON.stringify(data));
		next();
	}
};

export const isAuthenticated = () => {
	if (typeof window == undefined) {
		return false;
	}
	if (localStorage.getItem("auth")) {
		return JSON.parse(localStorage.getItem("auth"));
	} else {
		return false;
	}
};

export const signOut = (next) => {
	const userId = isAuthenticated() && isAuthenticated().user.id;
	if (typeof window !== undefined) {
		localStorage.removeItem("auth");
		cartEmpty(() => {});
		return fetch(`${API}user/logout/${userId}`, {
			method: "GET",
		})
			.then((response) => {
				console.log("Sign Out Success");
				next();
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
