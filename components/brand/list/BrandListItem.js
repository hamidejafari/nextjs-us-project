import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Link from "next/link";

const BrandListItem = (props) => {
  const { letter, brands } = props;
  return (
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
      <Grid xs={12} item className={"p-0"}>
        <Typography
          variant="body2"
          gutterBottom
          fontSize={30}
          fontWeight={"bolder"}
          my={"0px"}
          className={"textSecondary mb-3"}
          display={"flex"}
          alignItems={"center"}
        >
          <DoubleArrowIcon className={"me-2 mb-1"} fontSize="large" />
          {letter}
        </Typography>
      </Grid>
      <Grid container spacing={2} className={"mb-4"}>
        {brands.map((brand, index) => (
          <Grid
            key={brand._id}
            xl={2}
            lg={3}
            sm={4}
            xs={6}
            item
            className={"py-0 px-2"}
          >
            <ListItem className={"px-2 py-1"}>
              <ListItemText className={"m-0"}>
                <Link href={"/brand/" + brand.slug} color={"#000"}>
                  <a>
                    <Typography
                      noWrap
                      component="div"
                      color={"#333"}
                      fontSize={16}
                    >
                      {brand.title?.replace("$year$", new Date().getFullYear())}
                    </Typography>
                  </a>
                </Link>
              </ListItemText>
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BrandListItem;
