import { Image } from "react-bootstrap";
import "./header-img.css";

export const HeaderImg = () => {
	return (
		<div>
			<div className="header">
				<div className="header-text">
					<h1>Er is ruimte</h1>
					<p>
						<i>voor een plant</i>
					</p>
				</div>
				<Image
					src="https://source.unsplash.com/Pd7rF0TcdR4"
					alt="Plant leaves"
					className="header-img"
				/>
				<div className="clip-header mb-5"></div>
			</div>
		</div>
	);
};
