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

	const contextValue = { cartProducts, addToCart, removeFromCart };

    console.log(cartProducts);
	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};
