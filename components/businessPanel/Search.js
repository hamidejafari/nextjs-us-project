import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { Button } from '@mui/material';

export default function UseFormControl() {
	return (
		<Box component="form" noValidate autoComplete="off" my={3}>
			<FormControl sx={{ width: '100%', position: 'relative', }}>
				<OutlinedInput placeholder="Enter your website (example.com)" sx={{ borderRadius: 0 }} />
				<Button type='submit' sx={{ position: 'absolute', top: 5, right: 5, bottom: 5 }} className={"btnSb"}>
					See your star rating
				</Button>
			</FormControl>
		</Box>
	);
}