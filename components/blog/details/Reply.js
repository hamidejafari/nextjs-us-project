import React, { useState } from "react";
import {
  Card,
  Grid,
  Avatar,
  Typography,
  Rating,
  Stack,
  Modal,
  Button,
  Box,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";
import { ReCAPTCHA } from "react-google-recaptcha";

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
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
};

const Reply = ({ reply }) => {
  const [open, setOpen] = useState(false);
  const [captchaValue, setCaptchaValue] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {reply?.map((item, index) => (
        <Grid key={index} xs={11} ml={"auto"} className={"py-1"}>
          <Card className={"p-2 reviewCard"}>
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
              <Grid xl={1} className={"p-1"}>
                <Avatar
                  alt="Remy Sharp"
                  src={item.repavatar}
                  sx={{ width: "100%", height: "4.11rem" }}
                />
              </Grid>
              <Grid
                xl={1}
                className={"p-1"}
                sx={{ display: { md: "none", xs: "block" } }}
                alignSelf={"end"}
              >
                <Typography
                  variant="h6"
                  component="div"
                  className={"fw-bolder name"}
                >
                  {item.repname}
                  <span className={"timecomment"}>{item.repdate}</span>
                </Typography>
                <Stack spacing={1} className={"my-1"}>
                  <Rating
                    name="half-rating-read"
                    size="small"
                    defaultValue={item.reprate}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </Grid>
              <Grid xl={11} className={"py-1 px-2"}>
                <Typography
                  variant="h6"
                  component="div"
                  className={"fw-bolder name"}
                  sx={{ display: { md: "block", xs: "none" } }}
                >
                  {item.repname}
                  <span className={"timecomment"}>{item.repdate}</span>
                </Typography>
                <Stack
                  spacing={1}
                  className={"my-1"}
                  sx={{ display: { md: "block", xs: "none" } }}
                >
                  <Rating
                    name="half-rating-read"
                    size="small"
                    defaultValue={item.reprate}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
                <Typography
                  variant="h6"
                  component="div"
                  color={"gray"}
                  className={"comment"}
                >
                  {item.repreview}
                </Typography>
              </Grid>
            </Grid>
            <Button onClick={handleOpen} className={"btnReply"}>
              <ReplyIcon className={"me-1"} />
              reply
            </Button>
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Grid
                  xs={12}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  <Button onClick={handleClose} color="error">
                    <CloseIcon />
                  </Button>
                </Grid>
                <Grid xs={12} className={""}>
                  <form>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{
                        xs: 1,
                        sm: 2,
                        md: 3,
                      }}
                      className={"w-100 m-0 reviewCard"}
                    >
                      <Grid sm={12} xs={12} className={"p-2"}>
                        <Typography
                          variant="h5"
                          component="p"
                          className={"fw-bolder textSecondary"}
                        >
                          Reply
                        </Typography>
                      </Grid>
                      <Grid sm={6} xs={12} className={"p-2"}>
                        <TextField
                          id="outlined-basic"
                          label="Name *"
                          variant="outlined"
                          className={"w-100 rounded-0"}
                        />
                      </Grid>
                      <Grid sm={6} xs={12} className={"p-2"}>
                        <TextField
                          id="outlined-basic"
                          label="Email *"
                          variant="outlined"
                          className={"w-100 rounded-0"}
                        />
                      </Grid>
                      <Grid sm={12} xs={12} className={"p-2"}>
                        <TextareaAutosize
                          aria-label="minimum height"
                          minRows={5}
                          placeholder="Review"
                          style={{ width: "100%", padding: "16.5px 14px" }}
                        />
                      </Grid>

                      <Box
                        sx={{
                          "& > :not(style)": { my: 1, width: "100%" },
                        }}
                        className={"p-2"}
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

                      <Grid sm={12} xs={12} className={"p-2"}>
                        <Button
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
                </Grid>
              </Box>
            </Modal>
          </Card>
        </Grid>
      ))}
    </>
  );
};
export default Reply;
