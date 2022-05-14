import * as React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Grid, Typography } from "@mui/material"

function NotFound() {

	const router = useRouter();

	// useEffect(() => {
	// 	// console.log('use effect run')
	// 	setTimeout(() => {
	// 		// router.go(1)
			// router.push('/');
	// 	}, 20000)
	// }, [])

	return (
		<Box
			className={"NotFound"}
			sx={{
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<Grid
				container
				spacing={1}
				className={"w-100 m-0"}
			>
				<Grid xs={12} className={"textCenter p-1"}>
					<img alt="server error" src="/images/500.webp" />
				</Grid>
				<Grid xs={12} className={"textCenter p-1"}>
					<Typography
						fontSize={25}
						fontWeight={"bolder"}
						color={"#333"}
					>
						Sorry, unexpected error
					</Typography>
				</Grid>
				<Grid xs={12} className={"textCenter p-1"}>
					<Typography
						fontSize={17}
						color={"#999"}
					>
						we are working on fixing the problem be back soon
					</Typography>
				</Grid>
				<Grid xs={12} className={"textCenter p-1"}>
					<Link href="/">
						GO BACK HOME
					</Link>
				</Grid>
			</Grid>
		</Box>
	)
}
export default NotFound;