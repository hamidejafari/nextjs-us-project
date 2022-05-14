import React,{useEffect} from "react";
import { Badge, Card, Grid, Typography } from "@mui/material";
import Link from "next/link";
import PanelLayout from "../../layouts/PanelLayout";
import fetchLayoutData from "../../utiles/fetchLayoutData";
import { useSelector, shallowEqual } from "react-redux";
import Swal from "sweetalert2";

function Dashboard(props) {
  const { menuCategories, setting,query } = props;
  const user = useSelector((state) => state.user?.user, shallowEqual);

  useEffect(()=>{
    if(query?.success){
      Swal.fire("", "Welcome to your panel", "success");
    }
  },[query])
  
  return (
    <PanelLayout menuCategories={menuCategories} setting={setting}>
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
        <Grid lg={4} md={6} sm={12} xs={12} className={"p-2"}>
          <Link href={"/panel/reviews?type=brand"}>
            <a>
              <Card className={"px-2 py-4 rounded-0 bgSecondary itm"}>
                <Badge
                  badgeContent={
                    user?.brandsReviewsCount ? user?.brandsReviewsCount : "0"
                  }
                >
                  <Typography
                    textAlign={"center"}
                    color="white"
                    component=""
                    fontSize={20}
                  >
                    Brand Reviews
                  </Typography>
                </Badge>
              </Card>
            </a>
          </Link>
        </Grid>
        <Grid lg={4} md={6} sm={12} xs={12} className={"p-2"}>
          <Link href={"/panel/reviews?type=product"}>
            <a>
              <Card className={"px-2 py-4 rounded-0 bgSecondary itm"}>
                <Badge
                  badgeContent={
                    user?.productsReviewsCount
                      ? user?.productsReviewsCount
                      : "0"
                  }
                >
                  <Typography
                    textAlign={"center"}
                    color="white"
                    component=""
                    fontSize={20}
                  >
                    Product Reviews
                  </Typography>
                </Badge>
              </Card>
            </a>
          </Link>
        </Grid>
        <Grid lg={4} md={6} sm={12} xs={12} className={"p-2"}>
          <Link href={"/panel/reviews?type=blog"}>
            <a>
              <Card className={"px-2 py-4 rounded-0 bgSecondary itm"}>
                <Badge
                  badgeContent={
                    user?.blogsReviewsCount ? user?.blogsReviewsCount : "0"
                  }
                >
                  <Typography
                    textAlign={"center"}
                    color="white"
                    component=""
                    fontSize={20}
                  >
                    Blog Reviews
                  </Typography>
                </Badge>
              </Card>
            </a>
          </Link>
        </Grid>
      </Grid>
    </PanelLayout>
  );
}

export async function getServerSideProps({ query }) {
  let menuCategories;
  let setting;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  return {
    props: {
      query,
      menuCategories,
      setting,
    },
  };
}

export default Dashboard;