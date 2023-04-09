import React, { useCallback, useMemo, Suspense } from "react";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { shades } from "../../theme";
import Image from "../../components/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    lazyload: true,
  };
  const memoizedRenderImage = useCallback(
    (texture, index) => (
      <Box key={`carousel-img-${index}`}>
        <Box key={`carousel-img-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              objectFit: "cover",
              backgroundAttachment: "fixed",
              width: "100%",
              height: "900px",
            }}
          />
        </Box>
      </Box>
    ),
    [isNonMobile]
  );

  return (
    <Slider {...settings}>
      {Object.values(heroTextureImports).map((texture, index) =>
        memoizedRenderImage(texture, index)
      )}
    </Slider>
  );
}

export default MainCarousel;
