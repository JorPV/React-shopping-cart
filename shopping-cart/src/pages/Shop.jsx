import { Container, Row } from "react-bootstrap";
import { CartItems } from "./shop/ShopProduct";

export const Shop = () => {
	return (
		<>
			<h1>Shopping-Cart</h1>
			<p>
				In nulla posuere sollicitudin aliquam ultrices sagittis orci a
				scelerisque. Pulvinar pellentesque habitant morbi tristique senectus.
				Sit amet justo donec enim diam. Magnis dis parturient montes nascetur
				ridiculus mus mauris. Nisl suscipit adipiscing bibendum est ultricies
				integer quis. Ac tortor vitae purus faucibus ornare suspendisse sed nisi
				lacus. Pulvinar etiam non quam lacus suspendisse. Vehicula ipsum a arcu
				cursus vitae congue mauris rhoncus. At lectus urna duis convallis
				convallis tellus id interdum.
			</p>
			<Container fluid className="container-cards w-100">
				<Row xs={1} md={3} lg={4} className="d-flex my-5 mx-1 gap-4">
					<CartItems />
				</Row>
			</Container>
		</>
	);
};
