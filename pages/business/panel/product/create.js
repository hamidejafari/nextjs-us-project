import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  Button,
  Typography,
  TextField,
  Divider,
  TextareaAutosize,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Select from "react-select";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import BusinesLayout from "../../../../layouts/BusinesLayout";
const Input = styled("input")({
  display: "none",
});
import businessAxiosInstance from "../../../../utiles/businessAxiosInstance";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector, shallowEqual } from "react-redux";
import { useRouter } from "next/router";

function CreateProduct() {
  const business = useSelector(
    (state) => state.business?.business,
    shallowEqual
  );
  const [fetchCetegoryLoading, setFetchCetegoryLoading] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [cookies] = useCookies(["business"]);
  const [data, setData] = useState({
    title: "",
    description: "",
    image: {
      fileName:
        "",
      old: true,
    },
    pros: [],
    cons: [],
    faq: [],
    categoryId: "",
  });
  const [prosInput, setProsInput] = useState(0);
  const [consInput, setConsInput] = useState(0);
  const [faqInput, setFaqInput] = useState(0);
  const [errorMessage, setErrorMessage] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const categories = async () => {
    setFetchCetegoryLoading(true);
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_SERVER_URL +
        "/api/site/business/category-level-three"
    );
    setFetchCetegoryLoading(false);
    const opt = [];
    for (const e of data) {
      opt.push({
        label: e.title,
        value: e._id,
      });
    }
    setCategoryOptions(opt);
  };
  useEffect(() => {
    categories();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage({});
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      if (data.categoryId?.value) {
        formData.append("categoryId", data.categoryId.value);
      }
      if(data.image.file){
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
      await businessAxiosInstance(cookies).post(
        "/site/business/products",
        formData
      );
      setLoading(false);
      Swal.fire("", "Successfully saved", "success");
      router.push("/business/panel/product/list");
    } catch (error) {
      console.log(error);
      if (error.response?.data?.error) {
        setErrorMessage(error.response?.data?.error);
      }
      setLoading(false);
    }
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
        <Grid xl={7} lg={10} className={"p-2"} m={"auto"}>
          {business?.brand && !loading ? (
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
                  <Grid xs={12} className={"p-2"}>
                    <Typography fontWeight={"bolder"} fontSize={20}>
                      Create Product
                    </Typography>
                  </Grid>
                  <Grid xs={12} className={"p-2"}>
                    <TextField
                      id="standard-basic"
                      value={data?.title}
                      label="Product name"
                      variant="outlined"
                      className={
                        Array.isArray(errorMessage?.title)
                          ? "w-100 invalid-input"
                          : "w-100"
                      }
                      sx={{ borderRadius: "0px" }}
                      name="title"
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
                  <Grid xs={12} className={"p-2"} m={"auto"}>
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
                  <Grid xs={12} className={"p-2"}>
                    <Select
                      id="category"
                      isLoading={fetchCetegoryLoading}
                      value={data.categoryId}
                      onChange={(cat) => {
                        setData({ ...data, categoryId: cat });
                      }}
                      options={categoryOptions}
                      isClearable
                      placeholder="Select category"
                      style={{ zIndex: 300000000000000 }}
                    />
                    <div className="text-danger">
                      {Array.isArray(errorMessage?.categoryId) &&
                        errorMessage?.categoryId.map((error, index) => (
                          <p key={index}>{error}</p>
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
                            {index === faqInput - 1 && (
                              <div className="d-flex">
                                <Button
                                  onClick={() => {
                                    setFaqInput(faqInput - 1);
                                    const newFaq = [...data.faq];
                                    newFaq.splice(index, 1);
                                    setData({ ...data, faq: newFaq });
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
                              <label className="form-label">Question</label>
                              <TextField
                                key={index}
                                className={`form-input w-100`}
                                value={data.faq[index]?.question || ""}
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
                                className={`form-input w-100`}
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
                          className={"w-100 "}
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
                  <Grid item xs={12}>
                    {" "}
                    <hr />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <div className="mb-3">
                      <label className="form-label p-2 " htmlFor="pros">
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
                                <textarea
                                  rows="4"
                                  className={`form-input`}
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
                          className={"w-100 "}
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
                      <label className="form-label p-2 " htmlFor="cons">
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
                                <textarea
                                  rows="4"
                                  className={`form-input`}
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
                          className={"w-100 "}
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
                  <Grid item xs={12}>
                    {" "}
                    <hr />
                  </Grid>

                  <Grid lg={4} xs={12} className={"p-2"} mx={"auto"}>
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
                          Upload product image
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
                  <Grid xs={12} className={"p-2"}>
                    <Typography color={"#999"} textAlign={"center"}>
                      Recommended image size: 400px x 300px, maximum file size
                      1MB
                    </Typography>
                  </Grid>
                  <Grid xs={12} className={"p-0"}>
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
                      alignItems="center"
                    >
                      <Grid
                        xl={5}
                        className={"p-2"}
                        alignSelf={"center"}
                        margin={"auto"}
                      >
                        <Button className={"btnVisit w-100"} type="submit">
                          Submit Product
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

export default CreateProduct;
