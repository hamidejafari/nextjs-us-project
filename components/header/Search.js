import React, { useEffect, useState } from "react";
import { TextField, Button, Stack, Typography, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SimpleBar from "simplebar-react";

// styles
import sxStyles from "../../styles/style";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

function Search() {
  const [productSuggestions, setProductSuggestions] = useState([]);
  const [brandSuggestions, setBrandSuggestions] = useState([]);
  const [comparisonsSuggestions, setComparisonsSuggestions] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!searchValue) {
      setProductSuggestions([]);
      setBrandSuggestions([]);
      setComparisonsSuggestions([]);
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
            res.data?.product
              ? setProductSuggestions([...res.data.product])
              : setProductSuggestions([]);
            res.data?.brand
              ? setBrandSuggestions([...res.data.brand])
              : setBrandSuggestions([]);
            res.data?.comparisons
              ? setComparisonsSuggestions([...res.data.comparisons])
              : setComparisonsSuggestions([]);
          });
      }, 500)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const searchResult = (e) => {
    e?.preventDefault();

    router.push("/search?title=" + searchValue);
  };

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
    <Stack sx={sxStyles["searchBox"]} className={"w-100 p-0 searchBoxHi"}>
      <form className={"searchForm"} onSubmit={searchResult}>
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
        />
        {isSearching &&
        searchValue &&
        ((Array.isArray(brandSuggestions) && brandSuggestions.length > 0) ||
          (Array.isArray(productSuggestions) &&
            productSuggestions.length > 0)) ? (
          <div className="autocomplete">
            <SimpleBar style={{ maxHeight: "300px" }}>
              {Array.isArray(brandSuggestions) && brandSuggestions.length > 0 && (
                <React.Fragment>
                  <Typography
                    fontWeight={"bolder"}
                    fontSize={18}
                    px={"10px"}
                    pt={"10px"}
                    className={"title"}
                  >
                    Brands
                  </Typography>
                  <div className="suggestion">
                    {brandSuggestions.map((brandSuggestion) => (
                      <div
                        className="autocomplete-items"
                        key={brandSuggestion._id}
                      >
                        <Link href={"/brand/" + brandSuggestion._source.slug}>
                          <a>
                            <div className="d-flex align-items-center">
                              <Typography
                                fontSize={12}
                                color="#333"
                                display={"flex"}
                                alignItems={"center"}
                                sx={{
                                  background: "#eee",
                                  width: "max-content",
                                  padding: "5px 10px 5px 5px",
                                }}
                              >
                                {brandSuggestion._source.image && (
                                  <img
                                    src={
                                      process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                      "/" +
                                      brandSuggestion._source.image
                                    }
                                    alt={brandSuggestion._source.title}
                                    width="45"
                                    height="45"
                                    className={"me-2"}
                                  />
                                )}
                                {brandSuggestion._source.title}
                              </Typography>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <Divider className={"mt-2"} />
                </React.Fragment>
              )}
              {Array.isArray(productSuggestions) &&
                productSuggestions.length > 0 && (
                  <React.Fragment>
                    <Typography
                      fontWeight={"bolder"}
                      fontSize={18}
                      px={"10px"}
                      pt={"10px"}
                      className={"title"}
                    >
                      Products
                    </Typography>
                    <div className="suggestion">
                      {productSuggestions.map((productSuggestion) => (
                        <div
                          className="autocomplete-items"
                          key={productSuggestion._id}
                        >
                          <Link
                            href={
                              productSuggestion._source.slug
                                ? "/" + productSuggestion._source.slug
                                : "/"
                            }
                          >
                            <a>
                              <div className="d-flex align-items-center">
                                <Typography
                                  fontSize={12}
                                  color="#333"
                                  display={"flex"}
                                  alignItems={"center"}
                                  sx={{
                                    background: "#eee",
                                    width: "max-content",
                                    padding: "5px 10px 5px 5px",
                                  }}
                                >
                                  {productSuggestion._source.image && (
                                    <img
                                      src={
                                        process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                        "/" +
                                        productSuggestion._source.image
                                      }
                                      alt={productSuggestion._source.title}
                                      width="45"
                                      height="45"
                                      className={"me-2"}
                                    />
                                  )}
                                  {productSuggestion._source.title}
                                </Typography>
                              </div>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <Divider className={"mt-2"} />
                  </React.Fragment>
                )}
              {Array.isArray(comparisonsSuggestions) &&
                comparisonsSuggestions.length > 0 && (
                  <React.Fragment>
                    <Typography
                      fontWeight={"bolder"}
                      fontSize={18}
                      px={"10px"}
                      pt={"10px"}
                      className={"title"}
                    >
                      Comparisons
                    </Typography>
                    <div className="suggestion">
                      {comparisonsSuggestions.map((comparisonsSuggestion) => (
                        <div
                          className="autocomplete-items"
                          key={comparisonsSuggestion._id}
                        >
                          <Link
                            href={
                              comparisonsSuggestion._source.slug
                                ? "/" + comparisonsSuggestion._source.slug
                                : "/"
                            }
                          >
                            <a>
                              <Typography
                                fontSize={15}
                                color="#333"
                                display={"flex"}
                                alignItems={"center"}
                                sx={{
                                  background: "#eee",
                                  width: "max-content",
                                  padding: "5px 10px 5px 5px",
                                }}
                              >
                                {comparisonsSuggestion._source.compare1Id +
                                  " vs " +
                                  comparisonsSuggestion._source.compare2Id}
                              </Typography>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <Divider className={"mt-2"} />
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
