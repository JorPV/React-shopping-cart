import { Row, Container } from "react-bootstrap";
import { ProductCard } from "./ProductCard";

export const CardsLayout = () => {
	return (
		<Container fluid className="container-cards w-100">
			<Row xs={1} md={3} lg={6} className="d-flex mx-1 my-5 gap-4">
				<ProductCard />
			</Row>
		</Container>
	);
};
