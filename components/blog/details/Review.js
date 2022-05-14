import React from "react";
import { Card, Grid, Avatar, Typography, Rating, Stack, Modal, Button, Box, TextField, TextareaAutosize } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import CloseIcon from '@mui/icons-material/Close';


import Reply from "./Reply";

// styles
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: {
		md: '50%',
		xs: '100%',
	},
	bgcolor: 'background.paper',
	boxShadow: 10,
	p: 1,
};

function Pross(props) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const data = {
		reply: [
			
		],
	};
	return (
		<Grid
			container
			rowSpacing={1}
			columnSpacing={{
				xs: 1,
				sm: 2,
				md: 3
			}}
			className={"w-100 m-0"}
		>
			<Grid xs={12} className={"py-1"}>
				<Card className={"p-2 reviewCard"}>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{
							xs: 1,
							sm: 2,
							md: 3
						}}
						className={"w-100 m-0"}
					>
						<Grid xl={1} className={"p-1"}>
							<Avatar
								alt="Remy Sharp"
								src={props.avatar}
								sx={{ width: '100%', height: '4.54rem' }}
							/>
						</Grid>
						<Grid xl={1} className={"p-1"} sx={{ display: { md: 'none', xs: 'block' } }} alignSelf={"end"}>
							<Typography variant="h6" component="div" className={"fw-bolder name"}>
								{props.name}
								<span className={"timecomment"}>
									{new Date(props.date).toDateString()}
								</span>
							</Typography>
							<Stack spacing={1} className={"my-1"}>
								<Rating name="half-rating-read" size="small" defaultValue={props.rate} precision={0.5} readOnly />
							</Stack>
						</Grid>
						<Grid xl={11} className={"py-1 px-2"}>
							<Typography variant="h6" component="div" className={"fw-bolder name"} sx={{ display: { md: 'block', xs: 'none' } }}>
								{props.name}
								<span className={"timecomment"}>
								{new Date(props.date).toDateString()}
								</span>
							</Typography>
							{/* <Stack spacing={1} className={"my-1"} sx={{ display: { md: 'block', xs: 'none' } }}>
								<Rating name="half-rating-read" size="small" defaultValue={props.rate} precision={0.5} readOnly />
							</Stack> */}
							<Typography variant="h6" component="div" color={"gray"} className={"comment"}>
								{props.review}
							</Typography>
						</Grid>
					</Grid>
					{/* <Button onClick={handleOpen} className={"btnReply"}>
						<ReplyIcon className={"me-1"} />
						reply
					</Button>
					<Modal
						keepMounted
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box sx={style}>
							<Grid xs={12} className={"d-flex align-items-center justify-content-end"}>
								<Button onClick={handleClose} color="error">
									<CloseIcon />
								</Button>
							</Grid>
							<Grid xs={12} className={"reviewCard"}>
								<form>
									<Grid
										container
										rowSpacing={1}
										columnSpacing={{
											xs: 1,
											sm: 2,
											md: 3
										}}
										className={"w-100 m-0"}
									>
										<Grid sm={12} xs={12} className={"p-2"}>
											<Typography variant="h5" component="h3" className={"fw-bolder textSecondary"}>
												Reply
											</Typography>
										</Grid>
										<Grid sm={6} xs={12} className={"p-2"}>
											<TextField id="outlined-basic" label="Name *" variant="outlined" className={"w-100 rounded-0"} />
										</Grid>
										<Grid sm={6} xs={12} className={"p-2"}>
											<TextField id="outlined-basic" label="Email *" variant="outlined" className={"w-100 rounded-0"} />
										</Grid>
										<Grid sm={12} xs={12} className={"p-2"}>
											<TextareaAutosize
												aria-label="minimum height"
												minRows={5}
												placeholder="Review"
												style={{ width: '100%', padding: '16.5px 14px' }}
											/>
										</Grid>
										<Grid sm={12} xs={12} className={"p-2"}>
											<Button variant="contained" size="large" disableElevation className={"btnLeave"}>
												SUBMIT REVIEW
											</Button>
										</Grid>
									</Grid>
								</form>
							</Grid>
						</Box>
					</Modal> */}
				</Card>
			</Grid>
			<Reply reply={data.reply} />
		</Grid>
	)
}

export default Pross;