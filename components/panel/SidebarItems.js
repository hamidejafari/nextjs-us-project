import * as React from "react";
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { USER_DETAILS_RESET } from "../../redux/constants/userConstant";
import { useRouter } from "next/router";
import KeyIcon from "@mui/icons-material/Key";

function SidebarItems(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const dispatch = useDispatch();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleLogout = () => {
    removeCookie("user", {
      path: "/",
      sameSite: true,
    });
    dispatch({
      type: USER_DETAILS_RESET,
    });

    router.push("/");
  };

  const { user } = props;

  return (
    <>
      <Link href={"/panel/dashboard"}>
        <a>
          <ListItemButton>
            <ListItemIcon>
              <DashboardOutlinedIcon className={"textSecondary"} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </a>
      </Link>
      {/* <Link href={"/panel/account"}>
				<ListItemButton>
					<ListItemIcon>
						<AccountCircleOutlinedIcon className={"textSecondary"} />
					</ListItemIcon>
					<ListItemText primary="Account" />
				</ListItemButton>
			</Link> */}
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ReviewsOutlinedIcon className={"textSecondary"} />
        </ListItemIcon>
        <ListItemText primary="Reviews" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <Link href={"/panel/reviews"}>
            <a>
              <ListItemButton>
                <ListItemIcon>
                  <ReviewsOutlinedIcon className={"textSecondary"} />
                </ListItemIcon>
                <Badge
                  badgeContent={user?.reviewsCount ? user?.reviewsCount : "0"}
                >
                  <ListItemText primary="All Reviews" />
                </Badge>
              </ListItemButton>
            </a>
          </Link>
          <Link href={"/panel/reviews?type=brand"}>
            <a>
              <ListItemButton>
                <ListItemIcon>
                  <ReviewsOutlinedIcon className={"textSecondary"} />
                </ListItemIcon>
                <Badge
                  badgeContent={
                    user?.brandsReviewsCount ? user?.brandsReviewsCount : "0"
                  }
                >
                  <ListItemText primary="Brand Reviews" />
                </Badge>
              </ListItemButton>
            </a>
          </Link>
          <Link href={"/panel/reviews?type=product"}>
            <a>
              <ListItemButton>
                <ListItemIcon>
                  <ReviewsOutlinedIcon className={"textSecondary"} />
                </ListItemIcon>
                <Badge
                  badgeContent={
                    user?.productsReviewsCount
                      ? user?.productsReviewsCount
                      : "0"
                  }
                >
                  <ListItemText primary="Product Reviews" />
                </Badge>
              </ListItemButton>
            </a>
          </Link>
          <Link href={"/panel/reviews?type=blog"}>
            <a>
              <ListItemButton>
                <ListItemIcon>
                  <ReviewsOutlinedIcon className={"textSecondary"} />
                </ListItemIcon>
                <Badge
                  badgeContent={
                    user?.blogsReviewsCount ? user?.blogsReviewsCount : "0"
                  }
                >
                  <ListItemText primary="Blog Reviews" />
                </Badge>
              </ListItemButton>
            </a>
          </Link>
        </List>
        <Divider />
      </Collapse>
      {/* <Link href={"/panel/ticket"}>
				<ListItemButton>
					<ListItemIcon>
						<ChatOutlinedIcon className={"textSecondary"} />
					</ListItemIcon>
					<Badge badgeContent={2}>
						<ListItemText primary="Ticket" />
					</Badge>
				</ListItemButton>
			</Link> */}
      <Link href={"/panel/password"}>
        <a>
          <ListItemButton>
            <ListItemIcon>
              <KeyIcon className={"textSecondary"} />
            </ListItemIcon>
            <ListItemText primary="Password" />
          </ListItemButton>
        </a>
      </Link>
      <a onClick={handleLogout}>
        <ListItemButton>
          <ListItemIcon>
            <PowerSettingsNewOutlinedIcon className={"textSecondary"} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </a>
    </>
  );
}
export default SidebarItems;
