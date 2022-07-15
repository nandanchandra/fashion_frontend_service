import React from "react";

const ImageHelper = ({ product }) => {
	const imageurl = product
		? product.image
		: `https://images.unsplash.com/photo-1610337673044-720471f83677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80`;

	return (
		<div className="rounded border border-success p-2">
			<img
				src={imageurl}
				style={{ maxHeight: "100%", maxWidth: "100%" }}
				className="mb-3 rounded"
				alt=""
			/>
		</div>
	);
};

export default ImageHelper;
