import React from "react";
import {
  Typography,
  Stack,
  Rating,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Chip,
  Avatar,
  Grid,
  Link,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function TblMob(props) {
  const { comparison } = props;

  const pro1attr1 = comparison?.compare1Id?.attributes.find(
    (el) => el.attributeId === comparison?.categoryId?.attributes[0]?._id
  )?.attributeValue;

  const pro2attr1 = comparison?.compare2Id?.attributes.find(
    (el) => el.attributeId === comparison?.categoryId?.attributes[0]?._id
  )?.attributeValue;

  const pro1attr2 = comparison?.compare1Id?.attributes.find(
    (el) => el.attributeId === comparison?.categoryId?.attributes[1]?._id
  )?.attributeValue;

  const pro2attr2 = comparison?.compare2Id?.attributes.find(
    (el) => el.attributeId === comparison?.categoryId?.attributes[1]?._id
  )?.attributeValue;

  return (
    <div className={"tblmobl"}>
      <table className={"table compare-tool"}>
        <thead>
          <tr>
            <th className={"headerth w25"} scope="col">
              <Typography
                className={"textSecondary"}
                fontSize={12}
              >
                {comparison?.compare1Id?.title?.toUpperCase()}
              </Typography>
              <Typography
                className={"textSecondary"}
                fontSize={15}
                fontWeight={"bolder"}
              >
                vs
              </Typography>
              <Typography
                className={"textSecondary"}
                fontSize={12}
              >
                {comparison?.compare2Id?.title?.toUpperCase()}
              </Typography>
            </th>
            <th className={"headerth w37"} scope="col">
              <CardMedia
                image={
                  comparison?.onModel === "product"
                    ? comparison?.compare1Id?.brandId?.image?.fileName
                      ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/main/" +
                        comparison?.compare1Id?.brandId?.image?.fileName
                      : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/placeholder/product-sample.webp"
                    : comparison?.onModel === "brand"
                    ? comparison?.compare1Id?.image?.fileName
                      ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/main/" +
                        comparison?.compare1Id?.image?.fileName
                      : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/placeholder/brand-logo.webp"
                    : null
                }
                component="img"
                alt={
                  comparison?.onModel === "product"
                    ? comparison?.compare1Id?.brandId?.image?.alt
                    : comparison?.onModel === "brand"
                    ? comparison?.compare1Id?.image?.alt
                    : null
                }
                height="75"
                className={"m-auto my-3 imgcrd"}
              />
              <Chip
                className={"chipName"}
                avatar={<Avatar>#1</Avatar>}
                label={
                  comparison?.onModel === "product"
                    ? comparison?.compare1Id?.brandId?.title
                    : comparison?.compare1Id?.title
                }
                variant="outlined"
              />
              <img src="/images/mdal.webp" alt="medal" className={"mdl"} />
            </th>
            <th className={"headerth w37"} scope="col">
              <CardMedia
                image={
                  comparison?.onModel === "product"
                    ? comparison?.compare2Id?.brandId?.image?.fileName
                      ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/main/" +
                        comparison?.compare2Id?.brandId?.image?.fileName
                      : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/placeholder/product-sample.webp"
                    : comparison?.onModel === "brand"
                    ? comparison?.compare2Id?.image?.fileName
                      ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/main/" +
                        comparison?.compare2Id?.image?.fileName
                      : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/placeholder/brand-logo.webp"
                    : null
                }
                component="img"
                alt={
                  comparison?.onModel === "product"
                    ? comparison?.compare2Id?.brandId?.image?.alt
                    : comparison?.onModel === "brand"
                    ? comparison?.compare2Id?.image?.alt
                    : null
                }
                height="75"
                className={"m-auto my-3 imgcrd"}
              />
              <Chip
                className={"chipName"}
                avatar={<Avatar>#2</Avatar>}
                label={
                  comparison?.onModel === "product"
                    ? comparison?.compare2Id?.brandId?.title
                    : comparison?.compare2Id?.title
                }
                variant="outlined"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {pro1attr1 && pro2attr1 && (
            <tr>
              <th className={"py-4 px-5"} align="center" scope="row">
                <Typography color={"#000"} fontSize={15} fontWeight={"bolder"}>
                  {comparison?.categoryId?.attributes[0]?.title}
                </Typography>
              </th>
              <td className={"py-4 px-5"} align="center">
                <Typography fontSize={15}> {pro1attr1}</Typography>
                <Stack>
                  <Rating
                    name="half-rating-read"
                    defaultValue={comparison?.compare1Id?.star}
                    precision={0.5}
                    readOnly
                    size="small"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </Stack>
              </td>
              <td className={"py-4 px-5"} align="center">
                <Typography fontSize={15}>{pro2attr1}</Typography>
                <Stack>
                  <Rating
                    name="half-rating-read"
                    defaultValue={comparison?.compare2Id?.star}
                    precision={0.5}
                    readOnly
                    size="small"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </Stack>
              </td>
            </tr>
          )}

          {pro1attr2 && pro2attr2 && (
            <tr>
              <th className={"py-4 px-5"} align="center" scope="row">
                <Typography color={"#000"} fontSize={15} fontWeight={"bolder"}>
                  {comparison?.categoryId?.attributes[1]?.title}
                </Typography>
              </th>
              <td className={"py-4 px-5"} align="center">
                <Typography fontSize={15}> {pro1attr2}</Typography>
                <Stack>
                  <Rating
                    name="half-rating-read"
                    defaultValue={
                      comparison?.compare1Id?.attributes.find(
                        (el) =>
                          el.attributeId ===
                          comparison?.categoryId?.attributes[1]?._id
                      )?.attributeValue
                    }
                    precision={0.5}
                    readOnly
                    size="small"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </Stack>
              </td>
              <td className={"py-4 px-5"} align="center">
                <Typography fontSize={15}> {pro2attr2}</Typography>
                <Stack>
                  <Rating
                    name="half-rating-read"
                    defaultValue={
                      comparison?.compare2Id?.attributes.find(
                        (el) =>
                          el.attributeId ===
                          comparison?.categoryId?.attributes[1]?._id
                      )?.attributeValue
                    }
                    precision={0.5}
                    readOnly
                    size="small"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </Stack>
              </td>
            </tr>
          )}

          {comparison?.compare1Id?.pros?.length > 0 &&
            comparison?.compare2Id?.pros?.length > 0 && (
              <tr>
                <th className={"py-4 px-5"} scope="row">
                  <Typography
                    color={"green"}
                    fontWeight={"bolder"}
                    fontSize={15}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <CheckCircleIcon className={"mb-1 me-1"} /> Pros
                  </Typography>
                </th>
                <td className={"py-4 px-5"}>
                  <List className={"m-0 p-0"}>
                    {comparison?.compare1Id?.pros?.map((pro, index) => (
                      <ListItem key={index} className={"m-0 px-0 pt-0 pb-2"}>
                        <ListItemText className={"m-0 p-0"}>
                          <Typography className={"m-0"} fontSize={15}>
                            <FiberManualRecordIcon
                              sx={{
                                fontSize: "10px",
                                marginTTop: "5px",
                                marginRight: "3px",
                              }}
                            />
                            <span dangerouslySetInnerHTML={{ __html: pro }} />
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </td>
                <td className={"py-4 px-5"}>
                  <List className={"m-0 p-0"}>
                    {comparison?.compare2Id?.pros?.map((pro, index) => (
                      <ListItem key={index} className={"m-0 px-0 pt-0 pb-2"}>
                        <ListItemText className={"m-0 p-0"}>
                          <Typography className={"m-0"} fontSize={15}>
                            <FiberManualRecordIcon
                              sx={{
                                fontSize: "10px",
                                marginTTop: "5px",
                                marginRight: "3px",
                              }}
                            />
                            <span dangerouslySetInnerHTML={{ __html: pro }} />
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </td>
              </tr>
            )}

          {comparison?.compare1Id?.cons?.length > 0 &&
            comparison?.compare2Id?.cons?.length > 0 && (
              <tr>
                <th className={"py-4 px-5"} scope="row">
                  <Typography
                    color={"error"}
                    fontWeight={"bolder"}
                    fontSize={15}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <CancelIcon className={"mb-1 me-1"} /> Cons
                  </Typography>
                </th>

                <td className={"py-4 px-5"}>
                  <List className={"m-0 p-0"}>
                    {comparison?.compare1Id?.cons?.map((con, index) => (
                      <ListItem key={index} className={"m-0 px-0 pt-0 pb-2"}>
                        <ListItemText className={"m-0 p-0"}>
                          <Typography className={"m-0"} fontSize={15}>
                            <FiberManualRecordIcon
                              sx={{
                                fontSize: "10px",
                                marginTTop: "5px",
                                marginRight: "3px",
                              }}
                            />
                            <span dangerouslySetInnerHTML={{ __html: con }} />
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </td>
                <td className={"py-4 px-5"}>
                  <List className={"m-0 p-0"}>
                    {comparison?.compare2Id?.cons?.map((con, index) => (
                      <ListItem key={index} className={"m-0 px-0 pt-0 pb-2"}>
                        <ListItemText className={"m-0 p-0"}>
                          <Typography className={"m-0"} fontSize={15}>
                            <FiberManualRecordIcon
                              sx={{
                                fontSize: "10px",
                                marginTTop: "5px",
                                marginRight: "3px",
                              }}
                            />
                            <span dangerouslySetInnerHTML={{ __html: con }} />
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </td>
              </tr>
            )}

          {comparison?.categoryId?.attributes.slice(2).map((attribute) => {
            if (
              comparison?.compare1Id?.attributes.find(
                (el) => el.attributeId === attribute._id
              )?.attributeValue &&
              comparison?.compare2Id?.attributes.find(
                (el) => el.attributeId === attribute._id
              )?.attributeValue
            ) {
              return (
                <tr key={attribute._id}>
                  <th className={"py-4 px-5"} scope="row">
                    <Typography
                      color={"#000"}
                      fontSize={15}
                      fontWeight={"bolder"}
                    >
                      {attribute.title}
                    </Typography>
                  </th>
                  <td className={"py-4 px-5"}>
                    <Typography fontSize={15} className="vs-attribute__value">
                      {
                        comparison?.compare1Id?.attributes.find(
                          (el) => el.attributeId === attribute._id
                        )?.attributeValue
                      }
                    </Typography>
                  </td>

                  <td className={"py-4 px-5"}>
                    <Typography fontSize={15}>
                      {
                        comparison?.compare2Id?.attributes.find(
                          (el) => el.attributeId === attribute._id
                        )?.attributeValue
                      }
                    </Typography>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TblMob;
