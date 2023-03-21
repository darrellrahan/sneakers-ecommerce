import React from "react";
import { useGlobalContext } from "../context";
import LgImage from "./LgImage";
import SmImage from "./SmImage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Lightbox() {
  const {
    isLightbox,
    setIsLightbox,
    currentLgImg,
    setCurrentLgImg,
    carouselIndex,
    setCarouselIndex,
    currentWidth,
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
    <div
      className={currentWidth > 1000 ? "lightbox-overlay" : ""}
      style={{ width: currentWidth < 1000 && "100%" }}
    >
      <div className="lightbox-ct">
        {currentWidth > 1000 && (
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
        )}
        <button
          className="prev"
          onClick={handlePrev}
          style={{
            pointerEvents: carouselIndex === 0 ? "none" : null,
            color: carouselIndex === 0 ? "#68707d50" : null,
          }}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="next"
          onClick={handleNext}
          style={{
            pointerEvents: carouselIndex === 3 ? "none" : null,
            color: carouselIndex === 3 ? "#68707d50" : null,
          }}
        >
          <IoIosArrowForward />
        </button>
        <LgImage src={currentLgImg.lightbox} />
        {currentWidth > 1000 && <SmImage type="lightbox" />}
      </div>
    </div>
  );
}

export default Lightbox;
