import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import CheckBoxOutlineBlankTwoToneIcon from "@mui/icons-material/CheckBoxOutlineBlankTwoTone";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function InteractiveList({ steps }) {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} className={"w-100 m-0"}>
        <Grid item xs>
          <Demo>
            <List dense={dense} className={"p-0 itmbox"}>
              <ListItem button className={"p-2 itm completion"}>
                <ListItemText
                  primary="Claim your profile"
                  secondary="Take control of your brandsreviews profile. This is the first and most important step!"
                />
                <CheckIcon className={"icn"} />
              </ListItem>

              <Link href="/business/panel/brand">
                <a style={{ color: "#000" }}>
                  <ListItem button className={ steps < 2 ? "p-2 itm" : "p-2 itm completion" }>
                    <ListItemText
                      primary="Add a logo and company details"
                      secondary="This will help your customers find you."
                    />

                    {steps < 2 ? (
                      <>
                        <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <FiberManualRecordIcon className={"icn"} />
                      </>
                    ) : (
                      <CheckIcon className={"icn"} />
                    )}

                  </ListItem>
                </a>
              </Link>

              <Link href="/business/panel/categories">
                <a style={{ color: "#000" }}>
				<ListItem button className={ steps < 3 ? "p-2 itm" : "p-2 itm completion" }>
                    <ListItemText
                      primary="Select categories for your business"
                      secondary="Add a brandsreviews widget on your website and increase traffic to your page."
                    />
                    {steps < 3 ? (
                      <>
                        <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <FiberManualRecordIcon className={"icn"} />
                      </>
                    ) : (
                      <CheckIcon className={"icn"} />
                    )}
                  </ListItem>
                </a>
              </Link>

              <Link href="/business/panel/product/create">
                <a style={{ color: "#000" }}>
				<ListItem button className={ steps < 4 ? "p-2 itm" : "p-2 itm completion" }>
                    <ListItemText
                      primary="Submit your products and promote them"
                      secondary="See what your customers will receive in their inbox."
                    />
                    {steps < 4 ? (
                      <>
                        <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <FiberManualRecordIcon className={"icn"} />
                      </>
                    ) : (
                      <CheckIcon className={"icn"} />
                    )}
                  </ListItem>
                </a>
              </Link>


			  <Link href="/business/panel/reviews">
                <a style={{ color: "#000" }}>
				<ListItem button className={ steps < 5 ? "p-2 itm" : "p-2 itm completion" }>
                    <ListItemText
                      primary="Get reviews and manage them"
                      secondary="See what your customers will receive in their inbox."
                    />
                    {steps < 5 ? (
                      <>
                        <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <FiberManualRecordIcon className={"icn"} />
                      </>
                    ) : (
                      <CheckIcon className={"icn"} />
                    )}
                  </ListItem>
                </a>
              </Link>


            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InteractiveList;
