import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import SimpleBar from "simplebar-react";
import Link from "next/link";
import axios from "axios";

// styles
import sxStyles from "../../../styles/style";

function HeaderInn({ searchValue, setSearchValue }) {
  const [brandSuggestions, setBrandSuggestions] = useState([]);

  const [isSearching, setIsSearching] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(0);

  const router = useRouter();

  const handleSearch = (e) => {
    e?.preventDefault();

    router.push({
      pathname: "/brand",
      query: { title: searchValue },
    });
  };

  useEffect(() => {
    if (!searchValue) {
      setBrandSuggestions([]);
      return;
    }
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setTypingTimeout(
      setTimeout(() => {
        axios
          .get(
            process.env.NEXT_PUBLIC_SERVER_URL + "/api/search?s=" + searchValue
          )
          .then((res) => {
            res.data.brand && setBrandSuggestions([...res.data.brand]);
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
    <Box className={"headerMaincat"}>
      <Container>
        <Grid container spacing={1} className={"w-100 m-0"}>
          <Grid
            xl={8}
            lg={9}
            md={10}
            sm={11}
            xs={12}
            mx={"auto"}
            textAlign={"center"}
            className={"px-2"}
          >
            <Typography
              variant="h4"
              component="h1"
              className={"fw-bolder my-2"}
            >
              All Brands
            </Typography>
            <Typography
              variant="h6"
              component="div"
              fontSize={15}
              className={"my-2"}
            >
              We have gathered all the best and well-known brands on the market.
              The brands are mentioned in alphabetical order so you can easily
              find the brand you are looking for.
            </Typography>
          </Grid>
          <Grid
            xl={6}
            lg={8}
            md={10}
            sm={12}
            xs={12}
            mx={"auto"}
            className={"px-2"}
          >
            <Stack sx={sxStyles["searchBox"]} className={"w-100 p-0 my-4"}>
              <form className={"searchForm"} onSubmit={handleSearch}>
                <TextField
                  autoComplete="off"
                  className={"searchInput w-100"}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    setIsSearching(true);
                  }}
                  id="searchInput"
                  onFocus={() => {
                    setIsSearching(true);
                  }}
                  value={searchValue}
                />

                {isSearching &&
                searchValue &&
                Array.isArray(brandSuggestions) &&
                brandSuggestions.length > 0 ? (
                  <div className="autocomplete">
                    <SimpleBar style={{ maxHeight: "300px" }}>
                      <React.Fragment>
                        {brandSuggestions.map((brandSuggestion, index) => (
                          <div
                            className="autocomplete-items"
                            key={brandSuggestion._id}
                          >
                            <Link
                              href={"/brand/" + brandSuggestion._source.slug}
                            >
                              <a>
                                <Typography fontSize={15} color="#333">
                                  {brandSuggestion._source.title}
                                </Typography>
                              </a>
                            </Link>
                          </div>
                        ))}
                      </React.Fragment>
                    </SimpleBar>
                  </div>
                ) : null}
                <Button
                  type="submit"
                  avariant="text"
                  disableElevation
                  className={"searchBtn"}
                >
                  <SearchIcon fontSize="medium" />
                </Button>
              </form>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeaderInn;
