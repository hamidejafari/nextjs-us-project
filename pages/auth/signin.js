import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Modal,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";

// components
import SiteLayout from "../../layouts/SiteLayout";
import fetchLayoutData from "../../utiles/fetchLayoutData";

function Signin(props) {
  const { menuCategories, setting } = props;

  const [errorMessage, setErrorMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e?.preventDefault();

    setLoading(true);

    axios
      .post(process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/user/check-email", {
        email,
      })
      .then((res) => {
        setLoading(false);
        setErrorMessage([]);
        const encodeMail = btoa(email);
        if (res.data.status === "code") {
          router.push("/auth/enter-code?email=" + encodeMail);
        } else if (res.data.status === "password") {
          router.push("/auth/enter-password?email=" + encodeMail);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        if (err.response?.data?.error) {
          console.log(err.response?.data?.error);
          setErrorMessage(err.response?.data?.error);
        }
      });
  };

  return (
    <SiteLayout
      menuCategories={menuCategories}
      setting={setting}
      noIndex={true}
    >
      <Modal
        keepMounted
        open={loading}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
          }}
        >
          <CircularProgress style={{ color: "#fff" }} />
        </Box>
      </Modal>

      <div className={"w-100 m-0 p-0 coupons blogs bloglist login"}>
        <Box className={"headerpanel"}></Box>
        <Container className={"py-5"}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{
              xs: 1,
              sm: 2,
              md: 3,
            }}
            className={"w-100 m-0 py-5"}
          >
            <Grid xl={6} lg={8} md={10} xs={12} className={"p-0 mx-auto"}>
              <form onSubmit={handleLogin}>
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
                  <Grid xl={7} lg={8} md={9} xs={12} className={"p-2 mx-auto"}>
                    {Array.isArray(errorMessage?.email) ? (
                      <TextField
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        className={"w-100"}
                        error
                        helperText={errorMessage?.email[0]}
                      />
                    ) : (
                      <TextField
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        className={"w-100"}
                        helperText="@email.com"
                      />
                    )}
                  </Grid>
                  <Grid
                    xl={7}
                    lg={8}
                    md={9}
                    xs={12}
                    className={"px-2 pt-3 mx-auto"}
                  >
                    <Button className={"w-100 submit"} type="submimt">
                      Sign in
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </div>
    </SiteLayout>
  );
}

export async function getServerSideProps({ query, req }) {
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

export default Signin;
