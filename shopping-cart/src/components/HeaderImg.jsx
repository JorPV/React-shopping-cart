import { Image } from "react-bootstrap";
import "./header-img.css";

export const HeaderImg = () => {
	return (
		<div>
			<div><Image
				src="https://source.unsplash.com/Pd7rF0TcdR4"
				alt="Plant leaves"
				className="header-img"
				// fluid
			/></div>
      {/* <div className="clip-header"></div>
      <div className="clip-header-2 mb-5"></div> */}
		</div>
	);
}

// export default HeaderImg;