import React,{useState} from "react";
import {
  Card,
  Grid,
  Avatar,
  Typography,
  Rating,
  Stack,
  Button,
  Modal,
  Box,
  CircularProgress
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import axios from "axios";
import { getUserDetails } from "../../redux/slices/userSlice";
import { USER_DETAILS_RESET } from "../../redux/constants/userConstant";

import Swal from "sweetalert2";

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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
  // background:'white'
};
function Pross(props) {
  const { name, date, avatar, rate, review, status,id } = props;
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const dispatch = useDispatch();

  const handleRemove = async () =>{
    setLoading(true);
    let config = {
      headers: {
        Authorization: `Bearer ${cookies["user"]?.token}`,
      },
    };

    await axios
    .delete(
      process.env.NEXT_PUBLIC_SERVER_URL + "/api/site/reviews/"+id,
      config
    )
    .then(() => {
      dispatch({
        type: USER_DETAILS_RESET,
      });
      getUserDetails(dispatch, cookies);
      setLoading(false);
      Swal.fire(
        "",
        "Review deleted successfully",
        "success"
      );
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      Swal.fire(
        "",
        "Error happened please contact support.",
        "error"
      );
    });
  };

  return (
    
    <Grid xs={12} className={"p-2"}>
          <Modal
        keepMounted
        open={loading}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CircularProgress
            style={{ width: "5%", height: "5%", color: '#fff', m: 'auto' }}
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
        <Grid xs={12} className={"py-0"}>
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
              <Grid xl={1} className={"p-1"}>
                <Avatar
                  alt="Remy Sharp"
                  src={avatar}
                  sx={{ width: "100%", height: "4.54rem" }}
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
                  fontSize={17.5}
                >
                  {name}
                  <span className={"timecomment"}>{date}</span>
                </Typography>
                <Stack spacing={1} className={"my-1"}>
                  <Rating
                    name="half-rating-read"
                    size="small"
                    defaultValue={rate}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </Grid>
              <Grid xl={11} className={"py-1 px-2"}>
                {status == "denied" && (
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
                  {name}
                  <Typography
                    className={"timecomment"}
                    fontSize={14}
                    sx={{ ml: 1 }}
                    color="#777"
                  >
                    {date}
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
                    defaultValue={rate}
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
                  {review}
                </Typography>
              </Grid>

              <Grid xl={12} className={"p-2"} sx={{ textAlign: "right" }}>
                {status !== "denied" && (
                  <Button
                    sx={{
                      color: "#999",
                      border: "1px solid #999",
                      borderRadius: 0,
                      marginLeft: "auto",
                    }}
                    onClick={handleRemove}
                  >
                    <DeleteOutlineOutlinedIcon />
                    delete
                  </Button>
                )}
              </Grid>
            </Grid>
          </Card>
		  {status == "denied" && (

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
                nisi reprehenderit est irure. Elit eu irure laboris exercitation
                tempor minim in incididunt.
              </Typography>
          </Card>
		              )}

        </Grid>
      </Grid>
    </Grid>
  );
}

export default Pross;
