import { Container, Form, Navbar } from "react-bootstrap";
import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";

export const SearchBar = () => {
	const { searchFn } = useContext(SearchContext);

	const handleChange = (event) => {
		const searchInput = event.target.value;
		searchFn(searchInput);
	};

	return (
		<div>
			<Navbar sticky="top" expand="lg">
				<Container fluid className="justify-content-end">
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							variant="outline-secondary"
							aria-label="Search"
							onChange={handleChange}
						/>
					</Form>
				</Container>
			</Navbar>
		</div>
	);
};
