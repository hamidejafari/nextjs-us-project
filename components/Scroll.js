import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import sxStyles from "../styles/style";

const Scroll = ({
	showBelow
}) => {

	const [show, setShow] = useState(showBelow ? false : true)
	const handleScroll = () => {
		if (window.pageYOffset > showBelow) {
			if (!show) setShow(true)
		} else {
			if (show) setShow(false)
		}
	}
	useEffect(() => {
		if (showBelow) {
			window.addEventListener(`scroll`, handleScroll)
			return () => window.removeEventListener(`scroll`, handleScroll)
		}
	})
	const handleClick = () => {
		window[`scrollTo`]({ top: 0, behavior: `smooth` })
	}
	
	return (
		<div>
			{show &&
				<IconButton onClick={handleClick} className={"btnScroll"} sx={sxStyles["btnScroll"]}>
					<KeyboardArrowUpIcon />
				</IconButton>
			}
		</div>
	);
}

export default Scroll;