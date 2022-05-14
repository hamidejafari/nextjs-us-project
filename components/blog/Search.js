import React,{useState} from "react";
import { TextField, Button, Autocomplete, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from "next/router";

// styles
import sxStyles from "../../styles/style";

function Search() {
	const [searchValue,setSearchValue] = useState('');
	const router = useRouter();

	const handleSearch = (e)=> {
		e?.preventDefault();
	
		router.push({
		  pathname: "/blog",
		  query: { title: searchValue },
		});
	  }

	return (
		<Stack sx={sxStyles['searchBox']} className={"w-100 p-0 my-4"}>
			 <form className={"searchForm"} onSubmit={handleSearch}>
                <TextField
                  label=""
                  className={"searchInput w-100"}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  value={searchValue}
                />
                <Button type="submit" avariant="text" disableElevation className={"searchBtn"}>
                  <SearchIcon fontSize="medium" />
                </Button>
              </form>
		</Stack>
	)
}


export default Search;