import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  TextareaAutosize,
  TextField,
  Stack,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector, shallowEqual } from "react-redux";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import Swal from "sweetalert2";
import { getBusinessDetails } from "../../../redux/slices/businessSlice";
import { useDispatch } from "react-redux";

// components
import BusinesLayout from "../../../layouts/BusinesLayout";

import businessAxiosInstance from "../../../utiles/businessAxiosInstance";
import { useCookies } from "react-cookie";

const Input = styled("input")({
  display: "none",
});

function Brand() {
  const business = useSelector(
    (state) => state.business?.business,
    shallowEqual
  );
  
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  const [prosInput, setProsInput] = useState(0);
  const [consInput, setConsInput] = useState(0);
  const [faqInput, setFaqInput] = useState(0);

  const [errorMessage, setErrorMessage] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (business?.brand?.faq?.length) {
      setFaqInput(business.brand.faq.length);
    }

    if (business?.brand?.pros?.length) {
      setProsInput(business.brand.pros.length);
    }

    if (business?.brand?.cons?.length) {
      setConsInput(business.brand.cons.length);
    }

    setData({
      companyName: business?.brand?.title,
      website: business?.brand?.siteUrl,
      description: business?.brand?.descriptionShort,
      faq: business?.brand?.faq,
      pros: business?.brand?.pros,
      cons: business?.brand?.cons,
      image: {
        fileName: business?.brand?.image,
        old: true,
      },
    });
  }, [business]);

  const handleUpload = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setData({ ...data, image: { file: null, old: false } });
      return;
    }
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setData({
      ...data,
      image: { file: e.target.files[0], fileName: objectUrl, old: false },
    });
  };

  const [cookies] = useCookies(["business"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage({});
    try {
      const formData = new FormData();
      formData.append("title", data.companyName);
      formData.append("siteUrl", data.website);
      formData.append("description", data.description);
      if (data.image.old) {
        formData.append("image", data.image.fileName);
      } else {
        formData.append("image", data.image.file);
      }
      if (consInput > 0) {
        formData.append("cons", JSON.stringify(data.cons));
      }
      if (prosInput > 0) {
        formData.append("pros", JSON.stringify(data.pros));
      }
      if (faqInput > 0) {
        formData.append("faq", JSON.stringify(data.faq));
      }
      await businessAxiosInstance(cookies).put(
        "/site/business/brand",
        formData
      );
      setLoading(false);
      dispatch(getBusinessDetails(cookies));

      Swal.fire("", "Successfully saved", "success");

      
    } catch (error) {
      console.log(error);
      if (error.response?.data?.error) {
        setErrorMessage(error.response?.data?.error);
      }
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const addProsHandler = () => {
    const newProsInput = prosInput + 1;
    setProsInput(newProsInput);
  };

  const addConsHandler = () => {
    const newConsInput = consInput + 1;
    setConsInput(newConsInput);
  };

  const addFaqHandler = () => {
    setFaqInput(faqInput + 1);
  };

  return (
    <BusinesLayout>
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
        <Grid item xl={7} lg={10} className={"p-2"} m={"auto"}>
          {data?.companyName && !loading ? (
            <Card className={"p-3 shadow-none border rounded-0"}>
              <form onSubmit={handleSubmit}>
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
                  <Grid item xs={12} className={"p-2"}>
                    <Typography fontWeight={"bolder"} fontSize={20}>
                      About company
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={"p-2"}>
                    <TextField
                      id="standard-basic"
                      value={data?.companyName}
                      label="Company name"
                      variant="outlined"
                      className={
                        Array.isArray(errorMessage?.title)
                          ? "w-100 invalid-input"
                          : "w-100"
                      }
                      sx={{ borderRadius: "0px" }}
                      name="companyName"
                      onChange={handleChange}
                    />
                    <div className="text-danger">
                      {Array.isArray(errorMessage?.title) &&
                        errorMessage?.title.map((error, index) => (
                          <p key={index} className="error-text">
                            {error}
                          </p>
                        ))}
                    </div>
                  </Grid>
                  <Grid item xs={12} className={"p-2"}>
                    <TextField
                      id="standard-basic"
                      label="Company website"
                      value={data?.website}
                      variant="outlined"
                      className={
                        Array.isArray(errorMessage?.siteUrl)
                          ? "w-100 invalid-input"
                          : "w-100"
                      }
                      sx={{ borderRadius: "0px" }}
                      name="website"
                      onChange={handleChange}
                    />
                    <Typography color={"gray"} fontSize={12}>
                      example : https://www.example.com
                    </Typography>
                    <div className="text-danger">
                      {Array.isArray(errorMessage?.siteUrl) &&
                        errorMessage?.siteUrl.map((error, index) => (
                          <p key={index} className="error-text">
                            {error}
                          </p>
                        ))}
                    </div>
                  </Grid>
                  <Grid item xs={12} className={"p-2"} m={"auto"}>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="Description"
                      className={
                        Array.isArray(errorMessage?.description)
                          ? "w-100 invalid-input"
                          : "w-100"
                      }
                      value={data?.description}
                      name="description"
                      onChange={handleChange}
                    />

                    <div className="text-danger">
                      {Array.isArray(errorMessage?.description) &&
                        errorMessage?.description.map((error, index) => (
                          <p key={index} className="error-text">
                            {error}
                          </p>
                        ))}
                    </div>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <div className="mb-3">
                      <label className="form-label p-2" htmlFor="faq">
                        FAQ
                      </label>
                      <div className="p-2 bg-gray">
                        {new Array(faqInput).fill(undefined).map((_, index) => (
                          <React.Fragment key={index}>
                            <hr />
                            {index === faqInput - 1 && (
                              <div className="d-flex pt-2 pb-4">
                                <Button
                                  onClick={() => {
                                    setFaqInput(faqInput - 1);
                                    const newFaq = [...data.faq];
                                    newFaq.splice(index, 1);
                                    setData({ ...data, faq: newFaq });
                                  }}
                                  className={"btnVisit"}
                                  variant="contained"
                                  color="error"
                                >
                                  <ClearTwoToneIcon />
                                </Button>
                              </div>
                            )}
                            <div className="mb-3">
                              <TextField
                                value={data.faq[index]?.question || ""}
                                label="Question"
                                variant="outlined"
                                className={
                                  Array.isArray(errorMessage?.title)
                                    ? "w-100 invalid-input"
                                    : "w-100"
                                }
                                sx={{ borderRadius: "0px" }}
                                onChange={(e) => {
                                  const obj = { question: e.target.value };
                                  data.faq[index] = {
                                    ...data.faq[index],
                                    ...obj,
                                  };
                                  setData({ ...data, faq: [...data.faq] });
                                }}
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Answer</label>
                              <TextareaAutosize
                                key={index}
                                className={
                                  Array.isArray(errorMessage?.description)
                                    ? "w-100 invalid-input"
                                    : "w-100"
                                }
                                value={data.faq[index]?.answer || ""}
                                onChange={(e) => {
                                  const obj = { answer: e.target.value };
                                  data.faq[index] = {
                                    ...data.faq[index],
                                    ...obj,
                                  };
                                  setData({ ...data, faq: [...data.faq] });
                                }}
                              />
                            </div>
                          </React.Fragment>
                        ))}
                        <Button
                          onClick={addFaqHandler}
                          variant="contained"
                          className={"btnVisit w-100"}
                        >
                          <Typography fontSize={17}>Add</Typography>
                          <AddCircleTwoToneIcon
                            style={{ marginRight: "5px" }}
                          />
                        </Button>

                        <div className="text-danger">
                          {Array.isArray(errorMessage?.faq) &&
                            errorMessage?.faq[0] &&
                            typeof errorMessage?.faq[0] !== "object" &&
                            errorMessage?.faq}
                        </div>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <div className="mb-3">
                      <label
                        className="form-label p-2 text-success"
                        htmlFor="pros"
                      >
                        Pros
                      </label>
                      <div className="p-2 bg-gray">
                        {new Array(prosInput)
                          .fill(undefined)
                          .map((_, index) => (
                            <React.Fragment key={index}>
                              <hr />
                              {index === prosInput - 1 && (
                                <div className="d-flex">
                                  <Button
                                    onClick={() => {
                                      setProsInput(prosInput - 1);
                                    }}
                                    className="ms-auto border-raduis-0"
                                    variant="contained"
                                    color="error"
                                  >
                                    <ClearTwoToneIcon />
                                  </Button>
                                </div>
                              )}
                              <div className="mb-3">
                                <label className="form-label">Pros</label>
                                <TextareaAutosize
                                  rows="4"
                                  className={
                                    Array.isArray(errorMessage?.description)
                                      ? "w-100 invalid-input"
                                      : "w-100"
                                  }
                                  value={data.pros[index] || ""}
                                  onChange={(e) => {
                                    data.pros[index] = e.target.value;
                                    setData({ ...data, pros: [...data.pros] });
                                  }}
                                />
                              </div>
                            </React.Fragment>
                          ))}
                        <Button
                          onClick={addProsHandler}
                          variant="contained"
                          className={"btnPros w-100"}
                        >
                          <Typography fontSize={17}>Add</Typography>
                          <AddCircleTwoToneIcon
                            style={{ marginRight: "5px" }}
                          />
                        </Button>

                        <div className="text-danger">
                          {Array.isArray(errorMessage?.pros) &&
                            errorMessage?.pros[0] &&
                            errorMessage?.pros[0] &&
                            typeof errorMessage?.pros[0] !== "object" &&
                            errorMessage?.pros}
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className="mb-3">
                      <label
                        className="form-label p-2 text-danger"
                        htmlFor="cons"
                      >
                        Cons
                      </label>
                      <div className="p-2 bg-gray">
                        {new Array(consInput)
                          .fill(undefined)
                          .map((_, index) => (
                            <React.Fragment key={index}>
                              <hr />
                              {index === consInput - 1 && (
                                <div className="d-flex">
                                  <Button
                                    onClick={() => {
                                      setConsInput(consInput - 1);
                                    }}
                                    className="ms-auto border-raduis-0"
                                    variant="contained"
                                    color="error"
                                  >
                                    <ClearTwoToneIcon />
                                  </Button>
                                </div>
                              )}
                              <div className="mb-3">
                                <label className="form-label">Cons</label>
                                <TextareaAutosize
                                  rows="4"
                                  className={
                                    Array.isArray(errorMessage?.description)
                                      ? "w-100 invalid-input"
                                      : "w-100"
                                  }
                                  value={data.cons[index] || ""}
                                  onChange={(e) => {
                                    data.cons[index] = e.target.value;
                                    setData({ ...data, cons: [...data.cons] });
                                  }}
                                />
                              </div>
                            </React.Fragment>
                          ))}
                        <Button
                          onClick={addConsHandler}
                          variant="contained"
                          className={"btnCons w-100"}
                        >
                          <Typography fontSize={17}>Add</Typography>
                          <AddCircleTwoToneIcon
                            style={{ marginRight: "5px" }}
                          />
                        </Button>

                        <div className="text-danger">
                          {Array.isArray(errorMessage?.cons) &&
                            errorMessage?.cons[0] &&
                            errorMessage?.cons[0] &&
                            typeof errorMessage?.cons[0] !== "object" &&
                            errorMessage?.cons}
                        </div>
                      </div>
                    </div>
                  </Grid>

                  <Grid item lg={4} xs={12} className={"p-2"} mx={"auto"}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <label
                        htmlFor="contained-button-file"
                        className={"w-100"}
                      >
                        <Input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={handleUpload}
                        />
                        <Button
                          variant="contained"
                          component="span"
                          className={"btnVisit w-100 d-flex"}
                        >
                          Upload company logo
                        </Button>
                      </label>
                    </Stack>
                    <Card className={"border rounded-0 shadow-none mt-1 p-2"}>
                      <Grid textAlign={"center"}>
                        <img
                          src={
                            data?.image?.fileName
                              ? data?.image?.old == false
                                ? data?.image?.fileName
                                : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                  "/files/images/medium/" +
                                  data?.image?.fileName
                              : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                                "/files/images/placeholder/brand-logo.webp"
                          }
                          style={{
                            width: "100%",
                          }}
                          alt="company-logo"
                        />
                      </Grid>
                    </Card>

                    <div className="text-danger">
                      {Array.isArray(errorMessage?.image) &&
                        errorMessage?.image.map((error, index) => (
                          <p key={index} className="error-text">
                            {error}
                          </p>
                        ))}
                    </div>
                  </Grid>

                  <Grid item xs={12} className={"p-2"}>
                    <Typography color={"#999"} textAlign={"center"}>
                      Recommended image size: 400px x 300px, maximum file size
                      1MB
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={"p-0"}>
                    <Divider />
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{
                        xs: 1,
                        sm: 2,
                        md: 3,
                      }}
                      className={"w-100 mx-0 mt-2"}
                    >
                      <Grid item xl={7} className={"p-2"} alignSelf={"center"}>
                        <Typography color={"#999"}>Unsaved changes</Typography>
                      </Grid>
                      <Grid item xl={2} className={"p-2"} alignSelf={"center"}>
                        <Button
                          className={"btnVisit-outline w-100"}
                          onClick={() => window.location.reload(false)}
                        >
                          Cancel
                        </Button>
                      </Grid>
                      <Grid item xl={3} className={"p-2"} alignSelf={"center"}>
                        <Button className={"btnVisit w-100"} type="submit">
                          Save changes
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Card>
          ) : (
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "100vh" }}
            >
              <Grid item xs={3}>
                <CircularProgress className="me-3" color="inherit" />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </BusinesLayout>
  );
}

export default Brand;
