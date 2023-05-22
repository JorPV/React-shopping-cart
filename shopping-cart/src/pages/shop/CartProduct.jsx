import { Card, Button } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import products from "../../../../public/products.json";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";

export const CartProduct = (props) => {
	// const { id, title, description, price, special } = props.data;
	const { cartProducts } = useContext(ShopContext);
	// const quantity = cartProducts[id];

	return (
		<>
			<Card style={{ width: "18rem" }} className="my-4">
				<Card.Img
					variant="top"
					src="https://source.unsplash.com/chyPcrDjcZg/100px180"
					className="m-0"
				/>
				<Card.Body>
					<div>
						<Card.Title>
							<h2>Title</h2>
						</Card.Title>
						<Card.Text>
							<p>Decription</p>
						</Card.Text>
						<p>Price</p>
						 <p>Special product</p>
					</div>
					<Button variant="danger" className="align-self-end w-100">danger</Button>
				</Card.Body>
			</Card>
		</>
	);
};
