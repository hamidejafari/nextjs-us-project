import React from "react";
import { Card, Grid, Avatar, Typography, Button } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";

const createTree = (item, handleOpen) => (
  <React.Fragment>
    <div
      style={{
        flexBasis: " 91.666667%",
        flexGrow: 0,
        maxWidth: "91.666667%",
      }}
      className={"py-1 ms-auto"}
    >
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
          <Grid item xl={1} className={"p-1"}>
            <Avatar
              alt="Remy Sharp"
              src={"/images/user.webp"}
              sx={{ width: "100%", height: "4.11rem" }}
            />
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
            >
              {item.name}
              <span className={"timecomment"}>
                {new Date(item.createdAt).toDateString()}
              </span>
            </Typography>
          </Grid>
          <Grid item xl={10} className={"py-1 px-2"}>
            <Typography
              variant="h6"
              component="div"
              className={"fw-bolder name"}
              sx={{ display: { md: "block", xs: "none" } }}
            >
              {item.name}
              <span className={"timecomment"}>
                {new Date(item.createdAt).toDateString()}
              </span>
            </Typography>
            <Typography
              variant="h6"
              component="div"
              color={"gray"}
              className={"comment"}
            >
              <div
                dangerouslySetInnerHTML={{ __html: item.content }}
                className="text-justify"
              ></div>
            </Typography>
          </Grid>
        </Grid>
        <Button
          onClick={() => {
            handleOpen(item._id);
          }}
          className={"btnReply"}
        >
          <ReplyIcon className={"me-1"} />
          reply
        </Button>
      </Card>
    </div>
    {item.children?.map((item) => {
      return (
        <React.Fragment key={item._id}>
          {createTree(item, handleOpen)}
        </React.Fragment>
      );
    })}
  </React.Fragment>
);

const Reply = (props) => {
  const { setOpen, reply, setReplyId } = props;

  const handleOpen = (id) => {
    setOpen(true);
    setReplyId(id);
  };

  return (
    <>
      {reply?.map((item) => {
        return (
          <React.Fragment key={item._id}>
            {createTree(item, handleOpen)}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Reply;
