import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";
import Swal from "sweetalert2";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";

import PanelLayout from "../../layouts/PanelLayout";
import fetchLayoutData from "../../utiles/fetchLayoutData";
import axios from "axios";
import { useCookies } from "react-cookie";

function PasswordReset(props) {
  const { menuCategories, setting, query } = props;

  const [cookies, setCookie] = useCookies(["user"]);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const router = useRouter();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleLogin = async (e) => {
    e?.preventDefault();

    if (confirmPassword !== password) {
      setErrorMessage({ confirmPassword: ["passwords do not match!"] });
      return;
    }

    setLoading(true);

    await axios
      .post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/password-reset",
        {
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies["user"]?.token}`,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setErrorMessage([]);

        Swal.fire("", "Your password updated successfully.", "success");
        router.push("/panel/dashboard");
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

  useEffect(() => {
    if (query?.success) {
      Swal.fire("", "Welcome to your panel", "success");
    }
  }, [query]);

  return (
    <PanelLayout menuCategories={menuCategories} setting={setting}>
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
            <Grid lg={8} md={10} xs={12} className={"p-0 mx-auto"}>
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
                      <InputLabel htmlFor="standard-adornment-password">
                        New Password
                      </InputLabel>
                      <Input
                        id="standard-adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                            >
                              {showPassword ? (
                                <VisibilityOffOutlined />
                              ) : (
                                <VisibilityOutlined />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>

                    {Array.isArray(errorMessage?.password) && (
                      <Typography fontSize={12} color="red" mt={"3px"}>
                        {errorMessage?.password[0]}
                      </Typography>
                    )}
                  </Grid>
                  <Grid xl={7} lg={8} md={9} xs={12} className={"p-2 mx-auto"}>
                    <FormControl sx={{ width: "100%" }} variant="standard">
                      <InputLabel htmlFor="standard-adornment-confirm-password">
                        Confirm Password
                      </InputLabel>
                      <Input
                        id="standard-adornment-confirm-password"
                        type={showPassword2 ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword2}
                            >
                              {showPassword2 ? (
                                <VisibilityOffOutlined />
                              ) : (
                                <VisibilityOutlined />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>

                    {Array.isArray(errorMessage?.confirmPassword) && (
                      <Typography fontSize={12} color="red" mt={"3px"}>
                        {errorMessage?.confirmPassword[0]}
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
    </PanelLayout>
  );
}

export async function getServerSideProps() {
  let menuCategories;
  let setting;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  return {
    props: {
      menuCategories,
      setting,
    },
  };
}

export default PasswordReset;
