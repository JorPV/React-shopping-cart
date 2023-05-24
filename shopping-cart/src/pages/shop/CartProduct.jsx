import { Card, Button } from "react-bootstrap";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import "./cart-product.css";

export const CartProduct = (props) => {
	const { id, title, description, price, special } = props.data;
	const { removeFromCart, cartProducts } = useContext(ShopContext);
	const quantity = cartProducts[id];

	return (
		<>
			<Card style={{ width: "18rem" }} className="card m-0 p-0">
				<div className="special px-3 align-items-center">
					{special && <p className="text-uppercase fw-medium">Special</p>}
				</div>
				<Card.Img
					variant="top"
					src="https://source.unsplash.com/chyPcrDjcZg/100px180"
					className="card-img"
				/>
				<p className="product-price fw-medium">{price},-</p>
				<Card.Body className="card-body d-flex flex-column m-0 pb-0">
					<div key={id}>
						<Card.Title>
							<h2>{title}</h2>
						</Card.Title>
						<Card.Text>
							<p>{description}</p>
							<p>
								Facilisis mauris sit amet massa vitae. Massa sapien faucibus et
								molestie ac feugiat sed lectus.
							</p>
						</Card.Text>
					</div>
					<p className="counter">{quantity > 0 && <>{quantity} x added</>}</p>
					<Button
						variant="danger"
						className="card-btn align-self-end w-75 m-0"
						onClick={() => removeFromCart(id)}
					>
						Remove from cart {quantity > 0 && <></>}
					</Button>
				</Card.Body>
			</Card>
		</>
	);
};
