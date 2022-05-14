import React, { useState } from "react";
import {
  Container,
  Grid,
  Breadcrumbs,
  Typography,
  TextField,
  Box,
  Modal,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Fab,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailIcon from "@mui/icons-material/Email";
import ReCAPTCHA from "react-google-recaptcha";

import PinterestIcon from "@mui/icons-material/Pinterest";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";

// styles

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
  // background:'white'
};

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Contact(props) {
  const router = useRouter();
  const setting = props.setting;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [messageText, setMessageText] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [title, setTitle] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setErrorMessage({ captchaValue: ["please select captcha."] });
      return;
    }

    setLoading(true);
    await axios
      .post(process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/contact", {
        firstName: firstName,
        lastName: lastName,
        messageText: messageText,
        email: email,
        phoneNumber: phoneNumber,
        title: title,
        captchaValue: captchaValue,
      })
      .then((result) => {
        setLoading(false);

        if (result.data.status == "success") {
          Swal.fire({
            title: "submited successfuly",
            color: "#8a56b5",
            backdrop: `
						rgba(0,0,123,0.4)
						left top
						no-repeat
					`,
          });
          setFirstName("");
          setLastName("");
          setMessageText("");
          setEmail("");
          setPhoneNumber("");
          setTitle("");
          setErrorMessage([]);
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response?.data?.error) {
          console.log(err.response?.data?.error);
          setErrorMessage(err.response?.data?.error);
        }
      });
  };

  return (
    <>
      <Container>
        <Modal
          keepMounted
          open={loading}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CircularProgress
              className="me-3"
              style={{ width: "20%", height: "20%", marginLeft: "33%" }}
              color="secondary"
            />
          </Box>
        </Modal>

        <Grid container spacing={1} className={"w-100 m-0"}>
          <Grid xs={12} className={"px-2 pb-3 pt-4"}>
            <div role="presentation" onClick={handleClick}>
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
                    <HomeOutlinedIcon
                      className={"me-2 mb-1"}
                      fontSize="small"
                    />
                    Home
                  </a>
                </Link>
                <Typography color="text.primary" fontSize={15}>
                  Contact Us
                </Typography>
              </Breadcrumbs>
            </div>
          </Grid>
          <Grid md={6} xs={12} className={"p-2"}>
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  "& > :not(style)": { my: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="First Name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  value={firstName}
                  variant="standard"
                />

                <div className="text-danger">
                  {Array.isArray(errorMessage?.firstName) &&
                    errorMessage?.firstName.map((error, index) => (
                      <p key={index}>{error}</p>
                    ))}
                </div>
              </Box>

              <Box
                sx={{
                  "& > :not(style)": { my: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Last Name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  value={lastName}
                  variant="standard"
                />

                <div className="text-danger">
                  {Array.isArray(errorMessage?.lastName) &&
                    errorMessage?.lastName.map((error, index) => (
                      <p key={index}>{error}</p>
                    ))}
                </div>
              </Box>

              <Box
                sx={{
                  "& > :not(style)": { my: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  variant="standard"
                />

                <div className="text-danger">
                  {Array.isArray(errorMessage?.email) &&
                    errorMessage?.email.map((error, index) => (
                      <p key={index}>{error}</p>
                    ))}
                </div>
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { my: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Phone Number"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  value={phoneNumber}
                  variant="standard"
                />
              </Box>
              <div className="text-danger">
                {Array.isArray(errorMessage?.phoneNumber) &&
                  errorMessage?.phoneNumber.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
              </div>

              <Box
                sx={{
                  "& > :not(style)": { my: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                  variant="standard"
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { my: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  multiline
                  rows={5}
                  maxRows={10}
                  label="Message Text"
                  variant="standard"
                  onChange={(e) => {
                    setMessageText(e.target.value);
                  }}
                  value={messageText}
                />

                <div className="text-danger">
                  {Array.isArray(errorMessage?.messageText) &&
                    errorMessage?.messageText.map((error, index) => (
                      <p key={index}>{error}</p>
                    ))}
                </div>
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { my: 1, width: "100%" },
                }}
              >
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={(value) => {
                    setCaptchaValue(value);
                  }}
                />

                <div className="text-danger">
                  {Array.isArray(errorMessage?.captchaValue) &&
                    errorMessage?.captchaValue.map((error, index) => (
                      <p key={index}>{error}</p>
                    ))}
                </div>
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { my: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  className={"bgSecondary rounded-0"}
                >
                  SEND MESSAGE
                </Button>
              </Box>
            </form>
          </Grid>
          <Grid md={6} xs={12} className={"p-2"}>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                padding: "0px",
                margin: "0px",
                display: "flex",
                alignItems: "baseline",
                justifyContent: "flex-end",
              }}
            >
              {/* <ListItem>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        background: "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <MapIcon className={"textSecondary"} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Address :"
                    secondary={setting.address}
                  />
                </ListItemButton>
              </ListItem> */}
              <ListItem className={"px-0"}>
                <ListItemButton
                  className={"px-0"}
                  onClick={() => router.push("mailto:contact@escaperoom.com")}
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        background: "transparent",
                      }}
                    >
                      <EmailIcon className={"textSecondary"} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email :" secondary={setting.email} />
                </ListItemButton>
              </ListItem>

              <ListItem className={"py-4 px-1 footer"}>
                {setting?.facebook && (
                  <a href={"https://www.facebook.com/" + setting?.facebook}>
                    <Fab
                      className={"mx-1"}
                      color="secondary"
                      size="small"
                      variant="contained"
                    >
                      <img
                        src="/images/social/facebook.webp"
                        alt=""
                        className={"w-50"}
                      />
                    </Fab>
                  </a>
                )}
                {setting?.twitter && (
                  <a href={"https://www.twitter.com/" + setting?.twitter}>
                    <Fab
                      className={"mx-1"}
                      color="secondary"
                      size="small"
                      variant="contained"
                    >
                      <img
                        src="/images/social/twitter.webp"
                        alt=""
                        className={"w-50"}
                      />
                    </Fab>
                  </a>
                )}
                {setting?.linkedin && (
                  <a href={"https://www.linkedin.com/" + setting?.linkedin}>
                    <Fab
                      className={"mx-1"}
                      color="secondary"
                      size="small"
                      variant="contained"
                    >
                      <img
                        src="/images/social/linkedin.webp"
                        alt=""
                        className={"w-50"}
                      />
                    </Fab>
                  </a>
                )}
                {/* <a href={"https://www.linkedin.com/" + setting?.pinterest}>
                  <Fab
                    className={"mx-1"}
                    color="secondary"
                    size="small"
                    variant="contained"
                  >
                    <img src="/images/social/insta.webp" className={"w-50"} />
                  </Fab>
                </a> */}
              </ListItem>
            </List>
            <Grid xs={12} textAlign={"center"} py={4}>
              <img alt="" src="/images/contactus.webp" width="60%" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Contact;
