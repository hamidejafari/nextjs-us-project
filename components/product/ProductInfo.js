import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  Grid,
  Chip,
  Avatar,
  Typography,
  Rating,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemText,
  Link,
  Button,
  Hidden,
  TextField,
  TextareaAutosize,
  Box,
  Modal,
} from "@mui/material";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { ReCAPTCHA } from "react-google-recaptcha";

// component
import Faq from "./Faq";
import Pross from "./Pross";
import Conss from "./Conss";
import Review from "./Review";
import Form from "./Form";
import Brands from "./Brands";
import ProImg from "./ProImg";
import Tags from "./Tags";

// styles
import sxStyles from "../../styles/style";
import { getUserDetails } from "../../redux/slices/userSlice";

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
  boxShadow: 10,
  p: 1,
};

function ProductInfo(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [replyId, setReplyId] = useState(null);
  const [loading, setLoading] = useState(null);
  const [errorMessage, setErrorMessage] = useState([]);
  const [cookies, setCookie] = useCookies(["user"]);
  const handleClose = () => {
    setOpen(false);
    if (!userId) {
      setName("");
      setEmail("");
    }
    setContent("");
    setReplyId(null);
    setErrorMessage([]);
  };
  const dispatch = useDispatch();
  const recaptchaRef = useRef(null);

  const { product, hasReview } = props;

  const [showReviewsCount, setShowReviewsCount] = useState(5);

  const user = useSelector((state) => state.user?.user, shallowEqual);

  const { email: userEmail, _id: userId, name: userName } = user;
  useEffect(() => {
    if (userId) {
      setEmail(userEmail);
      setName(userName);
    }
  }, [userEmail, userId, userName]);

  const handleMore = () => {
    setShowReviewsCount(showReviewsCount + 5);
  };

  const replySubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!userId) {
      axios
        .post(process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/reply/get-code", {
          email,
          content,
          captchaValue,
          name,
        })
        .then(async (res) => {
          setLoading(false);
          recaptchaRef.current.reset();
          if (res.data.status === "success") {
            handleClose(false);
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
                    replySubmitHandler();
                  }
                });
              } else {
                setLoading(true);

                await axios
                  .post(
                    process.env.NEXT_PUBLIC_SERVER_URL +
                      "/api/site/store-reply",
                    {
                      email,
                      content,
                      name,
                      captchaValue,
                      code,
                      replyTo: replyId,
                    }
                  )
                  .then((result) => {
                    setLoading(false);

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
          console.log(err.response);
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

      axios
        .post(
          process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/store-reply",
          {
            email: email,
            content: content,
            name: name,
            captchaValue: captchaValue,
            replyTo: replyId,
            code: "",
          },
          config
        )
        .then((result) => {
          setLoading(false);

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
            handleClose(false);
            setErrorMessage([]);
          }
        });
    }
  };

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{
        xs: 1,
        sm: 2,
        md: 3,
      }}
      className={"w-100 m-0 product-info"}
    >
      <Hidden mdUp={true}>
        <Grid item xs={12} className={"px-2"}>
          <ProImg product={product} />
        </Grid>
      </Hidden>
      <Grid item xs={12} className={"p-2"}>
        <Card className={"namecard"}>
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
            <Grid item xs={12} className={"px-2"} sx={sxStyles["noneDesktop"]}>
              <Grid item xs={12} className={"py-0"}>
                <Typography
                  variant="body1"
                  fontSize={20}
                  className={"fw-bolder"}
                >
                  {product.title?.replace("$year$", new Date().getFullYear())}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xl={2} lg={3} md={4} xs={6} className={"p-2"}>
              <Link href={"/brand/" + product.brandId?.slug}>
                <a>
                  <div className={"figure"}>
                    <div className={"figure-inn"}>
                      <img
                        src={
                          product.brandId?.image?.fileName
                            ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                              "/files/images/big/" +
                              product.brandId?.image?.fileName
                            : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                              "/files/images/placeholder/brand-logo.webp"
                        }
                        alt={product.brandId?.image?.alt}
                      />
                    </div>
                  </div>
                </a>
              </Link>
            </Grid>
            <Grid item xs={6} className={"p-2"} sx={sxStyles["noneDesktop"]}>
              <Grid item xs={12} className={"py-2"}>
                {product.brandId?.flag?.code && (
                  <Chip
                    avatar={
                      <Avatar
                        alt="Natacha"
                        src={
                          "/flags/" +
                          product.brandId?.flag?.code.toLowerCase() +
                          ".svg"
                        }
                        className={"flag"}
                      />
                    }
                    label={product.brandId?.flag?.code}
                    variant="outlined"
                    className={"chip"}
                  />
                )}
              </Grid>
              <Grid
                item
                xs={6}
                className={"py-1"}
                alignSelf={"center"}
                textAlign={"left"}
              >
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={product.star}
                    readOnly
                    size="large"
                  />
                </Stack>
              </Grid>
              <Grid
                item
                md={3}
                xs={12}
                className={"py-1"}
                alignSelf={"center"}
                textAlign={"left"}
              >
                <Typography
                  variant="body1"
                  component="div"
                  className={"fw-bolder"}
                  color={"gray"}
                  fontSize={14}
                >
                  <span className={"fw-bolder dark"}>
                    {props?.reviewsCount}
                  </span>{" "}
                  reviews
                </Typography>
              </Grid>
              <Grid
                item
                md={3}
                xs={12}
                className={"py-1"}
                alignSelf={"center"}
                textAlign={"left"}
              >
                <Typography
                  variant="body1"
                  component="div"
                  className={"fw-bolder"}
                  color={"gray"}
                  fontSize={14}
                >
                  overall rating :{" "}
                  <span className={"fw-bolder dark"}>{product.star * 2}</span>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xl={10}
              lg={9}
              md={8}
              xs={12}
              className={"p-2"}
              sx={sxStyles["noneMobile"]}
            >
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
                <Grid item xs={12} className={"py-2"}>
                  {product.brandId?.flag?.code && (
                    <Chip
                      avatar={
                        <Avatar
                          alt="Natacha"
                          src={
                            "/flags/" +
                            product.brandId?.flag?.code.toLowerCase() +
                            ".svg"
                          }
                          className={"flag"}
                        />
                      }
                      label={product.brandId?.flag?.code}
                      variant="outlined"
                      className={"chip"}
                    />
                  )}
                </Grid>
                <Grid item xs={12} className={"py-2"}>
                  <Typography
                    variant="body1"
                    fontSize={25}
                    className={"fw-bolder"}
                  >
                    {product.title?.replace("$year$", new Date().getFullYear())}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  className={"p-0"}
                  alignSelf={"center"}
                  textAlign={"left"}
                >
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={product.star}
                      readOnly
                      size="large"
                    />
                  </Stack>
                </Grid>
                <Grid
                  item
                  md={3}
                  className={"p-0"}
                  alignSelf={"center"}
                  textAlign={"right"}
                >
                  <a href="#reviewsBox">
                    <Typography
                      variant="body1"
                      component="div"
                      className={"fw-bolder"}
                      color={"gray"}
                      fontSize={14}
                    >
                      <span className={"fw-bolder dark"}>
                        {props?.reviewsCount}
                      </span>{" "}
                      reviews
                    </Typography>
                  </a>
                </Grid>
                <Grid
                  item
                  md={3}
                  className={"p-0"}
                  alignSelf={"center"}
                  textAlign={"right"}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    className={"fw-bolder"}
                    color={"gray"}
                    fontSize={14}
                  >
                    overall rating :{" "}
                    <span className={"fw-bolder dark"}>{product.star * 2}</span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12} className={"px-2 py-3 disPro"}>
        <Typography fontSize={"1.5rem"} className={"fw-bolder textSecondary"}>
          DESCRIPTION
        </Typography>
        <Typography variant="body1" component="div" className={"py-2"}>
          <div
            dangerouslySetInnerHTML={{
              __html: product.descriptionShort?.replace(
                "$year$",
                new Date().getFullYear()
              ),
            }}
          ></div>
        </Typography>
      </Grid>
      {product.tagIds?.length > 0 && (
        <Grid xs={12} className={"px-2"}>
          <Typography fontSize={"1.5rem"} className={"fw-bolder textSecondary"}>
            TAGS
          </Typography>
          <List
            sx={{
              display: "flex",
            }}
          >
            {product.tagIds?.map((tag) => (
              <Tags key={tag._id} url={"tag/" + tag.slug} title={tag.title} />
            ))}
          </List>
          <Divider className={"my-3"} />
        </Grid>
      )}
      {product?.faq?.length > 0 && (
        <Grid item xs={12} className={"px-2 py-3"}>
          <Typography
            fontSize={"1.5rem"}
            className={"fw-bolder textSecondary mb-3"}
          >
            FAQ
          </Typography>
          {product.faq?.map((faqcontent, index) => (
            <Faq
              key={index}
              id={"panelbh-header" + (index + 1)}
              expanded={"panel" + (index + 1)}
              ariacontrols={"panelbh-content" + (index + 1)}
              question={faqcontent.question}
              response={faqcontent.answer}
            />
          ))}
        </Grid>
      )}

      {(product?.cons?.length > 0 || product?.pros?.length > 0) && (
        <Grid item xs={12} className={"px-0 py-3"}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{
              xs: 1,
              sm: 2,
              md: 3,
            }}
            className={"w-100 m-0 best"}
          >
            <Grid item xs={12} className={"p-2"}>
              <Typography
                variant="h5"
                component="p"
                className={"fw-bolder textSecondary"}
              >
                PROS & CONS
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12} className={"p-2"}>
              <Card className={"p-2 prosconsCard"}>
                <List className={"p-0"}>
                  <ListItem className={"px-0 pt-0"}>
                    <ListItemText className={"p-1"}>
                      <Typography
                        variant="h6"
                        component="div"
                        className={" d-flex align-items-center fw-bolder pros "}
                      >
                        PROS
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  {product.pros?.map((proscontent, index) => (
                    <Pross key={index} title={proscontent} />
                  ))}
                </List>
              </Card>
            </Grid>
            <Grid item sm={6} xs={12} className={"p-2"}>
              <Card className={"p-2 prosconsCard"}>
                <List className={"p-0"}>
                  <ListItem className={"px-0 pt-0"}>
                    <ListItemText className={"p-1"}>
                      <Typography
                        variant="h6"
                        component="div"
                        className={" d-flex align-items-center fw-bolder cons "}
                      >
                        CONS
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  {product.cons?.map((conscontent, index) => (
                    <Conss key={index} title={conscontent} />
                  ))}
                </List>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      )}

      <Grid item xs={12} className={"px-2 py-3"} id="reviewsBox">
        {props.reviews?.length > 0 && (
          <React.Fragment>
            {props?.reviewsCount > 5 && !hasReview && (
              <Link
                href="#addComment"
                variant="contained"
                size="large"
                className={"btnLeave"}
              >
                LEAVE A REVIEW
              </Link>
            )}
            <Typography
              fontSize={"1.5rem"}
              className={"fw-bolder textSecondary my-4"}
            >
              REVIEWS <span className={"number"}>({props?.reviewsCount})</span>
            </Typography>

            <div>
              {props.reviews?.map((revcontent, index) => (
                <Review
                  show={index < showReviewsCount ? true : false}
                  key={index}
                  avatar={"/images/user.webp"}
                  name={revcontent.name}
                  date={revcontent.createdAt}
                  rate={revcontent.star}
                  _id={revcontent._id}
                  review={revcontent.content}
                  reply={revcontent.children}
                  open={open}
                  setOpen={setOpen}
                  handleClose={handleClose}
                  setReplyId={setReplyId}
                  hasReview={hasReview}
                />
              ))}
            </div>

            {showReviewsCount < props?.reviews?.length && (
              <Grid item xs={12} textAlign={"center"} py={4}>
                <Button
                  onClick={() => {
                    handleMore();
                  }}
                  variant="outlined"
                  size="small"
                  color="inherit"
                  className={"rounded-0"}
                >
                  more...
                </Button>
              </Grid>
            )}
          </React.Fragment>
        )}
      </Grid>
      <Grid item xs={12} className={"px-0 py-1"} id="addComment">
        <Form hasReview={hasReview} product={product} />
        <Divider className={"my-3"} />
      </Grid>
      <Grid item xs={12} className={"disPro px-2 py-3"}>
        {product.description?.map((desItem, index) => (
          <div key={index} id={desItem.header + index}>
            <Typography
              variant="h5"
              component={desItem.headerType}
              className={"fw-bolder textSecondary"}
            >
              {desItem.header?.replace("$year$", new Date().getFullYear())}
            </Typography>
            <Typography variant="body1" component="div" className={"py-2"}>
              <div
                dangerouslySetInnerHTML={{
                  __html: desItem.desc?.replace(
                    "$year$",
                    new Date().getFullYear()
                  ),
                }}
              ></div>
            </Typography>
            {desItem?.header?.includes("Before and After") &&
              product.beforeAfters.length > 0 && (
                <div style={{ marginBottom: "2%" }}>
                  {product.beforeAfters?.map((image, indexImg) => (
                    <div key={indexImg} className={"figure"}>
                      <div className={"figure-inn"}>
                        <img
                          src={
                            image?.fileName
                              ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                "/files/images/main/" +
                                image?.fileName
                              : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                "/files/images/placeholder/brand-logo.webp"
                          }
                          alt={image?.alt}
                          className={"border"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}

        <Divider className={"my-3"} />
      </Grid>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid
            item
            xs={12}
            className={"d-flex align-items-center justify-content-end"}
          >
            <Button onClick={handleClose} color="error">
              <CloseIcon />
            </Button>
          </Grid>
          <Grid item xs={12} className={""}>
            <form onSubmit={replySubmitHandler}>
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
                <Grid item sm={12} xs={12} className={"p-2"}>
                  <Typography
                    variant="h5"
                    component="p"
                    className={"fw-bolder textSecondary"}
                  >
                    Reply
                  </Typography>
                </Grid>
                {userId ? (
                  <>
                    <Grid sm={6} xs={12} className={"p-2"}>
                      <TextField
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        value={name}
                        disabled={userName}
                        id="outlined-basic"
                        label="Name *"
                        variant="outlined"
                        className={"w-100 rounded-0"}
                      />

                      <div className="text-danger">
                        {Array.isArray(errorMessage?.name) &&
                          errorMessage?.name.map((error, index) => (
                            <p className="text-danger" key={index}>
                              {error}
                            </p>
                          ))}
                      </div>
                    </Grid>
                    <Grid item sm={6} xs={12} className={"p-2"}>
                      <TextField
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        value={email}
                        id="outlined-basic"
                        disabled
                        label="Email *"
                        variant="outlined"
                        className={"w-100 rounded-0"}
                      />

                      <div className="text-danger">
                        {Array.isArray(errorMessage?.email) &&
                          errorMessage?.email.map((error, index) => (
                            <p className="text-danger" key={index}>
                              {error}
                            </p>
                          ))}
                      </div>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item sm={6} xs={12} className={"p-2"}>
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
                            <p className="text-danger" key={index}>
                              {error}
                            </p>
                          ))}
                      </div>
                    </Grid>

                    <Grid item sm={6} xs={12} className={"p-2"}>
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
                            <p className="text-danger" key={index}>
                              {error}
                            </p>
                          ))}
                      </div>
                    </Grid>
                  </>
                )}

                <Grid item sm={12} xs={12} className={"p-2"}>
                  <TextareaAutosize
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
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

                <Grid item sm={12} xs={12} className={"p-2"}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
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

      {props?.levelTwoCategory?.brands?.length > 0 && (
        <Grid item xs={12} className={"px-2 py-3"}>
          <Typography
            variant="h5"
            component="p"
            className={"fw-bolder mb-2 textSecondary"}
          >
            Top{" "}
            {props?.levelTwoCategory?.title?.replace(
              "$year$",
              new Date().getFullYear()
            )}{" "}
            Brands
          </Typography>
          <List className={"topbottom"}>
            {props?.levelTwoCategory?.brands?.map(
              (content, index) =>
                content?._id?.title && (
                  <Brands
                    key={index}
                    title={content._id.title}
                    standing={content.standing}
                    url={content._id.slug}
                  />
                )
            )}
          </List>
        </Grid>
      )}
    </Grid>
  );
}

export default ProductInfo;
