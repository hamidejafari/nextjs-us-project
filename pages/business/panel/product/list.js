import React, { useState, useEffect } from "react";
import { Card, Grid, CircularProgress } from "@mui/material";
import BusinesLayout from "../../../../layouts/BusinesLayout";
import Products from "../../../../components/businessPanel/Products";
import { useSelector, shallowEqual } from "react-redux";
import businessAxiosInstance from "../../../../utiles/businessAxiosInstance";
import { useCookies } from "react-cookie";

function ProductList() {
  const business = useSelector(
    (state) => state.business?.business,
    shallowEqual
  );
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(["business"]);

  const userId = useSelector(
    (state) => state.business?.business?.user?._id,
    shallowEqual
  );

  useEffect(() => {
    const getProducts = async () => {
      if (userId) {
        setLoading(true);
        const { data } = await businessAxiosInstance(cookies).get(
          "/site/business/products"
        );
        setLoading(false);
        setProducts(data?.products);
      }
    };

    getProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <BusinesLayout>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
        className={"w-100 m-0 prolist"}
      >
        {business?.brand && !loading ? (
          <Grid item xs={12} mx={"auto"} className={"p-2"}>
            <Card
              className={"rounded-0 shadow-none dash p-0"}
              sx={{ bgcolor: "transparent" }}
            >
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
                {products?.length > 0 ? (
                  products?.map((item, index) => (
                    <Products
                      key={index}
                      img={
                        item?.image
                          ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/big/" +
                            item?.image
                          : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                            "/files/images/placeholder/brand-logo.webp"
                      }
                      title={item.title}
                      status={item.status}
                      id={item._id}
                    />
                  ))
                ) : (
                  <p>You dont have any product</p>
                )}
              </Grid>
            </Card>
          </Grid>
        ) : (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={3}>
              <CircularProgress className="me-3" color="inherit" />
            </Grid>
          </Grid>
        )}
      </Grid>
    </BusinesLayout>
  );
}

export default ProductList;
