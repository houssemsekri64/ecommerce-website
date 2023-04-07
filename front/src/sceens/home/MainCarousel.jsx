import React, { useCallback, useMemo, Suspense } from "react";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { shades } from "../../theme";
import Image from "../../components/Image";

// imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

function MainCarousel() {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // Use useMemo to prevent re-rendering the component on every render
  const memoizedCarouselProps = useMemo(() => {
    return {
      infiniteLoop: true,
      showThumbs: false,
      showIndicators: false,
      showStatus: false,
      autoPlay: true,
      renderArrowPrev: (onClickHander, hasPrev, label) => {
        return (
          <IconButton
            onClick={onClickHander}
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              color: "white",
              padding: "50px",
              zIndex: "10000",
            }}
          >
            <NavigateBefore sx={{ fontSize: "40px" }} />
          </IconButton>
        );
      },
      renderArrowNext: (onClickHander, hasNext, label) => {
        return (
          <IconButton
            onClick={onClickHander}
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              color: "white",
              padding: "50px",
              zIndex: "10",
            }}
          >
            <NavigateNext sx={{ fontSize: "40px" }} />
          </IconButton>
        );
      },
    };
  }, []);

  // Use useCallback to memoize the image rendering function
  const memoizedRenderImage = useCallback(
    (texture, index) => (
      <Box key={`carousel-img-${index}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Box key={`carousel-img-${index}`}>
            <Image
              src={texture}
              alt={`carousel-${index}`}
              width="100%"
              height="700px"
              ImageStyle={{
                objectFit: "cover",
                backgroundAttachment: "fixed",
              }}
            />
            <Box
              color="white"
              padding={"20px"}
              borderRadius={"1px"}
              textAlign={"left"}
              bgcolor="rgba(0,0,0,0.4)"
              position={"absolute"}
              top={"46%"}
              left={isNonMobile ? "10%" : "0"}
              right={isNonMobile ? undefined : "0"}
              margin={isNonMobile ? undefined : "auto 0"}
              maxWidth={isNonMobile ? undefined : "240px"}
            >
              <Typography color={shades.secondary[200]}>
                {" "}
                --New items
              </Typography>
              <Typography variant="h1"> Summer sales</Typography>
              <Typography
                fontWeight="bold"
                color={shades.secondary[300]}
                sx={{ textDecoration: "underline" }}
              >
                {" "}
                Discover more
              </Typography>
            </Box>
          </Box>
        </Suspense>
      </Box>
    ),
    [isNonMobile]
  );

  return (
    <Carousel {...memoizedCarouselProps}>
      {Object.values(heroTextureImports).map((texture, index) =>
        memoizedRenderImage(texture, index)
      )}
    </Carousel>
  );
}

export default MainCarousel;
