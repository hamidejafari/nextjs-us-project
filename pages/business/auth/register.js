import { useEffect, useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  CircularProgress,
  Typography,
  Card,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";

// components
import SiteLayout from "../../../layouts/SiteLayout";
import HeaderInn from "../../../components/businessPanel/HeaderInn";
import HeaderRegister from "../../../components/businessPanel/HeaderRegister";
import fetchLayoutData from "../../../utiles/fetchLayoutData";
import countires from "../../../utiles/countries";

function Register({ menuCategories, setting, query }) {
  const router = useRouter();

  const [website, setWebsite] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");

  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [errorMessage, setErrorMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState({
    value: "+1",
    label: "United States",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (query?.website) {
      setWebsite(query.website);
    }
    return;
  }, [query]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage({});

    if (!captchaValue) {
      setErrorMessage({ captchaValue: ["Captcha is required."] });
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/business/register",
        {
          companyName: formData.companyName,
          name: formData.firstName,
          family: formData.lastName,
          email: formData.email && formData.email + "@" + website,
          website: website,
          phoneNumber: selectedCountry.value + formData.phoneNumber,
        }
      );
      setLoading(false);

      router.push({
        pathname: "/business/auth/confirm",
        query: { email: formData.email + "@" + website },
      });
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
      {!query.website ? (
        <HeaderInn website={website} setWebsite={setWebsite} />
      ) : (
        <>
          <HeaderRegister />

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
                item
                xl={6}
                lg={8}
                md={10}
                xs={12}
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
                        item
                        xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xs={12}
                        className={"p-2"}
                      >
                        <FormControl sx={{ width: "100%" }}>
                          <OutlinedInput
                            value={website}
                            disabled={true}
                            placeholder="Website Url (www.example.com)"
                            className={"disabled-input"}
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xs={12}
                        className={"p-2"}
                      >
                        <FormControl sx={{ width: "100%" }}>
                          <OutlinedInput
                            className={
                              Array.isArray(errorMessage?.companyName)
                                ? "invalid-input"
                                : ""
                            }
                            value={formData.companyName}
                            placeholder="Company Name"
                            name="companyName"
                            onChange={handleChange}
                          />
                          <div className="text-danger">
                            {Array.isArray(errorMessage?.companyName) &&
                              errorMessage?.companyName.map((error, index) => (
                                <p key={index} className="error-text">
                                  {error}
                                </p>
                              ))}
                          </div>
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xs={12}
                        className={"p-2"}
                      >
                        <FormControl sx={{ width: "100%" }}>
                          <OutlinedInput
                            value={formData.firstName}
                            placeholder="First Name"
                            className={
                              Array.isArray(errorMessage?.name)
                                ? "invalid-input"
                                : ""
                            }
                            name="firstName"
                            onChange={handleChange}
                          />
                          <div className="text-danger">
                            {Array.isArray(errorMessage?.name) &&
                              errorMessage?.name.map((error, index) => (
                                <p key={index} className="error-text">
                                  {error}
                                </p>
                              ))}
                          </div>
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        xl={6}
                        lg={6}
                        md={6}
                        sm={6}
                        xs={12}
                        className={"p-2"}
                      >
                        <FormControl sx={{ width: "100%" }}>
                          <OutlinedInput
                            value={formData.lastName}
                            placeholder="Last Name"
                            className={
                              Array.isArray(errorMessage?.family)
                                ? "invalid-input"
                                : ""
                            }
                            name="lastName"
                            onChange={handleChange}
                          />

                          <div className="text-danger">
                            {Array.isArray(errorMessage?.family) &&
                              errorMessage?.family.map((error, index) => (
                                <p key={index} className="error-text">
                                  {error}
                                </p>
                              ))}
                          </div>
                        </FormControl>
                      </Grid>
                      <Grid item xl={8} xs={6} className={"p-2"}>
                        <FormControl sx={{ width: "100%" }}>
                          <OutlinedInput
                            value={formData.email}
                            placeholder={"Business Email (info)@" + website}
                            className={
                              Array.isArray(errorMessage?.email)
                                ? "invalid-input"
                                : ""
                            }
                            name="email"
                            onChange={handleChange}
                          />

                          <div className="text-danger">
                            {Array.isArray(errorMessage?.email) &&
                              errorMessage?.email.map((error, index) => (
                                <p key={index} className="error-text">
                                  {error}
                                </p>
                              ))}
                          </div>
                        </FormControl>
                      </Grid>
                      <Grid item xl={4} xs={6} className={"p-2"}>
                        <Card
                          className={
                            "shadow-none h-100 rounded-0 disabled-input"
                          }
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid rgba(0, 0, 0, 0.23)",
                            color: "rgba(0, 0, 0, 0.35)",
                          }}
                        >
                          <Typography>@{website}</Typography>
                        </Card>
                      </Grid>
                      <Grid item md={5} sm={5} xs={12} className={"p-2"}>
                        <FormControl sx={{ width: "100%" }}>
                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={countires}
                            value={selectedCountry}
                            onChange={(event, newValue) => {
                              setSelectedCountry(newValue);
                            }}
                            renderInput={(params) => (
                              <TextField {...params} label="Country" />
                            )}
                          />
                        </FormControl>
                      </Grid>
                      <Grid
                        xl={1}
                        item
                        lg={2}
                        md={1}
                        sm={2}
                        xs={3}
                        className={"p-2"}
                      >
                        <Card
                          className={"shadow-none h-100 rounded-0"}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid rgba(0, 0, 0, 0.23)",
                            color: "rgba(0, 0, 0, 0.75)",
                          }}
                        >
                          <Typography>{selectedCountry?.value}</Typography>
                        </Card>
                      </Grid>
                      <Grid
                        item
                        xl={6}
                        lg={5}
                        md={6}
                        sm={5}
                        xs={9}
                        className={"p-2"}
                      >
                        <FormControl sx={{ width: "100%" }}>
                          <OutlinedInput
                            value={formData.phoneNumber}
                            placeholder="Phone Number"
                            className={
                              Array.isArray(errorMessage?.phoneNumber)
                                ? "invalid-input"
                                : ""
                            }
                            name="phoneNumber"
                            onChange={handleChange}
                          />
                          <div className="text-danger">
                            {Array.isArray(errorMessage?.phoneNumber) &&
                              errorMessage?.phoneNumber.map((error, index) => (
                                <p key={index} className="error-text">
                                  {error}
                                </p>
                              ))}
                          </div>
                        </FormControl>
                        <div className="text-danger">
                          {Array.isArray(errorMessage?.info) &&
                            errorMessage?.info.map((error, index) => (
                              <p key={index} className="error-text">
                                {error}
                              </p>
                            ))}
                        </div>
                      </Grid>
                      <Grid
                        item
                        xl={5}
                        lg={6}
                        md={6}
                        sm={6}
                        xs={12}
                        className={"p-2"}
                        mr={"auto"}
                      >
                        <Box
                          sx={{
                            width: "100%",
                          }}
                        >
                          <div className={"recaptcha"}>
                            <ReCAPTCHA
                              sitekey={
                                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                              }
                              onChange={(value) => {
                                setCaptchaValue(value);
                              }}
                              className={
                                Array.isArray(errorMessage?.captchaValue)
                                  ? "invalid-captcha"
                                  : ""
                              }
                            />
                          </div>
                          <div className="text-danger">
                            {Array.isArray(errorMessage?.captchaValue) &&
                              errorMessage?.captchaValue.map((error, index) => (
                                <p key={index} className="error-text">
                                  {error}
                                </p>
                              ))}
                          </div>
                        </Box>
                      </Grid>
                      <Grid item xs={12} className={"p-2"} ml={"auto"}>
                        <Button
                          className={"btnVisit w-100 h-100"}
                          sx={{ fontSize: "1rem !important" }}
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
                          Register
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </form>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
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

export default Register;
