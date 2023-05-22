import products from "../../../../public/products.json";
import { CartProduct } from "./CartProduct";
import { Card, Button } from "react-bootstrap";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";


export const CartItems = (props) => {
	// const { id, title, description, price, special } = props.data;
	const { cartProducts } = useContext(ShopContext);

	return (
		<>
			{products.map((product) => {
				if (cartProducts[product.id] !== 0) {
					return (
						// <Card data={product} style={{ width: "18rem" }}>
						// 	<Card.Img variant="top" src="holder.js/100px180" />
						// 	<Card.Body>
						// 		<div key={id}>
						// 			<Card.Title>
						// 				<h2>{title}</h2>
						// 			</Card.Title>
						// 			<Card.Text>
						// 				<p>{description}</p>
						// 			</Card.Text>
						// 			<p>{price}</p>
						// 			{special && <p>Special product</p>}
						// 		</div>
						// 		<Button variant="primary">Go somewhere</Button>
						// 	</Card.Body>
						// </Card>
						<CartProduct data={product}/>
					);
				}

				// {products.map((product) => {
				// // if (cartProducts[product.id] !== 0) {
				// // 	return <h1>TEST</h1>;
				// // }
				// <CartProduct data={product}/>
			})}
		</>
	);
};
