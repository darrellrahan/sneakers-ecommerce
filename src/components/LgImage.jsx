import React from "react";
import { useGlobalContext } from "../context";

function LgImage({ src }) {
  const { isLightbox, setIsLightbox, currentLgImg, setCurrentLgImg } =
    useGlobalContext();

  function handleClick() {
    setIsLightbox(true);
    setCurrentLgImg({ ...currentLgImg, lightbox: src });
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
