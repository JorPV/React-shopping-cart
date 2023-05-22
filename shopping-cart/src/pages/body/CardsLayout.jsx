import { Row, Container } from "react-bootstrap";
import { ProductCard } from "./ProductCard";
// import "./cards.css";


export const CardsLayout = () => {
	return (
		<Container fluid className="container-cards w-100">
			<Row xs={1} md={3} lg={4} className="d-flex justify-content-between my-5">
				<ProductCard />
			</Row>
		</Container>
	);
}

// export default CardsLayout;