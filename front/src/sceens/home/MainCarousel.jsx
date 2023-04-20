import React, { useCallback } from "react";
import { Box, useMediaQuery } from "@mui/material";

import Image from "../../components/ui/Image";
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
  require.context("../../assets/carousel", false, /\.(png|jpe?g|svg)$/)
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
          <Image
            src={texture}
            alt={`carousel-${index}`}
            width="100%"
            height={isNonMobile ? "800px" : "500px"}
            ImageStyle={{
              objectFit: "cover",
              backgroundAttachment: "fixed",
              width: "100%",
            }}
          />
        </Box>
      </Box>
    ),
    [isNonMobile]
  );

  return (
    <Slider className="over-follow-hidden" {...settings}>
      {Object.values(heroTextureImports).map((texture, index) =>
        memoizedRenderImage(texture, index)
      )}
    </Slider>
  );
}

export default MainCarousel;
