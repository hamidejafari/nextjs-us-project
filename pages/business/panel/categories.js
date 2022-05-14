import { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  Button,
  CircularProgress,
} from "@mui/material";
import Select from "react-select";

import axios from "axios";
import { useSelector, shallowEqual } from "react-redux";
import businessAxiosInstance from "../../../utiles/businessAxiosInstance";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { getBusinessDetails } from "../../../redux/slices/businessSlice";
import { useDispatch } from "react-redux";

// components
import BusinesLayout from "../../../layouts/BusinesLayout";

function Categories() {
  const business = useSelector(
    (state) => state.business?.business,
    shallowEqual
  );
  const [fethcCategotyLoading, setFethcCategotyLoading] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState([]);

  const [errorMessage, setErrorMessage] = useState({});
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [cookies] = useCookies(["business"]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (Array.isArray(business?.brand?.categories)) {
      const cats = [];

      business?.brand?.categories?.forEach((element) => {
          cats.push({
            label: element?.title,
            value: element?._id,
          });
      });

      setSelectedCategory(cats);
    }
  }, [business]);

  const dispatch = useDispatch();

  const categories = async () => {
    setFethcCategotyLoading(true);
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_SERVER_URL +
        "/api/site/business/category-level-two"
    );
    setFethcCategotyLoading(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage({});
    try {
      const formCategory = [];
      if (selectedCategory) {
        selectedCategory.forEach((cat) => {
          formCategory.push({ _id: cat.value });
        });
      }

      await businessAxiosInstance(cookies).put(
        "/site/business/brand-categories",
        {
          categories: JSON.stringify(formCategory),
        }
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
        className={"w-100 catbusi m-0 "}
      >
        <Grid xl={7} lg={10} className={"p-2"} m={"auto"}>
          {business?.brand && !loading ? (
            <Card className={"p-3 shadow-none border rounded-0 CardCat"}>
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
                      Categories
                    </Typography>
                  </Grid>
                  <Grid xs={12} className={"p-2"}>
                    <div className="mb-3 position-relative">
                      <label className="form-label" htmlFor="category">
                        Choose category
                      </label>
                      <Select
                        id="category"
                        isLoading={fethcCategotyLoading}
                        value={selectedCategory}
                        onChange={(selectedCategory) => {
                          setSelectedCategory(selectedCategory);
                        }}
                        options={categoryOptions}
                        isClearable
                        isMulti
                        style={{ zIndex: 300000000000000 }}
                      />
                      <div className="text-danger">
                        {Array.isArray(errorMessage?.category) &&
                          errorMessage?.category.map((error, index) => (
                            <p key={index}>{error}</p>
                          ))}
                      </div>
                    </div>
                    <Typography color={"gray"} fontSize={12}>
                      Stand out on brandsreviews and in search results by
                      placing your company in the appropriate category. You can
                      add your company in up to 6 categories (1 primary, 5
                      secondary).
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    className={"p-2"}
                    type="submit"
                    textAlign={"right"}
                  >
                    <Button type="submit" className={"btnVisit"}>Save</Button>
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

export default Categories;
