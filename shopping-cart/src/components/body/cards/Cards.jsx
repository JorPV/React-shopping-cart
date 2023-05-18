import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./cards.css";

function CardsLayout() {
	return (
        <Container fluid className="container-cards mb-5">
		    <Row xs={1} md={4} className="g-4">
		    	{Array.from({ length: 8}).map((_, idx) => (
		    		<Col >
		    			<Card className="p-0" style={{ width: "18rem" }}>
		    				<Card.Img variant="top" src="https://source.unsplash.com/chyPcrDjcZg/100px180" />
		    				<Card.Body>
		    					<Card.Title>Product Name</Card.Title>
		    					<Card.Text>
		    						Some quick example text to build on the card title and make up
		    						the bulk of the card's content.
		    					</Card.Text>
		    					<Button variant="secondary">Go somewhere</Button>
		    				</Card.Body>
		    			</Card>
		    		</Col>
		    	))}
		    </Row>
        </Container>
	);
}

export default CardsLayout;
