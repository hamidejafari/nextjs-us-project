import React, { useRef, useState } from "react";
import { CardMedia } from "@mui/material";


function ImageInput(props) {

	const inputRef = useRef();

	const [source, setSource] = useState([]);

	const handleFileChange = (event) => {
		const files = [];
		[...Array(event.target.files.length)].map((item, index) => {
			files.push(URL.createObjectURL(event.target.files[index]))
		})

		setSource([...files]);
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
				multiple
			/>
			<button 
				onClick={handleChoose} 
				className={"btnChoose"}
				>
					Choose (800*400)
			</button>
			{source && source.map((item)=>(
				<CardMedia
					component="img"
					height="100px"
					image={item}
					key={item}
					className="VideoInput_video"
					width="100px"
					controls
				/>
			))}
			<div className="VideoInput_footer">
				{source || "No photo selected"}
			</div>
		</div>
	);
}

export default ImageInput;
