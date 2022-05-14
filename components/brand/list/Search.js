import React from "react";
import { TextField, Button, Autocomplete, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// styles
import sxStyles from "../../../styles/style";

function Search() {
  return (
    <Stack sx={sxStyles["searchBox"]} className={"w-100 p-0 my-4"}>
      <form className={"searchForm"}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              autoComplete="off"
              className={"searchInput w-100"}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <Button variant="text" className={"searchBtn"}>
          <SearchIcon fontSize="medium" />
        </Button>
      </form>
    </Stack>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

export default Search;
