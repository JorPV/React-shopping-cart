import { Container, Row, Col, Nav } from "react-bootstrap";

export const Footer = () => {
	return (
		<Container className="mt-5 py-5 bg-white shadow-sm">
			<Row>
				<Col xs={3} md={3}>
					LO/go
				</Col>
				<Col xs={6} md={2}>
					<a href="" className="d-block">
						Test
					</a>
					<a href="" className="d-block">
						Test
					</a>
					<a href="" className="d-block">
						Test
					</a>
					<a href="" className="d-block">
						Test
					</a>
				</Col>
				<Col xs={6} md={2}>
					<a href="" className="d-block">
						Test
					</a>
					<a href="" className="d-block">
						Test
					</a>
					<a href="" className="d-block">
						Test
					</a>
					<a href="" className="d-block">
						Test
					</a>
				</Col>
				<Col xs={6} md={2}>
					<a href="" className="d-block">
						Test
					</a>
					<a href="" className="d-block">
						Test
					</a>
					<a href="" className="d-block">
						Test
					</a>
					<a href="" className="d-block">
						Test
					</a>
				</Col>
				<Col xs={6} md={3}>
					<Nav
						className="ms-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#cart">Home</Nav.Link>
						<Nav.Link href="#action2">Shopping-cart</Nav.Link>
					</Nav>
				</Col>
			</Row>
		</Container>
	);
};

// export default Footer;
