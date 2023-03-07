import React from "react";
import { useGlobalContext } from "../context";

function LgImage({ src }) {
  const {
    isLightbox,
    setIsLightbox,
    currentLgImg,
    setCurrentLgImg,
    setCarouselIndex,
  } = useGlobalContext();

  function handleClick() {
    setIsLightbox(true);
    setCurrentLgImg({ ...currentLgImg, lightbox: src });
    setCarouselIndex(Number(src[28]) - 1);
  }

  return (
    <div className="lg-img-wrapper">
      <img
        src={src}
        alt="preview"
        style={{ pointerEvents: isLightbox ? "none" : null }}
        onClick={handleClick}
      />
    </div>
  );
}

export default LgImage;
