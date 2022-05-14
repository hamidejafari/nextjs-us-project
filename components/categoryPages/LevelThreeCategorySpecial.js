import * as React from "react";
import {
  Container,
  Grid,
  Typography,
  Breadcrumbs,
  Card,
  List,
  Stack,
  Box,
  Rating,
  CardContent,
  Divider,
} from "@mui/material";

// components

import HeaderInn from "../../components/best/HeaderInn";
import SidebarNew from "../../components/best/SidebarNew";
import ProductsNew from "../../components/best/ProductsNew";
import sxStyles from "../../styles/style";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Link from "next/link";
import LinksCards from "../../components/product/LinksCards";
import Breadcrumb from "../../utiles/RichSnippets/Breadcrumb";
import Carousel from "react-multi-carousel";
import BannerModal from "../BannerModal";
import ListPro from "../best/ListPro";
import CatSlider from "../best/CatSlider";
import Faq from "../best/Faq";

const toppro = {
  desktop: {
    breakpoint: { max: 5000, min: 990 },
    items: 6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 990, min: 570 },
    items: 3.5,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 570, min: 0 },
    items: 2.25,
    slidesToSlide: 1,
  },
};
const categorys = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 570 },
    items: 3.5,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 570, min: 0 },
    items: 2.5,
    slidesToSlide: 1,
  },
};

