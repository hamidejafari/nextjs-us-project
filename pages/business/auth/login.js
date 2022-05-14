import { useState } from "react";
import { Grid, Box, Button, CircularProgress } from "@mui/material";
// components
import SiteLayout from "../../../layouts/SiteLayout";
import HeaderConfirm from "../../../components/businessPanel/HeaderConfirm";
import fetchLayoutData from "../../../utiles/fetchLayoutData";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import axios from "axios";
import { getBusinessDetails } from "../../../redux/slices/businessSlice";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

function Confirm({ menuCategories, setting, query }) {
  const [confirmCode, setConfirmCode] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["business"]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/business/login",
        {
          email: query.email,
          code: confirmCode,
        }
      );

      setCookie(
        "business",
        JSON.stringify({
          token: res.data.token,
          email: query.email,
        }),
        {
          path: "/",
          maxAge: 31560000,
          sameSite: true,
        }
      );
      getBusinessDetails(dispatch, cookies);
      router.push("/business/panel/checklist");

      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response?.data?.error) {
        setErrorMessage(error.response?.data?.error);
      }
      setLoading(false);
    }
  };

  return (
    <SiteLayout menuCategories={menuCategories} setting={setting}>
      <>
        <HeaderConfirm email={query?.email} />

        <Box className={"companies"}>
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
              xl={3}
              lg={4}
              md={5}
              sm={6}
              xs={10}
              mx={"auto"}
              className={"px-2 py-5"}
            >
              <form onSubmit={handleSubmit}>
                <Box autoComplete="off" my={3}>
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
                      xl={12}
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className={"p-1"}
                    >
                      <FormControl sx={{ width: "100%" }}>
                        <OutlinedInput
                          className={
                            Array.isArray(errorMessage?.code) && "invalid-input"
                          }
                          value={confirmCode}
                          placeholder="Confirm code"
                          onChange={(e) => {
                            setConfirmCode(e.target.value);
                          }}
                        />
                        <div className="text-danger">
                          {Array.isArray(errorMessage?.code) &&
                            errorMessage?.code.map((error, index) => (
                              <p key={index} className="error-text">
                                {error}
                              </p>
                            ))}
                        </div>
                      </FormControl>
                    </Grid>

                    <Grid
                      xl={12}
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className={"p-1"}
                      ml={"auto"}
                    >
                      <Button
                        className={"btnVisit w-100"}
                        sx={{ fontSize: "1rem !important"}}
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? (
                          <CircularProgress
                            className="me-3"
                            style={{ marginLeft: "3%" }}
                            color="inherit"
                          />
                        ) : null}
                        Confirm
                      </Button>
                    </Grid>
                    <Grid
                      xl={12}
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className={"p-1"}
                      ml={"auto"}
                    >
                      <Button
                        className={"textSecondary w-100"}
                        sx={{ fontSize: "0.8rem !important"}}
                      >
                        resend password
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
      </>
    </SiteLayout>
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

export default Confirm;
