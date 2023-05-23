import products from "../../../../public/products.json";
import { Product } from "./Product";

export const ProductCard = () => {

	return (
		<>
				{products.map((product) => (
					<Product data={product}/>
				))}
		</>
	);
}

