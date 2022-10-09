import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import ImageHelper from "./helper/imageHelper";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

import { isAuthenticated } from "../auth/helper";

const Card = ({
	product,
	addtocart = true,
	removeFromCart = false,
	reload = undefined,
	setReload = (f) => f,
}) => {
	const [redirect, setRedirect] = useState(false);

	const cartTitle = product ? product.name : "Not Available";
	const cartDescription = product ? product.description : "Not Available";
	const cartPrice = product ? product.price : "Not Available";

	const addToCart = () => {
		if (isAuthenticated()) {
			addItemToCart(product, () => setRedirect(true));
			console.log("Added to cart");
		} else {
			console.log("User is not authenticated");
		}
	};

	const getRedirect = (redirect) => {
		if (redirect) {
			return <Redirect to="/cart" />;
		}
	};

	const showAddToCart = (addToCart) => {
		return (
			addtocart && (
				<button
					onClick={addToCart}
					className="btn btn-block btn-outline-success mt-2 mb-2"
				>
					Add To Cart
				</button>
			)
		);
	};

	const showRemoveFromCart = (removeFromCart) => {
		return (
			removeFromCart && (
				<button
					onClick={() => {
						removeItemFromCart(product.id);
						setReload(!reload);
						console.log("Removed From Cart");
					}}
					className="btn btn-block btn-outline-danger mt-2 mb-2"
				>
					Remove From Cart
				</button>
			)
		);
	};

	return (
		<div className="card text-white bg-dark border border-info ">
			<div className="card-header lead">{cartTitle}</div>
			<div className="card-body">
				{getRedirect(redirect)}
				<ImageHelper product={product} />
				<p className="lead bg-success font-weight-normal text-wrap">
					{cartDescription}
				</p>
				<p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
				<div className="row">
					<div className="col-12">{showAddToCart(addToCart)}</div>
				</div>
				<div className="row">
					<div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
