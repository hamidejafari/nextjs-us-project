import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Modal,
  CircularProgress,
} from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { getUserDetails } from "../../redux/slices/userSlice";
import SiteLayout from "../../layouts/SiteLayout";
import fetchLayoutData from "../../utiles/fetchLayoutData";

function EnterCode(props) {
  const { menuCategories, setting } = props;

  const [errorMessage, setErrorMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { email } = router.query;

  const decodedEmail = atob(email);

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [code, setCode] = useState("");

  const handleLogin = async (e) => {
    e?.preventDefault();

    setLoading(true);

    await axios
      .post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/login/confirm-code",
        {
          email: decodedEmail,
          code: code,
        }
      )
      .then(async (res) => {
        setLoading(false);
        setErrorMessage([]);

        if (res.data.status == "error") {
          Swal.fire("", res.data.message, "error");
        } else {
          setCookie(
            "user",
            JSON.stringify({
              token: res.data.token,
              email: decodedEmail,
            }),
            {
              path: "/",
              maxAge: 31560000,
              sameSite: true,
            }
          );
          getUserDetails(dispatch, cookies);
          router.push("/panel/dashboard?success=true");
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
                    <FormControl sx={{ width: "100%" }} variant="standard">
                      <InputLabel htmlFor="standard-adornment-code">
                        Code
                      </InputLabel>
                      <Input
                        id="standard-adornment-code"
                        type={"text"}
                        value={code}
                        onChange={(e) => {
                          setCode(e.target.value);
                        }}
                      />
                    </FormControl>

                    {Array.isArray(errorMessage?.code) && (
                      <Typography fontSize={12} color="red" mt={"3px"}>
                        {errorMessage?.code[0]}
                      </Typography>
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

export default EnterCode;
