import React, { useState, useEffect } from "react";
import {
  List,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Link from "next/link";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ReviewsIcon from "@mui/icons-material/Reviews";
import CategoryIcon from "@mui/icons-material/Category";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { BUSINESS_DETAILS_RESET } from "../../redux/constants/businessConstant";

function SideList() {
  const business = useSelector(
    (state) => state.business?.business,
    shallowEqual
  );

  const [steps, setSteps] = useState(0);

  useEffect(() => {
    let stepsDone = 0;

    if (business?.brand) {
      stepsDone = 1;
    }

    if (business?.brand?.image) {
      stepsDone = 2;
    }

    if (business?.brand?.categories?.length > 0) {
      stepsDone = 3;
    }

    if (business?.brand?.productCount > 0) {
      stepsDone = 4;
    }

    if (business?.brand?.brandId?.reviewsCount > 0) {
      stepsDone = 5;
    }

    setSteps(stepsDone);
  }, [business]);

  const [cookies, setCookie, removeCookie] = useCookies(["business"]);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBusinessLogout = () => {
    removeCookie("business", {
      path: "/",
      sameSite: true,
    });
    dispatch({
      type: BUSINESS_DETAILS_RESET,
    });

    router.push("/");
  };

  return (
    <List>
      <Link href="/business/panel/checklist">
        <a>
          <ListItem button className={"active"}>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <ViewListIcon className={"me-2 textSecondary"} />
            </ListItemIcon>
            <ListItemText primary="Get started" secondary={steps + "/5"} />
          </ListItem>
        </a>
      </Link>

      {/* <Link href="/business/panel/">
        <a>
          <ListItem button>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <GridViewRoundedIcon className={"me-2 textSecondary"} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </a>
      </Link> */}

      <Link href="/business/panel/brand">
        <a>
          <ListItem button>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <SettingsOutlinedIcon className={"me-2 textSecondary"} />
            </ListItemIcon>
            <ListItemText primary="Edit brand" />
          </ListItem>
        </a>
      </Link>

      <Link href="/business/panel/categories">
        <a>
          <ListItem button>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <CategoryIcon className={"me-2 textSecondary"} />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItem>
        </a>
      </Link>

      <Link href="/business/panel/product/list">
        <a>
          <ListItem button>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <LocalGroceryStoreIcon className={"me-2 textSecondary"} />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </a>
      </Link>

      <Link href="/business/panel/product/create">
        <a>
          <ListItem button>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <AddShoppingCartIcon className={"me-2 textSecondary"} />
            </ListItemIcon>
            <ListItemText primary="Create product" />
          </ListItem>
        </a>
      </Link>

      <Link href="/business/panel/reviews">
        <a>
          <ListItem button>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <ReviewsIcon className={"me-2 textSecondary"} />
            </ListItemIcon>
            <ListItemText primary="Reviews" />
          </ListItem>
        </a>
      </Link>
      <a>
        <ListItem
          button
          onClick={handleBusinessLogout}
          className={"cursor-pointer"}
        >
          <ListItemIcon sx={{ minWidth: "auto" }}>
            <LogoutOutlinedIcon className={"me-2 textSecondary"} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </a>

      {/* <ListItem button>
        <Accordion
          sx={{ width: "205px", boxShadow: "none", bgcolor: "transparent" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ p: 0 }}
          >
            <RateReviewRoundedIcon
              className={"me-2 textSecondary"}
              sx={{ color: "rgba(0, 0, 0, 0.54)" }}
            />
            <Typography>Reviews</Typography>
          </AccordionSummary>
          <AccordionDetails className={"p-0"}>
            <List className={"p-0"}>
              <Link href="/business/panel">
                <ListItem className={"p-1"}>
                  <ListItemText primary="Service reviews" />
                </ListItem>
              </Link>
              <Link href="/business/panel">
                <ListItem className={"p-1"}>
                  <ListItemText primary="product reviews" />
                </ListItem>
              </Link>
              <Link href="/business/panel">
                <ListItem className={"p-1"}>
                  <ListItemText primary="Blog reviews" />
                </ListItem>
              </Link>
            </List>
          </AccordionDetails>
        </Accordion>
      </ListItem>
      <ListItem button>
        <Accordion
          sx={{ width: "205px", boxShadow: "none", bgcolor: "transparent" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ p: 0 }}
          >
            <Inventory2Icon
              className={"me-2 textSecondary"}
              sx={{ color: "rgba(0, 0, 0, 0.54)" }}
            />
            <Typography>Products</Typography>
          </AccordionSummary>
          <AccordionDetails className={"p-0"}>
            <List className={"p-0"}>
              <Link href="/business/panel">
                <ListItem className={"p-1"}>
                  <ListItemText primary="product list" />
                </ListItem>
              </Link>
              <Link href="/business/panel">
                <ListItem className={"p-1"}>
                  <ListItemText primary="add product" />
                </ListItem>
              </Link>
            </List>
          </AccordionDetails>
        </Accordion>
      </ListItem> */}
    </List>
  );
}
export default SideList;
