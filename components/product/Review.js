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
import ReplyIcon from "@mui/icons-material/Reply";

import Reply from "./Reply";

function Review(props) {
  const { open, setOpen, setReplyId, hasReview } = props;
  const handleOpen = (id) => {
    setOpen(true);
    setReplyId(id);
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
      className={"w-100 m-0"}
      style={props.show == true ? {} : { display: "none" }}
    >
      <Grid item xs={12} className={"py-1"}>
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
            <Grid
              item
              md={1}
              sm={1}
              xs={2}
              alignSelf={"center"}
              className={"p-1"}
            >
              <Avatar
                alt="Remy Sharp"
                src={props.avatar}
                sx={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid
              item
              md={1}
              sm={4}
              xs={10}
              alignSelf={"center"}
              className={"p-1"}
              sx={{ display: { md: "none", xs: "block" } }}
            >
              <Typography
                variant="h6"
                component="div"
                className={"fw-bolder name"}
              >
                {props.name}
                <span className={"timecomment"}>
                  {new Date(props.date).toDateString()}
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
            <Grid item md={10} sm={12} className={"py-1 px-2"}>
              <Typography
                variant="h6"
                component="div"
                className={"fw-bolder name"}
                sx={{ display: { md: "block", xs: "none" } }}
              >
                {props.name}
                <span className={"timecomment"}>
                  {new Date(props.date).toDateString()}
                </span>
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
              >
                <div
                  dangerouslySetInnerHTML={{ __html: props.review }}
                  className="text-justify"
                ></div>
              </Typography>
            </Grid>
          </Grid>
          {!hasReview && (
            <Button
              onClick={() => {
                handleOpen(props._id);
              }}
              className={"btnReply"}
            >
              <ReplyIcon className={"me-1"} />
              reply
            </Button>
          )}
        </Card>
      </Grid>
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
        <Reply
          open={open}
          setOpen={setOpen}
          setReplyId={setReplyId}
          reply={props.reply || []}
        />
      </Grid>
    </Grid>
  );
}

export default Review;
