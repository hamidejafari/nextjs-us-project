import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  Modal,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

// components
import fetchLayoutData from "../../../utiles/fetchLayoutData";
import SiteLayout from "../../../layouts/SiteLayout";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    md: "50%",
    xs: "100%",
  },
  p: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // background:'white'
};

const ForgetPassword = (props) => {
  const { menuCategories, setting } = props;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage([]);
    axios
      .post(process.env.NEXT_PUBLIC_SERVER_URL + "/api/users/forget-password", {
        email,
      })
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response?.data?.error) {
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
        <Box sx={style}>
          <CircularProgress
            style={{ width: "5%", height: "5%", color: "#fff", m: "auto" }}
          />
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
            <Grid xs={12} className={"px-2 pt-2 pb-4"}>
              <Typography
                variant="h1"
                fontSize={35}
                fontWeight={"bolder"}
                textAlign={"center"}
              >
                Forget password
              </Typography>
            </Grid>
            <Grid xl={6} lg={8} md={10} xs={12} className={"p-0 mx-auto"}>
              <form onSubmit={submitHandler}>
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
                    <TextField
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      className={"w-100"}
                      error={Array.isArray(errorMessage?.email)}
                      helperText={
                        Array.isArray(errorMessage?.email)
                          ? errorMessage?.email[0]
                          : ""
                      }
                    />
                  </Grid>
                  <Grid
                    xl={7}
                    lg={8}
                    md={9}
                    xs={12}
                    className={"px-2 pt-3 mx-auto"}
                  >
                    <Button className={"w-100 submit"} type="submit">
                      submit
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
};

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

export default ForgetPassword;
