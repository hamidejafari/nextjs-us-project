import React, { useEffect, useState } from "react";
import {
  TextField,
  Typography,
  Button,
  Autocomplete,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import SimpleBar from "simplebar-react";
import Link from "next/link";
import axios from "axios";

// styles
import sxStyles from "../../styles/style";

function Search() {
  const { query } = useRouter();
  const router = useRouter();

  const [searchValue, setSearchValue] = useState(query.search);
  const [comparisonSuggestions, setComparisonSuggestions] = useState([]);

  const [isSearching, setIsSearching] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(0);

  const handleSearch = (e) => {
    e?.preventDefault();
    router.push({
      pathname: "/comparison/list",
      query: { search: searchValue },
    });
  };

  useEffect(() => {
    if (!searchValue) {
      setComparisonSuggestions([]);
      return;
    }
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setTypingTimeout(
      setTimeout(() => {
        axios
          .get(
            process.env.NEXT_PUBLIC_SERVER_URL +
              "/api/search-comparison?s=" +
              searchValue
          )
          .then((res) => {
            res.data.comparisons &&
              setComparisonSuggestions([...res.data.comparisons]);
          });
      }, 500)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    document.addEventListener("click", () => {
      const isClickInsideElement = document
        .getElementById("searchInput")
        ?.contains(event.target);
      if (!isClickInsideElement) {
        setIsSearching(false);
      }
    });
  }, []);

  return (
    <Stack sx={sxStyles["searchBox"]} className={"w-100 p-0 my-4"}>
      <form className={"searchForm"} onSubmit={handleSearch}>
        <TextField
          autoComplete="off"
          className={"searchInput w-100"}
          value={searchValue || ""}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setIsSearching(true);
          }}
          id="searchInput"
          onFocus={() => {
            setIsSearching(true);
          }}
        />

        {isSearching &&
        searchValue &&
        Array.isArray(comparisonSuggestions) &&
        comparisonSuggestions.length > 0 ? (
          <div className="autocomplete">
            <SimpleBar style={{ maxHeight: "300px" }}>
              {Array.isArray(comparisonSuggestions) &&
                comparisonSuggestions.length > 0 && (
                  <React.Fragment>
                    {comparisonSuggestions.map(
                      (comparisonSuggestion, index) => (
                        <div
                          className="autocomplete-items"
                          key={comparisonSuggestion._id}
                        >
                          <Link href={"/" + comparisonSuggestion._source.slug}>
                            <a>
                              <Typography fontSize={15} color="#333">
                                {comparisonSuggestion._source.compare1Id}
                                {" vs "}
                                {comparisonSuggestion._source.compare2Id}
                              </Typography>
                            </a>
                          </Link>
                        </div>
                      )
                    )}
                  </React.Fragment>
                )}
            </SimpleBar>
          </div>
        ) : null}
        <Button variant="text" type="submit" className={"searchBtn"}>
          <SearchIcon fontSize="medium" />
        </Button>
      </form>
    </Stack>
  );
}

export default Search;
