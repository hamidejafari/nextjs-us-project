import React from "react";
import { CardMedia } from "@mui/material";


function ImageInput(props) {

	const inputRef = React.useRef();

	const [source, setSource] = React.useState();

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		const url = URL.createObjectURL(file);
		setSource(url);
	};

	const handleChoose = (event) => {
		inputRef.current.click();
	};

	return (
		<div className="VideoInput">
			<input
				ref={inputRef}
				className="VideoInput_input"
				type="file"
				onChange={handleFileChange}
				accept=".webp,.jpg,.png"
			/>
			{
				!source && 
				<button 
					onClick={handleChoose} 
					className={"btnChoose"}
				>
					Choose (800*400)
				</button>
			}
			{source && (
				<CardMedia
					component="img"
					height="400"
					image={source}
					className="VideoInput_video"
					width="100%"
					controls
				/>
			)}
			<div className="VideoInput_footer">
				{source || "No photo selected"}
			</div>
		</div>
	);
}

export default ImageInput;
