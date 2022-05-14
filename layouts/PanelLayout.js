import * as React from "react";
import { Card, Container, Grid } from "@mui/material";

// components
import SiteLayout from "../layouts/SiteLayout";
import Header from "../components/panel/Header";
import Sidebar from "../components/panel/Sidebar";
import SidebarMobile from "../components/panel/SidebarMobile";
import { useSelector, shallowEqual } from "react-redux";

function PanelLayout(props) {
  const { menuCategories, setting } = props;
  const user = useSelector((state) => state.user?.user, shallowEqual);

  return (
    <SiteLayout
      menuCategories={menuCategories}
      setting={setting}
      noIndex={true}
    >
      <div className={"w-100 m-0 p-0 coupons blogs bloglist"}>
        <Header />
        <Grid
          lg={3}
          md={4}
          sm={6}
          xs={12}
          className={"p-0"}
          sx={{ display: { md: "none", xs: "block" } }}
        >
          <SidebarMobile user={user} />
        </Grid>
        <Container className={"py-4"}>
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
            <Grid
              lg={3}
              md={4}
              sm={6}
              xs={12}
              className={"p-2"}
              sx={{ display: { md: "block", xs: "none" } }}
            >
              <Card className={"rounded-0 shadow-none py-1 px-2"}>
                <Sidebar user={user} />
              </Card>
            </Grid>
            <Grid
              lg={9}
              md={8}
              sm={6}
              xs={12}
              className={"py-0 pe-0"}
              sx={{ paddingLeft: { lg: "1rem", xs: "0px" } }}
            >
              <Card
                className={"rounded-0 shadow-none dash p-0"}
                sx={{ bgcolor: "transparent" }}
              >
                {props.children}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </SiteLayout>
  );
}

export default PanelLayout;
