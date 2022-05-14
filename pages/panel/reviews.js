import * as React from "react";
import { Grid } from "@mui/material";
import PanelLayout from "../../layouts/PanelLayout";
import Reviews from "../../components/panel/Reviews";
import fetchLayoutData from "../../utiles/fetchLayoutData";
import { useSelector, shallowEqual } from "react-redux";

function ReviewsList(props) {
  const { menuCategories, setting, query } = props;
  const user = useSelector((state) => state.user?.user, shallowEqual);

  const reviews = () => {
    if (query.type == "product") {
      return user?.productsReviews;
    }
    if (query.type == "brand") {
      return user?.brandsReviews;
    }
    if (query.type == "blog") {
      return user?.blogsReviews;
    }
    return user?.reviews;
  };

  return (
    <PanelLayout menuCategories={menuCategories} setting={setting}>
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
        {reviews()?.map((revcontent, index) => (
          <Reviews
            key={index}
            avatar={"/images/user.webp"}
            name={revcontent.name}
            date={new Date(revcontent.createdAt).toDateString()}
            rate={revcontent.star}
            review={revcontent.content}
            status={revcontent.status}
            id={revcontent._id}
          />
        ))}
      </Grid>
    </PanelLayout>
  );
}

export async function getServerSideProps({ query, req }) {
  let menuCategories;
  let setting;

  const layoutData = await fetchLayoutData();
  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  return {
    props: {
      query,
      menuCategories,
      setting,
    },
  };
}

export default ReviewsList;