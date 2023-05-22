import { Container, Row } from "react-bootstrap";
import { CartItems } from "./shop/ShopProduct";
// import CartProduct from "./shop/CartProduct";

export const Shop = () => {
	// const { cartProducts } = useContext(ShopContext);
	return (
		<>
			<h1>Cart</h1>
			<Container fluid className="container-cards w-100">
				<Row
					xs={1}
					md={3}
					lg={4}
					className="d-flex justify-content-start my-5 gap-5"
				>
					<CartItems/>
				</Row>
			</Container>
		</>
	);
};

// export default Shop;
