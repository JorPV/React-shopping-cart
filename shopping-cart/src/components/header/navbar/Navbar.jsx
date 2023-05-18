import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "../searchbar/SearchBar";

const NavMenu = () => {
	return (
		<div>
            <SearchBar/>
			<Navbar sticky="top" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">LO/Go</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="ms-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#cart">Home</Nav.Link>
							<Nav.Link href="#action2">Shopping-cart</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavMenu;