import products from "../../../../public/products.json";
import { CartProduct } from "./CartProduct";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";


export const CartItems = () => {
	const { cartProducts } = useContext(ShopContext);

	return (
		<>
			{products.map((product) => {
				if (cartProducts[product.id] !== 0) {
					return (
						<CartProduct data={product}/>
					);
				}
			})}
		</>
	);
};
