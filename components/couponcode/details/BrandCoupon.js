import {
  Container,
  Grid,
  Breadcrumbs,
  Typography,
  Rating,
  Card,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Sidebar from "../../couponcode/details/Sidebar";
import sxStyles from "../../../styles/style";
import Link from "next/link";

const BrandCoupon = (props) => {
  const { content } = props;
  return (
    <Container>
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
        <Grid xs={12} className={"px-2 pb-3 pt-4"}>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                fontSize={15}
                underline="hover"
                color="inherit"
                href="/"
                display={"flex"}
                alignItems={"center"}
              >
                <a>
                  <HomeOutlinedIcon className={"me-2 mb-1"} fontSize="small" />
                  Home
                </a>
              </Link>
              <Link
                fontSize={15}
                underline="hover"
                color="inherit"
                href="/coupon/list"
              >
                All Coupon
              </Link>
              <Typography color="text.primary" fontSize={15}>
                Coupon Code Name
              </Typography>
            </Breadcrumbs>
          </div>
        </Grid>
        <Grid xl={3} md={4} className={"p-2"} sx={sxStyles["sideDesk"]}>
          <Sidebar category={content.category} />
        </Grid>
        <Grid xl={9} md={8} className={"p-0"}>
          {Array.isArray(content.products) &&
            content.products.map((product) => (
              <Grid
                key={product._id}
                lg={6}
                md={12}
                sm={6}
                xs={12}
                className={"px-2 py-3 align-self-center"}
              >
                <Card className={"couponCard"}>
                  <Grid
                    container
                    className={"w-100 m-0"}
                    rowSpacing={1}
                    columnSpacing={{
                      xs: 1,
                      sm: 2,
                      md: 3,
                    }}
                  >
                    <Grid xs={2} className={"p-3 bgSecondary occasion"}>
                      <Typography
                        variant="body2"
                        gutterBottom
                        sx={sxStyles["couponOccasion"]}
                      >
                        {product.occasion}
                      </Typography>
                    </Grid>
                    <Grid xs={7} className={"py-2 px-4 bgGray content"}>
                      <Grid
                        container
                        className={"w-100 m-0"}
                        rowSpacing={1}
                        columnSpacing={{
                          xs: 1,
                          sm: 2,
                          md: 3,
                        }}
                      >
                        <Grid xs={12} className={"px-0 py-0"}>
                          <Typography
                            variant="body2"
                            gutterBottom
                            sx={sxStyles["couponName"]}
                          >
                            {product.title}
                          </Typography>
                        </Grid>
                        <Grid xs={9} className={"px-0 py-0"}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={product.star}
                            precision={0.5}
                            size="small"
                            readOnly
                          />
                          <Typography
                            variant="body2"
                            gutterBottom
                            sx={sxStyles["couponDate"]}
                          >
                            Expiration date:{" "}
                            {new Date(product.maxExpirationDate).toLocaleString(
                              "en-GB",
                              {
                                year: "numeric",
                                month: "2-digit",
                                day: "numeric",
                              }
                            )}
                          </Typography>
                        </Grid>
                        <Grid xs={3} className={"px-0 py-1 off"}></Grid>
                        <Grid xs={12} className={"px-0 py-0"}>
                          <Typography
                            variant="body2"
                            gutterBottom
                            className={"desc"}
                            sx={sxStyles["couponDes"]}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: product.descriptionShort,
                              }}
                            />
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid xs={3} className={"py-1 ps-4 pe-2 bgGray img"}>
                      <div className={"imgInn"}>
                        <Grid xs={12} className={"py-1 px-2 d-flex"}>
                          <Typography
                            variant="body2"
                            gutterBottom
                            className={"textSecondary"}
                            sx={{
                              ...sxStyles["couponPercentage"],
                              fontSize: "2.5rem",
                            }}
                          >
                            {product.maxDiscount}%
                          </Typography>
                          {/* <img
                            alt={product?.alt}
                            src={
                              product.image?.fileName
                                ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                  "/files/images/main/" +
                                  product.image?.fileName
                                : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                  "/files/images/placeholder/brand-logo.webp"
                            }
                            className={"w-100"}
                          /> */}
                        </Grid>
                        <Grid xs={12} className={"py-1"}>
                          <Link
                            href={"/coupon/" + product.slug}
                            class={"pointer"}
                          >
                            <a>See all</a>
                          </Link>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
        </Grid>
        <Grid xs={12} className={"p-2 m-auto"} sx={sxStyles["sideMob"]}>
          <Sidebar category={content.category} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BrandCoupon;
