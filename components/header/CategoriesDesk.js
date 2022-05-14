import React from "react";
import { Card, Typography, ImageList, ImageListItem, Box } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// sx styles
import sxStyles from "../../styles/style";

function CategoriesDesk(props) {
  const router = useRouter();
  return (
    <Box className={"boxcat"}>
      <Link href={"/" + props.url}>
        <a>
          <Card
            className={"catCardMobile pointer mb-3"}
            sx={sxStyles["catCardMobile"]}
          >
            <ImageList className={"catImageListMobile"}>
              <ImageListItem className={"catImageListItemMobile"}>
                <img
                  className={"catImageMobile"}
                  src={props.image}
                  alt={props.title?.replace("$year$", new Date().getFullYear())}
                  width={30}
                  height={30}
                />
              </ImageListItem>
            </ImageList>
            <Typography
              variant="body2"
              gutterBottom
              className={"textSecondary my-2"}
              whiteSpace={"break-spaces"}
              height={"2rem"}
            >
              {props.title?.replace("$year$", new Date().getFullYear())}
            </Typography>
          </Card>
        </a>
      </Link>
    </Box>
  );
}

export default CategoriesDesk;
