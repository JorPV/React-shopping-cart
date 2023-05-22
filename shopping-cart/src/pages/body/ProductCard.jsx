import products from "../../../../public/products.json";
// import Card from "react-bootstrap/Card";
// import BtnCard from "./CardBtn";
// import { ShopContext } from "../../context/ShopContext";
// import { useContext } from "react";
import { Product } from "./Product";

export const ProductCard = () => {
	// const {id, title, description, price, special} = props.data; 
	// const{ addToCart } = useContext(ShopContext);

	return (
		<>
				{products.map((product) => (
					// <Card style={{ width: "18rem" }} data={product}>
					// 	<Card.Img
					// 		variant="top"
					// 		src="https://source.unsplash.com/chyPcrDjcZg/100px180"
					// 		className="m-0"
					// 	/>
					// 	<Card.Body>
					// 		<div key={id}>
					// 			<Card.Title>
					// 				<h2>{title}</h2>
					// 			</Card.Title>
					// 			<Card.Text>
					// 				<p>{description}</p>
					// 			</Card.Text>
					// 			<p>{price}</p>
					// 			{special && <p>Special product</p>}
					// 		</div>
					// 		<BtnCard/>
					// 	</Card.Body>
					// </Card>
					<Product data={product}/>
				))}
		</>
	);
}

// export default ProductCard;