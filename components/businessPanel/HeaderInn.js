import { Box, Container, Typography, Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";

function HeaderInn({ website, setWebsite }) {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (website.includes(".")) {
      let currectWebsite = website.replace("http://", "");
      currectWebsite = currectWebsite.replace("https://", "");
      currectWebsite = currectWebsite.replace("www.", "");
      currectWebsite = currectWebsite.replace("/", "");

      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL +
            "/api/site/business/check/" +
            currectWebsite
        );

        if (response.data.exist) {
          router.push({
            pathname: "/business/auth/login",
            query: { email: response.data.email },
          });
        } else {
          router.push({
            pathname: "/business/auth/register",
            query: { website: currectWebsite },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box className={"headerCoupon headercompanies"}>
      <Container>
        <Grid container spacing={1} className={"w-100 m-0"}>
          <Grid
            item
            xl={10}
            lg={9}
            md={10}
            sm={11}
            xs={12}
            mx={"auto"}
            textAlign={"center"}
            className={"px-2"}
          >
            <Typography
              variant="h4"
              component="h1"
              className={"fw-bolder my-2"}
            >
              Turn reviews into traffic, sales, and customer loyalty.
            </Typography>
            <Typography
              variant="h6"
              component="div"
              fontSize={15}
              className={"my-2"}
            >
              Discover what the people who matter most are saying about your
              brand.
            </Typography>
          </Grid>
          <Grid
            item
            xl={6}
            lg={8}
            md={10}
            sm={12}
            xs={12}
            mx={"auto"}
            className={"px-2"}
          >
            <form onSubmit={handleSubmit}>
              <Box noValidate autoComplete="off" my={3}>
                <FormControl sx={{ width: "100%", position: "relative" }}>
                  <OutlinedInput
                    value={website}
                    onChange={(e) => {
                      setWebsite(e.target.value);
                    }}
                    placeholder="Enter your website (example.com)"
                    sx={{ borderRadius: 0 }}
                  />
                  <Button
                    type="submit"
                    sx={{ position: "absolute", top: 5, right: 5, bottom: 5 }}
                    className={"btnSb"}
                  >
                    See your star rating
                  </Button>
                </FormControl>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeaderInn;
