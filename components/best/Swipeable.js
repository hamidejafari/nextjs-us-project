import * as React from 'react';
import { Box, SwipeableDrawer, Button, Grid, List } from '@mui/material';

import TopBrands from "./TopBrands";

function SwipeableTemporaryDrawer(props) {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};
	const brands = props?.catBrands;
	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Grid item xs={12} className={"p-3"}>
				<ul className={"ul"}>
					{brands?.map((brand, index) => (
						<TopBrands
							key={index}
							name={brand?._id?.title?.replace(
								"$year$",
								new Date().getFullYear()
							)}
							number={"#" + brand?.standing}
							url={brand?._id?.slug}
						/>
					))}
				</ul>
			</Grid>
		</Box>
	);

	return (
		<div>
			{['bottom'].map((anchor) => (
				<React.Fragment key={anchor} sx={{ width: '100%' }}>
					<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
					<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
					>
						{list(anchor)}
					</SwipeableDrawer>
				</React.Fragment>
			))}
		</div>
	);
}
export default SwipeableTemporaryDrawer;