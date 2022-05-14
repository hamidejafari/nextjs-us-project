import React from "react";
import {
  Card,
  Grid,
  Avatar,
  Typography,
  Rating,
  Stack,
  Button,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import businessAxiosInstance from "../../utiles/businessAxiosInstance";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

function Reviews(props) {
  const [cookies] = useCookies(["business"]);

  const removeReview = async (reviewId) => {
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        props.setLoading(true);
        businessAxiosInstance(cookies)
          .delete("/site/business/reviews/" + reviewId)
          .then((res) => {
            props.setLoading(false);
            props.resetReviews();
            Swal.fire("", "Successfully deleted.", "success");
          })
          .catch((err) => {
            props.setLoading(false);
            console.log(err);
          });
      }
    });
  };

  return (
    <Grid item xs={12} className={"p-2"}>
      <Card className={"border rounded-0"}>
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
          <Grid item xs={12} className={"py-0"}>
            <Card className={"p-2 reviewCard shadow-none rounded-0"}>
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
                <Grid item xl={1} className={"p-1"}>
                  <Avatar alt="Remy Sharp" src={props.avatar} />
                </Grid>
                <Grid
                  item
                  xl={1}
                  className={"p-1"}
                  sx={{ display: { md: "none", xs: "block" } }}
                  alignSelf={"end"}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    className={"fw-bolder name"}
                    fontSize={17.5}
                  >
                    {props.name}
                    <span className={"timecomment"}>
                      {new Date(props.date).toLocaleString()}
                    </span>
                  </Typography>
                  <Stack spacing={1} className={"my-1"}>
                    <Rating
                      name="half-rating-read"
                      size="small"
                      defaultValue={props.rate}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                </Grid>
                <Grid item xl={11} className={"py-1 px-2"}>
                  {props?.status === "deletedByBusiness" && (
                    <Typography
                      variant="body1"
                      color="error"
                      sx={{ opacity: 0.7 }}
                    >
                      Review removed
                    </Typography>
                  )}

                  <Typography
                    variant="h6"
                    component="div"
                    className={"fw-bolder name"}
                    fontSize={17.5}
                    sx={{
                      display: { md: "flex", xs: "none" },
                      alignItems: "center",
                    }}
                  >
                    {props.name}
                    <Typography
                      className={"timecomment"}
                      fontSize={14}
                      sx={{ ml: 1 }}
                      color="#777"
                    >
                      {new Date(props.date).toLocaleString()}
                    </Typography>
                  </Typography>
                  <Stack
                    spacing={1}
                    className={"my-1"}
                    sx={{ display: { md: "block", xs: "none" } }}
                  >
                    <Rating
                      name="half-rating-read"
                      size="small"
                      defaultValue={props.rate}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                  <Typography
                    variant="h6"
                    component="div"
                    color={"gray"}
                    className={"comment"}
                    fontWeight={"lighter"}
                    fontSize={15}
                  >
                    {props.review}
                  </Typography>
                </Grid>

                {props?.status !== "deletedByBusiness" && (
                  <Grid
                    item
                    xl={12}
                    className={"p-2"}
                    sx={{ textAlign: "right" }}
                  >
                    <Button
                      sx={{
                        color: "#999",
                        border: "1px solid #999",
                        borderRadius: 0,
                        marginLeft: "auto",
                      }}
                      onClick={() => removeReview(props.id)}
                    >
                      <DeleteOutlineOutlinedIcon />
                      delete
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Card>
            {props?.status === "deletedByBusiness" && (
              <Card
                sx={{ backgroundColor: "#999" }}
                className={"p-2 rounded-0 shadow-none"}
              >
                <Typography
                  display={"flex"}
                  alignItems={"self-start"}
                  component="div"
                  color="white"
                >
                  <ErrorOutlineOutlinedIcon sx={{ mr: "5px" }} />
                  Consequat deserunt quis pariatur officia irure reprehenderit
                  nisi reprehenderit est irure. Elit eu irure laboris
                  exercitation tempor minim in incididunt.
                </Typography>
              </Card>
            )}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Reviews;
