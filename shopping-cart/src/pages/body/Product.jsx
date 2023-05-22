import { Card, Button }from "react-bootstrap";
// import BtnCard from "./CardBtn";
// import Button from "react-bootstrap/Button";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";

export const Product = (props) => {
	const { id, title, description, price, special } = props.data;
    const{ addToCart, cartProducts } = useContext(ShopContext);
	const quantity = cartProducts[id];
	
	return (
		<>
			<Card style={{ width: "18rem" }} className="my-4">
				<Card.Img
					variant="top"
					src="https://source.unsplash.com/chyPcrDjcZg/100px180"
					className="m-0"
				/>
				<Card.Body>
					<div key={id}>
						<Card.Title>
							<h2>{title}</h2>
						</Card.Title>
						<Card.Text>
							<p>{description}</p>
						</Card.Text>
						<p>{price}</p>
						{special && <p>Special product</p>}
					</div>
					<Button
						variant="success"
						className="align-self-end w-100"
						onClick={() => addToCart(id)}
					>
						+ Add to cart {quantity > 0 && <>({quantity})</>}
					</Button>
				</Card.Body>
			</Card>
		</>
	);
};
