import React from "react";
import { useGlobalContext } from "../context";
import LgImage from "./LgImage";
import SmImage from "./SmImage";

function Lightbox() {
  const {
    isLightbox,
    setIsLightbox,
    currentLgImg,
    setCurrentLgImg,
    carouselIndex,
    setCarouselIndex,
  } = useGlobalContext();

  function handlePrev() {
    if (carouselIndex > 0) {
      const newIndex = carouselIndex - 1;
      setCarouselIndex(newIndex);
      setCurrentLgImg({
        ...currentLgImg,
        lightbox: require(`../assets/images/image-product-${newIndex + 1}.jpg`),
      });
    }
  }

  function handleNext() {
    if (carouselIndex < 4) {
      const newIndex = carouselIndex + 1;
      setCarouselIndex(newIndex);
      setCurrentLgImg({
        ...currentLgImg,
        lightbox: require(`../assets/images/image-product-${newIndex + 1}.jpg`),
      });
    }
  }

  if (!isLightbox) return;

  return (
    <div className="lightbox-overlay">
      <div className="lightbox-ct">
        <div className="close-btn">
          <button onClick={() => setIsLightbox(false)}>
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
            </svg>
          </button>
        </div>
        <div
          className="prev-wrapper"
          style={{ cursor: carouselIndex === 0 ? "not-allowed" : null }}
        >
          <button
            className="prev"
            onClick={handlePrev}
            style={{ pointerEvents: carouselIndex === 0 ? "none" : null }}
          >
            <svg
              width="12"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              stroke={carouselIndex === 0 ? "#68707d50" : "#1D2026"}
            >
              <path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" />
            </svg>
          </button>
        </div>
        <div
          className="next-wrapper"
          style={{ cursor: carouselIndex === 3 ? "not-allowed" : null }}
        >
          <button
            className="next"
            onClick={handleNext}
            style={{
              pointerEvents: carouselIndex === 3 ? "none" : null,
            }}
          >
            <svg
              width="13"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              stroke={carouselIndex === 3 ? "#68707d50" : "#1D2026"}
            >
              <path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" />
            </svg>
          </button>
        </div>
        <LgImage src={currentLgImg.lightbox} />
        <SmImage type="lightbox" />
      </div>
    </div>
  );
}

export default Lightbox;
