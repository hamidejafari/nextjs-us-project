import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography, Breadcrumbs } from "@mui/material";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Link from "next/link";
import BrandListItem from "./BrandListItem";
import HeaderInn from "./HeaderInn";

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #8a56b5;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: #f1dbff;
  width: 5rem;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  transition: 0.4s ease-in-out;
  border: 1px solid #8a56b5;
  &:hover {
    background-color: #8a56b5;
    color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #8a56b5;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #8a56b5;
    color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #8a56b5;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: max-content;
  width: max-content;
  background-color: transparent;
  border-radius: 0px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Brands(props) {
  const { brands } = props;
  const [searchValue, setSearchValue] = useState("");
  const [searchedBrands, setSearchedBrands] = useState([]);

  const { query, brandsSearch } = props;

  useEffect(() => {
    setSearchValue(query?.title);

    const filteredBrands = brandsSearch.filter((brand) => {
      return brand.title.toLowerCase().includes(query?.title?.toLowerCase());
    });
    setSearchedBrands([...filteredBrands]);
  }, [query, brandsSearch]);

  return (
    <Box>
      <HeaderInn searchValue={searchValue} setSearchValue={setSearchValue} />
      <TabsUnstyled defaultValue={0}>
        {props?.query?.title ? (
          <Container>
            <Grid xs={12} className={"px-2 pb-3 pt-4"}>
              <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link href={"/"}>
                    <a className="d-flex">
                      <HomeOutlinedIcon
                        className={"me-2 mb-1"}
                        fontSize="small"
                      />
                      Home
                    </a>
                  </Link>
                  <Typography color="text.primary" fontSize={15}>
                    Brands
                  </Typography>
                </Breadcrumbs>
              </div>
            </Grid>
            <Grid xs={12} className={"px-0 py-2"}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{
                  xs: 1,
                  sm: 2,
                  md: 3,
                }}
                className={"w-100 m-0"}
              >
                {searchedBrands?.map((content, index) => (
                  <Grid key={index} xl={2} className={"px-2 py-1"}>
                    <Link href={"/brand/" + content.slug}>
                      <a>
                        <Typography
                          noWrap
                          color={"#333"}
                          fontSize={16}
                          sx={{ marginLeft: "3px" }}
                          className={"pointer"}
                        >
                          {content.title}
                        </Typography>
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Container>
        ) : (
          <>
            <Box className={"tab-maincat"}>
              <Container>
                <Grid xs={12} className={"px-2 tabscoll"}>
                  <TabsList>
                    <Tab>A - C</Tab>
                    <Tab>D - F</Tab>
                    <Tab>G - I</Tab>
                    <Tab>J - L</Tab>
                    <Tab>M - O</Tab>
                    <Tab>P - R</Tab>
                    <Tab>S - U</Tab>
                    <Tab>V - X</Tab>
                    <Tab>Y - Z</Tab>
                  </TabsList>
                </Grid>
              </Container>
            </Box>
            <Container>
              <Grid xs={12} className={"px-2 pb-3 pt-4"}>
                <div role="presentation" onClick={handleClick}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link href={"/"}>
                      <a className="d-flex">
                        <HomeOutlinedIcon
                          className={"me-2 mb-1"}
                          fontSize="small"
                        />
                        Home
                      </a>
                    </Link>
                    <Typography color="text.primary" fontSize={15}>
                      All Brands
                    </Typography>
                  </Breadcrumbs>
                </div>
              </Grid>
              <Grid xs={12} className={"px-0 py-2"}>
                <TabPanel value={0}>
                  {brands.a &&
                    Array.isArray(brands.a) &&
                    brands.a.length > 0 && (
                      <BrandListItem letter="A" brands={brands.a} />
                    )}
                  {brands.b &&
                    Array.isArray(brands.b) &&
                    brands.b.length > 0 && (
                      <BrandListItem letter="B" brands={brands.b} />
                    )}
                  {brands.c &&
                    Array.isArray(brands.c) &&
                    brands.c.length > 0 && (
                      <BrandListItem letter="C" brands={brands.c} />
                    )}
                </TabPanel>
                <TabPanel value={1}>
                  {brands.d &&
                    Array.isArray(brands.d) &&
                    brands.d.length > 0 && (
                      <BrandListItem letter="D" brands={brands.d} />
                    )}
                  {brands.e &&
                    Array.isArray(brands.e) &&
                    brands.e.length > 0 && (
                      <BrandListItem letter="E" brands={brands.e} />
                    )}
                  {brands.f &&
                    Array.isArray(brands.f) &&
                    brands.f.length > 0 && (
                      <BrandListItem letter="F" brands={brands.f} />
                    )}
                </TabPanel>
                <TabPanel value={2}>
                  {brands.g &&
                    Array.isArray(brands.g) &&
                    brands.g.length > 0 && (
                      <BrandListItem letter="G" brands={brands.g} />
                    )}
                  {brands.h &&
                    Array.isArray(brands.h) &&
                    brands.h.length > 0 && (
                      <BrandListItem letter="H" brands={brands.h} />
                    )}
                  {brands.i &&
                    Array.isArray(brands.i) &&
                    brands.i.length > 0 && (
                      <BrandListItem letter="I" brands={brands.i} />
                    )}
                </TabPanel>
                <TabPanel value={3}>
                  {brands.j &&
                    Array.isArray(brands.j) &&
                    brands.j.length > 0 && (
                      <BrandListItem letter="J" brands={brands.j} />
                    )}
                  {brands.k &&
                    Array.isArray(brands.k) &&
                    brands.k.length > 0 && (
                      <BrandListItem letter="K" brands={brands.k} />
                    )}
                  {brands.l &&
                    Array.isArray(brands.l) &&
                    brands.l.length > 0 && (
                      <BrandListItem letter="L" brands={brands.l} />
                    )}
                </TabPanel>
                <TabPanel value={4}>
                  {brands.m &&
                    Array.isArray(brands.m) &&
                    brands.m.length > 0 && (
                      <BrandListItem letter="M" brands={brands.m} />
                    )}
                  {brands.n &&
                    Array.isArray(brands.n) &&
                    brands.n.length > 0 && (
                      <BrandListItem letter="N" brands={brands.n} />
                    )}
                  {brands.o &&
                    Array.isArray(brands.o) &&
                    brands.o.length > 0 && (
                      <BrandListItem letter="O" brands={brands.o} />
                    )}
                </TabPanel>
                <TabPanel value={5}>
                  {brands.p &&
                    Array.isArray(brands.p) &&
                    brands.p.length > 0 && (
                      <BrandListItem letter="P" brands={brands.p} />
                    )}
                  {brands.q &&
                    Array.isArray(brands.q) &&
                    brands.q.length > 0 && (
                      <BrandListItem letter="Q" brands={brands.q} />
                    )}
                  {brands.r &&
                    Array.isArray(brands.r) &&
                    brands.r.length > 0 && (
                      <BrandListItem letter="R" brands={brands.r} />
                    )}
                </TabPanel>
                <TabPanel value={6}>
                  {brands.s &&
                    Array.isArray(brands.s) &&
                    brands.s.length > 0 && (
                      <BrandListItem letter="S" brands={brands.s} />
                    )}
                  {brands.t &&
                    Array.isArray(brands.t) &&
                    brands.t.length > 0 && (
                      <BrandListItem letter="T" brands={brands.t} />
                    )}
                  {brands.u &&
                    Array.isArray(brands.u) &&
                    brands.u.length > 0 && (
                      <BrandListItem letter="U" brands={brands.u} />
                    )}
                </TabPanel>
                <TabPanel value={7}>
                  {brands.v &&
                    Array.isArray(brands.v) &&
                    brands.v.length > 0 && (
                      <BrandListItem letter="V" brands={brands.v} />
                    )}
                  {brands.w &&
                    Array.isArray(brands.w) &&
                    brands.w.length > 0 && (
                      <BrandListItem letter="W" brands={brands.w} />
                    )}
                  {brands.x &&
                    Array.isArray(brands.x) &&
                    brands.x.length > 0 && (
                      <BrandListItem letter="X" brands={brands.x} />
                    )}
                </TabPanel>
                <TabPanel value={8}>
                  {brands.y &&
                    Array.isArray(brands.y) &&
                    brands.y.length > 0 && (
                      <BrandListItem letter="Y" brands={brands.y} />
                    )}
                  {brands.z &&
                    Array.isArray(brands.z) &&
                    brands.z.length > 0 && (
                      <BrandListItem letter="Z" brands={brands.z} />
                    )}
                  {brands["#"] &&
                    Array.isArray(brands["#"]) &&
                    brands["#"].length > 0 && (
                      <BrandListItem letter="#" brands={brands["#"]} />
                    )}
                </TabPanel>
              </Grid>
            </Container>
          </>
        )}
      </TabsUnstyled>
    </Box>
  );
}

export default Brands;
