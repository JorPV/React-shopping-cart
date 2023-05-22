import { Button, Container, Form, Navbar } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Navbar from 'react-bootstrap/Navbar';

export const SearchBar = () => {
	return (
		<div>
			<Navbar sticky="top" expand="lg">
				<Container fluid className="justify-content-end">
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
                    </Container>
			</Navbar>           
		</div>
	);
};

// export default SearchBar;