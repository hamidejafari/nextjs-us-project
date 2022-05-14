import React from "react";
import { useTheme } from '@mui/material/styles';
import { Grid, TextField, Stack, Autocomplete, OutlinedInput, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};


function getStyles(name, personName, theme) {
	return {
	  fontWeight:
	    personName.indexOf(name) === -1
		 ? theme.typography.fontWeightRegular
		 : theme.typography.fontWeightMedium,
	};
}

function ReviewFilter() {
	const theme = useTheme();
	const [personName, setPersonName] = React.useState([]);
	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setPersonName(
			typeof value === 'Sort by' ? value.split(',') : value,
		);
	};
	return (
		<div className={"reviewFilter"}>
			<Grid xs={12} className={"p-2"}>
				<Stack spacing={1} className={"w-100 h-100"}>
					<Autocomplete
						id="free-solo-demo"
						freeSolo
						options={top100Films.map((option) => option.title)}
						renderInput={(params) => <TextField {...params} label="SEARCH REVIEWS" />}
					/>
				</Stack>
			</Grid>
			<Grid xs={12} className={"p-2"}>
				<FormControl className={"w-100"}>
					<InputLabel id="demo-multiple-name-label">Sort by :</InputLabel>
					<Select
						labelId="demo-multiple-name-label"
						id="demo-multiple-name"
						multiple
						value={personName}
						onChange={handleChange}
						input={<OutlinedInput label="Sort by :" />}
						MenuProps={MenuProps}
					>
						{names.map((name) => (
							<MenuItem
								key={name}
								value={name}
								style={getStyles(name, personName, theme)}
							>
								{name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
		</div>
	);
}

const names = [
	'Relevant',
	'lorem',
	'ipspm',
];

const top100Films = [
	{ title: 'The Shawshank Redemption', year: 1994 },
	{ title: 'The Godfather', year: 1972 },
	{ title: 'The Godfather: Part II', year: 1974 },
	{ title: 'The Dark Knight', year: 2008 },
	{ title: '12 Angry Men', year: 1957 },
	{ title: "Schindler's List", year: 1993 },
	{ title: 'Pulp Fiction', year: 1994 },
	{ title: 'The Good, the Bad and the Ugly', year: 1966 },
	{ title: 'Fight Club', year: 1999 },
	{ title: 'Forrest Gump', year: 1994 },
	{ title: 'Inception', year: 2010 },
	{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
	{ title: 'Goodfellas', year: 1990 },
	{ title: 'The Matrix', year: 1999 },
	{ title: 'Seven Samurai', year: 1954 },
	{ title: 'City of God', year: 2002 },
	{ title: 'Se7en', year: 1995 },
	{ title: 'The Silence of the Lambs', year: 1991 },
	{ title: "It's a Wonderful Life", year: 1946 },
	{ title: 'Life Is Beautiful', year: 1997 },
	{ title: 'The Usual Suspects', year: 1995 },
	{ title: 'Léon: The Professional', year: 1994 },
	{ title: 'Spirited Away', year: 2001 },
	{ title: 'Saving Private Ryan', year: 1998 },
	{ title: 'Once Upon a Time in the West', year: 1968 },
	{ title: 'American History X', year: 1998 },
	{ title: 'Interstellar', year: 2014 },
	{ title: 'Casablanca', year: 1942 },
	{ title: 'City Lights', year: 1931 },
	{ title: 'Psycho', year: 1960 },
	{ title: 'The Green Mile', year: 1999 },
	{ title: 'The Intouchables', year: 2011 },
	{ title: 'Modern Times', year: 1936 },
	{ title: 'Raiders of the Lost Ark', year: 1981 },
	{ title: 'Rear Window', year: 1954 },
	{ title: 'The Pianist', year: 2002 },
	{ title: 'The Departed', year: 2006 },
	{ title: 'Terminator 2: Judgment Day', year: 1991 },
];

export default ReviewFilter;