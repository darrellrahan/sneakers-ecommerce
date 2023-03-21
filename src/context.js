import React, { useContext, useState, useEffect } from "react";
import product1Lg from "./assets/images/image-product-1.jpg";

const GlobalContext = React.createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function AppProvider({ children }) {
  const [isLightbox, setIsLightbox] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [currentLgImg, setCurrentLgImg] = useState({
    section: product1Lg,
    lightbox: product1Lg,
  });
  const [transaction, setTransaction] = useState({
    amount: 0,
    finalAmount: 0,
  });
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  // get window dimensions
  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth;
      setCurrentWidth(newWidth);
      setIsLightbox(newWidth < 1000 ? true : false);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <GlobalContext.Provider
      value={{
        isLightbox,
        setIsLightbox,
        currentLgImg,
        setCurrentLgImg,
        isCart,
        setIsCart,
        transaction,
        setTransaction,
        carouselIndex,
        setCarouselIndex,
        currentWidth,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
