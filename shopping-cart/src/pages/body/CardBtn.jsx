// import { Button } from "react-bootstrap";
import { useState } from "react";
import { ShopContext } from "../../context/ShopContext";

export const BtnCard = () => {
	// const [count, setCount] = useState(0);
	// const quantity = 1;
	const{ addToCart } = useContext(ShopContext);
	return (
		<div className="d-flex justify-content-center">
			{/* {quantity === 0 ? ( */}
			{/* <Button variant="success" className="align-self-end w-100" onClick={() => setCount((count) => count + 1)}>
			    + {count} to cart
			</Button> */}
			{/* <Button variant="success" className="align-self-end w-100" onClick={() => addToCart(id)}>
				Add to cart
			</Button> */}
			{/* ) : null} */}
		</div>
	);
};

// export default BtnCard;
