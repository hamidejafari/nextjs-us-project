import * as React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Grid, Typography } from "@mui/material"

function Custom404() {
	    
	const router = useRouter();

	// useEffect(() => {
	// 	// console.log('use effect run')
	// 	setTimeout(() => {
	// 		// router.go(1)
	// 		router.push('/');
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
					<img alt="not found" src="/images/404.webp" />
				</Grid>
				<Grid xs={12} className={"textCenter p-1"}>
					<Typography
						fontSize={25}
						fontWeight={"bolder"}
						color={"#666"}
					>
						the page you are looking for does not exist
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
export default Custom404;