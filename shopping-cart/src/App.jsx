import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavMenu } from "./components/navbar-UI/Navbar";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Footer } from "./components/Footer";
import { ShopContextProvider } from "./context/ShopContext";
import { SearchContextProvider } from "./context/SearchContext";

function App() {
	return (
			<Container>
				<SearchContextProvider>
				<ShopContextProvider>
				<Router>
					<NavMenu />
					<Container className="mb-4">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/cart" element={<Shop />} />
						</Routes>
					</Container>
				</Router>
				</ShopContextProvider>
				</SearchContextProvider>
				<Footer />
			</Container>
	);
}

export default App;
