import { createContext, useState } from "react";
import products from "../../../public/products.json";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
	const [searchInput, setSearchInput] = useState("");

	const handleChange = (event) => setSearchInput(event.target.value);

	const searchFn = (input) => {
		setSearchInput(input);
	};

	const filterProducts = products.filter((product) => {
		return product.title.toLowerCase().includes(searchInput.toLowerCase());
	});

	return (
		<SearchContext.Provider value={{ searchInput, searchFn, filterProducts }}>
			{ children }
		</SearchContext.Provider>
	);
};
