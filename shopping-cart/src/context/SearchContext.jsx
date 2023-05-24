import { createContext, useState } from "react";
import products from "../../../public/products.json";

// Create SearchContext
export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
	// Declare states
	const [searchInput, setSearchInput] = useState("");

	// Get the input value an pass it to the state
	const searchFn = (input) => {
		setSearchInput(input);
	};

	// Filter over the products and convert them to lowercase
	const filterProducts = products.filter((product) => {
		return product.title.toLowerCase().includes(searchFn);
	});

	return (
		<SearchContext.Provider value={{ searchFn, searchInput, filterProducts }}>
			{children}
		</SearchContext.Provider>
	);
};
