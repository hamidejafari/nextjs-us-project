import { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useCookies } from "react-cookie";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xl: "50%",
    lg: "50%",
    md: "60%",
    sm: "70%",
    xs: "98%",
  },
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 0,
};

const BannerModal = (props) => {
  const { banner } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [cookies, setCookie, removeCookie] = useCookies(["banner"]);

  useEffect(() => {
    if (!cookies.banner) {
      setCookie("banner", JSON.stringify([banner._id]));
      setOpen(true);
    } else if (
      Array.isArray(cookies.banner) &&
      !cookies.banner.includes(banner._id)
    ) {
      setCookie("banner", JSON.stringify([banner._id]));
      setOpen(true);
    }
  }, [banner._id, cookies.banner, setCookie]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style }}>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a target={"_blank"} rel="nofollow" href={banner.url || "/"}>
          <img
            src={
              process.env.NEXT_PUBLIC_IMAGE_SERVER +
              "/files/images/main/" +
              banner.image?.fileName
            }
            alt={banner.image?.alt}
            width={"100%"}
            className={"d-flex pointer"}
          />
        </a>
        <span className={"close"} onClick={handleClose}>
          <CloseIcon />
        </span>
      </Box>
    </Modal>
  );
};

export default BannerModal;
