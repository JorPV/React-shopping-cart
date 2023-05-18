import React from "react";
import "./footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
	return (
		<Container className="mt-5 mb-5">
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

export default Footer;
