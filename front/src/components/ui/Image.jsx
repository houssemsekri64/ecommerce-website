import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Image({ src, alt, ImageStyle, width, height, onClick }) {
  return (
    <LazyLoadImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      effect="blur"
      style={ImageStyle}
      onClick={onClick}
    />
  );
}

export default Image;