function LevelThreeCategorySpecial(props) {
  const { extraProducts, catParent, catBrands, topChilds, category } = props;

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: props?.hostname,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: catParent?.parentId?.title,
      item: props?.hostname + "/" + catParent?.parentId?.slug,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: catParent?.title,
      item: props?.hostname + "/" + catParent?.slug,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: category.title,
    },
  ];

  let myNumber = 90;

  const reviewsCountCal = (count, key) => {
    let kc = count;
    let c1 = 90;
    let c2 = 1.25;
    let c3 = 0.6;

    if (key % 2 === 1) {
      myNumber = myNumber * c2;
      kc = (3200 * myNumber) / 100;
    } else {
      myNumber = myNumber * c3;
      kc = (3200 * myNumber) / 100;
    }
    kc = Math.round(kc);

    if (key == 0) {
      kc = 3200;
    }

    return kc + count;
  };

  return (
    <div className={"w-100 bgGrayTwo best pro pb-5"}>
      <Breadcrumb
        items={breadcrumbItems}
        datePublished={category?.publishDate}
        dateModified={category?.publishDate}
      />
      <HeaderInn
        image={category?.headerImage}
        h1Content={
          category?.h1
            ? category?.h1?.replace("$year$", new Date().getFullYear())
            : category?.title?.replace("$year$", new Date().getFullYear())
        }
      />{" "}
      <Container>
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
          <Grid xs={12} className={"px-2 pb-3"}>
            <div role="presentation">
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  fontSize={15}
                  underline="hover"
                  color="inherit"
                  href="/"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <a>
                    <Typography display={"flex"} className={"pointer"}>
                      <HomeOutlinedIcon
                        className={"me-2 mb-1"}
                        fontSize="small"
                      />
                      Home
                    </Typography>
                  </a>
                </Link>
                <Link
                  fontSize={15}
                  underline="hover"
                  href={"/" + catParent?.parentId?.slug || "/"}
                >
                  <a>
                    <Typography display={"flex"} className={"pointer"}>
                      {catParent?.parentId?.title}
                    </Typography>
                  </a>
                </Link>
                <Link
                  fontSize={15}
                  underline="hover"
                  href={"/" + catParent?.slug || "/"}
                >
                  <a>
                    <Typography className={"pointer"} display={"flex"}>
                      {catParent?.title}
                    </Typography>
                  </a>
                </Link>
                <Typography color="text.primary" fontSize={15}>
                  {category.title}
                </Typography>
              </Breadcrumbs>
            </div>
          </Grid>

          {/* {Array.isArray(category?.description) &&
            category?.description?.length > 0 && (
              <Grid xs={12} className={"px-2 pb-3"}>
                <Card className={"p-2 rounded-0 shadow-none linksCard"}>
                  <List className={"py-0 px-1 scrolllink"}>
                    {category?.description?.map(
                      (item, index) =>
                        item.headerType === "h2" && (
                          <LinksCards
                            key={index}
                            title={item.header}
                            url={"#" + item.header + index}
                          />
                        )
                    )}
                  </List>
                </Card>
              </Grid>
            )} */}
          <Grid md={12} xs={12} className={"listpronewsd"}>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              arrows={true}
              responsive={toppro}
              ssr={true} // means to render carousel on server-side.
              infinite={false}
              autoPlay={false}
              focusOnSelect={false}
              autoPlaySpeed={7000}
              keyBoardControl={false}
              customTransition="all 1s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              className={"prod"}
            >
              {category?.products?.map((content, index) => (
                <ListPro
                  key={content._id?._id}
                  url={"/"+content._id?.slug}
                  number={index + 1}
                  name={content._id?.title}
                  image={content._id?.image}
                  reviewsCount={reviewsCountCal(
                    content?._id?.reviewsCount,
                    index
                  )}
                  overallRating={content._id?.star * 2}
                  websiteUrl={content?._id?.siteUrl}
                  reviewsUrl={"/"+content?._id?.slug}
                />
              ))}
            </Carousel>
          </Grid>
          <Grid md={3} xs={12} className={"p-2"} sx={sxStyles["sideDesk"]}>
            <SidebarNew
              topChilds={topChilds}
              category={category}
              catBrands={catBrands}
            />
          </Grid>
          <Grid md={9} xs={12} className={"product-info py-1"}>
            <Grid xs={12} className={"px-2 pb-4"}>
              <Typography variant="body1" component="div">
                The big booty craze is not going away any time soon, especially
                not when our favorite celebrities flash their magnificent butts
                on social media everyday! And now, you want to know the secret
                behind those bouncy booties because you finally figured they
                could not all have been born with those killer curves. <br />While
                there are a lot of different butt enhancement methods known to
                be effective, you probably want a way that gives you quick
                results and does not break the bank either. Well you are in
                luck! Here we have provided the best butt enhancement products
                available in the market.
              </Typography>
            </Grid>
            <ProductsNew category={category} products={category?.products} />
            <Grid xl={12} className={"p-2"}>
              <div>
                <Typography
                  variant="h5"
                  component={"h2"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  Top Butt Creams to Try in 2022
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  There are many different things to consider when it comes to
                  choosing the best products of a category. This list has been
                  provided for you through careful research to help you decide
                  which brand or product to choose based on your needs.
                  Qualities such as being cost effective, adequate, vegan,
                  <br />gluten free, cruelty free, nutrient-rich and free of harmful
                  chemicals have been taken into consideration as well as having
                  scientifically proven, organic and natural ingredients. Here,
                  our experts have analyzed various butt creams available on the
                  market and provided you with a list of the top butt creams to
                  try in 2022.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  component={"h2"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  Choosing The Best Butt Enhancement Product
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  The big booty craze is not going away any time soon,
                  especially not when our favorite celebrities flash their
                  magnificent butts on social media everyday! And now, you want
                  to know the secret behind those bouncy booties because you
                  finally figured they could not all have been born with those
                  killer curves. <br />While there are a lot of different butt
                  enhancement methods known to be effective, you probably want a
                  way that gives you quick results and does not break the bank
                  either. Well you are in luck! Read along to find the best butt
                  enhancement products in the market.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  component={"h3"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  CurvyPure Butt Enhancement Cream
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  The CurvyPure Butt Enhancement Cream is a reliable choice.
                  According to the feedback received from the consumers, after
                  regularly using the product, their hips have started to get
                  wider, curvier, and plumper and this leads to a better-looking
                  body shape. Also, CurvyPure has one of the most comprehensive
                  ingredients, compositions. <br />Apply a small amount of the cream
                  on your buttocks twice a day, once in the morning after your
                  bath and once before bedtime. For full absorption, massage
                  your CurvyPure cream gently on your buttocks.The process
                  usually starts with tightening the butt, and then the growth
                  phase begins. A rounder, firmer and shapelier butt is what you
                  get after using this product. Another point is that the skin
                  absorbs the lotion quickly and no stains are left on your
                  clothes. <br />CurvyPure is a potent buttocks augmentation lotion
                  that does a great butt plumping job and enhances your curves.
                  It&apos;s made to make flat, shapeless buttocks look firmer
                  and plumper. This is among the best butt enhancement products
                  out there based on customer reviews.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  component={"h3"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  Gluteboost Butt Enhancement Cream
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  The Gluteboost Butt Enhancement Cream is the ultimate solution
                  for women trying to get thicker, rounder and more sensual
                  behinds. Thanks to a technical blend of all-natural
                  ingredients engineered to help you get a bigger butt, the
                  Gluteboost Butt Enhancement Cream goes beyond lifting or
                  padded panties. <br />Get yours today to get the rounder, firmer and
                  more visible rear you&apos;ve always wanted. Apply the cream
                  to your butt and just relax! Natural butt plumping can be
                  achieved with the right exercises along with the help of
                  Gluteboost butt Enhancement. Everyone can benefit from a
                  30-day supply to grow a larger butt without even thinking
                  about butt enlargement surgery.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  component={"h3"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  Honeydew Products Butt Enhancement Cream
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  The “Honeydew Products” Butt Enhancement Cream is known for
                  the botanical ingredients it contains such as avocado oil and
                  cocoa butter. These ingredients increase the levels of
                  collagen to offer a bikini perfect butt. At the same time, the
                  presence of coconut oil, Shea butter, and other elements
                  provide softness and smoothness to your butt cheeks. <br />This butt
                  lifter cream stimulates fat cells and encourages the
                  production of collagen, so that your body plumps up in a
                  non-harmful way. Honeydew is a natural hip enlargement
                  treatment that is formulated to boost your butt. <br />It works in
                  conjunction with your body&apos;s natural form to help you
                  attain your ideal sexy appearance without the need for a butt
                  enlargement surgery. A good candidate for the list of best
                  butt enhancement products.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  component={"h3"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  Booty Magic Butt Enhancement Cream
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  Enhance your butt the fast, natural way! A Booty Magic Butt
                  Enhancement Cream bottle contains a two month supply of the
                  product with a unique mixture of effective butt enlargement
                  ingredients. <br />You will notice the results between 1-2 months,
                  with maximum, permanent results after 6 months of use. no
                  risky surgeries, or butt pads needed. The important thing is
                  that The Booty Magic Butt Enhancement Cream targets only the
                  butt, hips and thighs.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  component={"h3"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  IsoSensuals Butt Enhancement Cream
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  The potent active ingredients in the IsoSensuals curve cream
                  formula deliver optimum benefits quickly and safely. You can
                  rest assured that the formula can help you get your desired
                  results, and will just target your hips, thighs, and buttocks
                  with no gain weight as a result. <br />You should use the product
                  consistently to receive the greatest and longest-lasting
                  results. You can see the first signs of improvement in less
                  than a month. It is better to use them for at least six months
                  to ensure that the adjustments are consistent. You will get
                  the best results if you practice some strength training with
                  weights and eat a balanced diet. <br />Many customers have expressed
                  that they were pleased with IsoSensuals Curve buttocks
                  augmentation solutions. After a while, the combination of this
                  best butt enhancement&apos;s ingredients does wonders in
                  forming the curves you&apos;ve always wanted.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  component={"h3"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  Major Curves Butt Enhancement Cream
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  The Major Curves Butt Enhancement Cream is the best choice
                  when it comes to butt enhancement. Major Curves is a product
                  intended for ladies who want to naturally achieve a more
                  hourglass form. <br />The Major Curves formula works by helping your
                  body retain extra fat around your buttocks, hips, and thighs
                  through the use of natural estrogen-stimulating substances.
                  Estrogen is the hormone that promotes fat accumulation in the
                  buttocks and hips, as well as the hormone that causes curve
                  formation throughout puberty. <br />The amazing combination of
                  ingredients in Major Curves’ formulation makes it one of the
                  best butt enhancement products available. Major Curves Butt
                  Enhancement cream can help you have firm buttocks in no time!
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  component={"h3"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  Booty Perfect Butt Enhancement Cream
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  If you have ever dreamed of having a bigger butt, you are in
                  the right place. The Booty Perfect Butt Enhancement Cream is
                  as effective and less dangerous than surgeries and butt
                  injections. <br />This product is FDA certified and rarely any
                  negative or side effects have been reported after its use. If
                  you are looking for a product that guarantees great results,
                  has a 100 percent Money Back Guarantee, is affordable, has
                  great customer service and is safe and natural then Booty
                  Perfect is your best bet. <br />There&apos;s no need to put up with
                  that flat booty that&apos;s been bothering you with Booty
                  Perfect Butt Enhancement. You can put an end to all those
                  time-consuming and ineffective alternative procedures with
                  Booty Perfect butt augmentation creams.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  component={"h2"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  How to Choose a Buttocks Firming Solution?
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  There are many buttocks augmentation products and procedures
                  available and butt enhancement is one of the most common
                  methods of improving self-confidence and self-esteem. Thanks
                  to advances in aesthetic sciences, various methods are now
                  available. However, not all methods are free of side-effects.
                  The choice of buttock firming solution depends on the time and
                  money you want to spend.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  component={"h3"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  Surgery
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  Butt enhancement surgery is one that can help you achieve your
                  dream of having firmer and plumper buttocks. But the problem
                  is that it can cause various side-effects, and that is the
                  reason many people look for other non-invasive methods of
                  buttock augmentation and better butt enhancement strategies.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  component={"h3"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  Creams and Pills
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  The desire for a non-surgical method of butt enlargement
                  persuaded cosmetic companies to produce booty enhancement
                  products including creams and pills. When it comes to any type
                  of supplement, ingredients are crucial for having the best
                  butt enhancement. <br />You have to make sure the product contains
                  the right combination of proven ingredients shown to get the
                  results you desire, and you have to make sure it contains the
                  proper amount of each ingredient. Clinically-tested butt
                  enhancement products are the ones that are most effective in
                  providing the desired effects. Butt enhancement creams that
                  contain Voluplus or Volufiline get the best results. Both
                  Voluplus and Volufiline are non-hormonal ingredients extracted
                  from various plant extracts. <br />They help increase the production
                  of fatty tissues in the targeted area where they are applied,
                  and the best part is the results are permanent. You don’t get
                  temporary swelling with Voluplus and Volufiline; you get
                  permanent growth in fatty tissues, helping you get a bigger,
                  rounder booty.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  component={"h3"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  Butt Lift
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  Buttocks fillers are another way to go if you want to improve
                  the look of your butt. This is a minimally-invasive method
                  that is applied to the butt similar to the fillers used for
                  the face. The filler is mainly composed of hyaluronic acid
                  (HA) that is injected to the area to help lift the skin and
                  fat tissues for a better physique and a plumper butt. <br />This
                  buttocks augmentation method is done by a trained physician in
                  the field of aesthetic surgery. The expert starts the process
                  by a thorough examination of the butt area to find the best
                  location for the placement of fillers. The doctor will carry
                  out the procedure under local anesthesia. Typically, filler is
                  injected into the upper gluteal region to swell, lifting up
                  the gluteal area as well as the sub-gluteal crease. The filler
                  is injected to augment the dips as well if the lateral area
                  lacks volume.
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  In some cases, the person might need several sessions of
                  injection. The amount of HA injection in each session for each
                  buttocks should not exceed 30-40 ml. The result of the filler
                  injection is assessed while the patient is standing to achieve
                  symmetry. <br />The importance of disinfecting the injection
                  locations after the process cannot be overstated. It&apos;s
                  vital to tape the region in a triangle form to aid the
                  product&apos;s integration into the dermis.
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  Buttocks fillers are considered permanent, and the procedure
                  has a significant success rate. However, the full results take
                  three to six months to appear. Booty enhancement with silicone
                  and hyaluronic implants has been proven to be safe if done
                  properly. Furthermore, the after-care is also important for
                  achieving best results.
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  component={"h3"}
                  gutterBottom
                  fontWeight={"bolder"}
                >
                  Butt Lift Candidates
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  Butt augmentation is a very personal matter. You should do it
                  for yourself, not to satisfy the demands of others or to
                  conform to some ideal picture. The following people can be a
                  good candidate for a butt lift:
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  Those with loose soft tissues in the gluteal area of their
                  body People who cannot undergo surgery due to healing problems
                  Nonsmokers Those who are committed to keep their body shape
                  with nutrition and sports
                </Typography>
              </div>
            </Grid>
            {Array.isArray(category.faq) && category.faq.length > 0 && (
              <Grid xs={12} className={"px-2 py-3"}>
                <Typography
                  variant="h5"
                  component="h3"
                  className={"fw-bolder textSecondary mb-3"}
                >
                  FAQ
                </Typography>
                {category.faq?.map((faqcontent, index) => (
                  <Faq
                    key={index}
                    id={faqcontent._id}
                    expanded={faqcontent._id}
                    question={faqcontent.question}
                    response={faqcontent.answer}
                  />
                ))}
              </Grid>
            )}

            <Grid xs={12} className={"p-0"}>
              <Typography
                variant="h5"
                component="h3"
                className={"fw-bolder textSecondary mb-0 px-2 pt-4"}
              >
                Related Oral Care Categories
              </Typography>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                arrows={true}
                responsive={categorys}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                focusOnSelect={false}
                autoPlaySpeed={7000}
                keyBoardControl={false}
                customTransition="all 1s"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {topChilds?.map((content, index) => (
                  <CatSlider
                    key={index}
                    url={"/"+content.slug}
                    name={content.title}
                    image={content.icon}
                  />
                ))}
              </Carousel>
            </Grid>
          </Grid>

          <Grid xs={12} className={"p-2 m-auto"} sx={sxStyles["sideMob"]}>
            <SidebarNew
              topChilds={topChilds}
              category={category}
              catBrands={catBrands}
            />
          </Grid>
        </Grid>
      </Container>
      {category.bannerId &&
        (!category.bannerId.startDate ||
          new Date(category.bannerId.startDate) < new Date()) &&
        (!category.bannerId.expireDate ||
          new Date(category.bannerId.expireDate) > new Date()) && (
          <BannerModal banner={category.bannerId} />
        )}
    </div>
  );
}

export default LevelThreeCategorySpecial;
