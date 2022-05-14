import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  Grid,
  TextField,
  TextareaAutosize,
  Box,
  Modal,
  Button,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

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

import { getUserDetails } from "../../../redux/slices/userSlice";

function Form(props) {
  const [cookies, setCookie] = useCookies(["user"]);
  const user = useSelector((state) => state.user?.user, shallowEqual);

  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const dispatch = useDispatch();
  const [captchaValue, setCaptchaValue] = useState("");
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);
  const { email: userEmail, _id: userId } = user;
  useEffect(() => {
    if (userId) {
      setEmail(userEmail);
    }
  }, [userEmail, userId]);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!captchaValue) {
      setErrorMessage({ captchaValue: ["please select captcha."] });
      return;
    }

    setLoading(true);

    if (!userId) {
      axios
        .post(process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/get-code", {
          title: title,
          email: email,
          captchaValue: captchaValue,
          content: content,
          star: rating,
          name: name,
          onModel: "blog",
          modelId: props?.blog?._id,
        })
        .then(async (res) => {
          setLoading(false);
          if (res.data.status === "success") {
            const { value: code } = await Swal.fire({
              color: "#8a56b5",
              backdrop: `
							rgba(0,0,123,0.4)
							left top
							no-repeat
						`,
              title: "Please enter the code we have sent to you by email",
              input: "text",
              inputAttributes: {
                autocapitalize: "off",
                width: "100px",
              },
              confirmButtonText: "Confirm",
              showLoaderOnConfirm: true,
            });

            recaptchaRef.current.reset();

            if (code) {
              if (code !== res.data.code) {
                Swal.fire({
                  title: "Code is not correct",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Send Again",
                  color: "#8a56b5",
                  backdrop: `
									rgba(0,0,123,0.4)
									left top
									no-repeat
								`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    handleSubmit();
                  }
                });
              } else {
                setLoading(true);

                await axios
                  .post(
                    process.env.NEXT_PUBLIC_SERVER_URL +
                      "/api/site/store-review",
                    {
                      title: title,
                      email: email,
                      captchaValue: captchaValue,
                      content: content,
                      star: rating,
                      name: name,
                      onModel: "blog",
                      modelId: props?.blog?._id,
                      code: code,
                    }
                  )
                  .then((result) => {
                    setLoading(false);
                    formRef.current.style.display = "none";

                    if (!userId) {
                      setCookie(
                        "user",
                        JSON.stringify({
                          token: result.data.token,
                          email: email,
                        }),
                        {
                          path: "/",
                          maxAge: 31560000,
                          sameSite: true,
                        }
                      );
                      getUserDetails(dispatch, cookies);
                    }

                    if (result.data.status == "success") {
                      Swal.fire(
                        "",
                        "Thank you! Your review has been received and is being reviewed to be published.",
                        "success"
                      );

                      setRating(0);
                      setTitle("");
                      setName("");
                      setContent("");
                      setEmail("");
                      setErrorMessage([]);
                    }
                  });
              }
            }
          }
        })
        .catch((err) => {
          setLoading(false);
          if (err.response?.data?.error) {
            console.log(err.response?.data?.error);
            setErrorMessage(err.response?.data?.error);
          }
        });
    } else {
      let config = {
        headers: {
          Authorization: `Bearer ${cookies["user"]?.token}`,
        },
      };

      await axios
        .post(
          process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/store-review",
          {
            title: title,
            email: email,
            content: content,
            captchaValue: captchaValue,
            star: rating,
            name: name,
            onModel: "blog",
            modelId: props?.blog?._id,
            code: "",
          },
          config
        )
        .then((result) => {
          setLoading(false);
          formRef.current.style.display = "none";

          if (!userId) {
            setCookie(
              "user",
              JSON.stringify({ token: result.data.token, email: email }),
              {
                path: "/",
                maxAge: 31560000,
                sameSite: true,
              }
            );
            getUserDetails(dispatch, cookies);
          }

          if (result.data.status == "success") {
            Swal.fire(
              "",
              "Thank you! Your review has been received and is being reviewed to be published.",
              "success"
            );

            setRating(0);
            setTitle("");
            setName("");
            setContent("");
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
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
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
        <Grid sm={12} xs={12} className={"p-2"}>
          <Typography className={"fw-bolder textSecondary"} fontSize={"1.5rem"}>
            LEAVE A REVIEW
          </Typography>
        </Grid>

        <Grid sm={12} xs={12} className={"p-2"}>
          <TextField
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            id="outlined-basic"
            label="Review Title"
            variant="outlined"
            className={"w-100 rounded-0"}
          />
          <div className="text-danger">
            {Array.isArray(errorMessage?.title) &&
              errorMessage?.title.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
          </div>
        </Grid>

        <Grid sm={6} xs={12} className={"p-2"}>
          <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            id="outlined-basic"
            label="Name *"
            variant="outlined"
            className={"w-100 rounded-0"}
          />

          <div className="text-danger">
            {Array.isArray(errorMessage?.name) &&
              errorMessage?.name.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
          </div>
        </Grid>
        <Grid sm={6} xs={12} className={"p-2"}>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            id="outlined-basic"
            label="Email *"
            variant="outlined"
            className={"w-100 rounded-0"}
          />

          <div className="text-danger">
            {Array.isArray(errorMessage?.email) &&
              errorMessage?.email.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
          </div>
        </Grid>

        <Grid sm={12} xs={12} className={"p-2"}>
          <TextareaAutosize
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
            aria-label="minimum height"
            minRows={5}
            placeholder="Review"
            style={{ width: "100%", padding: "16.5px 14px" }}
          />

          <div className="text-danger">
            {Array.isArray(errorMessage?.content) &&
              errorMessage?.content.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
          </div>
        </Grid>

        <Box
          sx={{
            "& > :not(style)": { my: 1, width: "100%" },
          }}
          className={"p-2"}
        >
          <ReCAPTCHA
            ref={recaptchaRef}
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

        <Grid sm={12} xs={12} className={"p-2"}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disableElevation
            className={"btnLeave"}
          >
            SUBMIT REVIEW
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;
