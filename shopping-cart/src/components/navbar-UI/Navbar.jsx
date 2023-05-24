import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { SearchBar } from "./SearchBar";
import { ShoppingCart } from "./ShoppingCart";
import { HeaderImg } from "../HeaderImg";
import { NavLink } from "react-router-dom";

export const NavMenu = () => {
	return (
		<>
			<div>
				<div className="sticky-top d-flex justify-content-end bg-white shadow-sm">
					<SearchBar />
					<ShoppingCart />
				</div>
				<NavbarBs expand="lg">
					<Container fluid>
						<NavbarBs.Brand href="/">
							<h1>LO/Go</h1>
						</NavbarBs.Brand>
						<NavbarBs.Toggle aria-controls="navbarScroll" />
						<NavbarBs.Collapse id="navbarScroll">
							<Nav
								className="ms-auto my-2 my-lg-0"
								style={{ maxHeight: "100px" }}
								navbarScroll
							>
								<Nav.Link to="/" as={NavLink}>
									Home
								</Nav.Link>
								<Nav.Link to="/empty" as={NavLink}>
									Menu item
								</Nav.Link>
								<Nav.Link to="/empty" as={NavLink}>
									Menu item
								</Nav.Link>
								<Nav.Link to="/empty" as={NavLink}>
									Menu item
								</Nav.Link>
								<Nav.Link to="/cart" as={NavLink}>
									Shop
								</Nav.Link>
							</Nav>
						</NavbarBs.Collapse>
					</Container>
				</NavbarBs>
			</div>
			<HeaderImg />
		</>
	);
};
