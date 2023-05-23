import { createContext, useState } from "react";
import products from "../../../public/products.json";

export const ShopContext = createContext(null);

const getDefault = () => {
	let cart = {};
	for (let i = 1; i < products.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const ShopContextProvider = (props) => {
	const [cartProducts, setCartProducts] = useState(getDefault());

	const addToCart = (id) => {
		setCartProducts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
	};

	const removeFromCart = (id) => {
		setCartProducts((prev) => ({ ...prev, [id]: prev[id] - 1 }));
	};

	// Get the number of items added to the cart
	const getProductsCart = (id) => {
		if (Object.keys(cartProducts).length === 0) {
			return 0;
		}
		return Object.values(cartProducts).reduce(
			(total, count) => total + count,
			0
		);
	};

	const contextValue = {
		cartProducts,
		addToCart,
		removeFromCart,
		getProductsCart,
	};

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};
