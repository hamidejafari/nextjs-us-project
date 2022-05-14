import { useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useRouter } from "next/router";

// components
import SiteLayout from "../../layouts/SiteLayout";
import HeaderInn from "../../components/businessPanel/HeaderInn";
import fetchLayoutData from "../../utiles/fetchLayoutData";
import { CircularProgress, Modal } from "@mui/material";
import { Box } from "@mui/system";

function Companies({ menuCategories, setting }) {
  const [website, setWebsite] = useState("");
  const business = useSelector(
    (state) => state.business?.business,
    shallowEqual
  );
  const businessLoading = useSelector(
    (state) => state.business?.loading,
    shallowEqual
  );
  const router = useRouter();

  const { user } = business;
  useEffect(() => {
    if (user) {
      router.push("/business/panel");
    }
  }, [router, user]);

  return (
    <SiteLayout menuCategories={menuCategories} setting={setting}>
      {businessLoading && (
        <Modal
          keepMounted
          open={true}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              outline: "none",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: {
                md: "50%",
                xs: "100%",
              },
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // background:'white'
            }}
          >
            <CircularProgress
              style={{ width: "5%", height: "5%", color: "#fff", m: "auto" }}
            />
          </Box>
        </Modal>
      )}
      <HeaderInn website={website} setWebsite={setWebsite} />
    </SiteLayout>
  );
}
export async function getServerSideProps() {
  let menuCategories;
  let setting;

  const layoutData = await fetchLayoutData();

  menuCategories = layoutData?.categories;
  setting = layoutData?.setting;

  return {
    props: {
      menuCategories,
      setting,
    },
  };
}

export default Companies;
