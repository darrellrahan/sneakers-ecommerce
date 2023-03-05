import React, { useContext, useState } from "react";
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

  return (
    <GlobalContext.Provider
      value={{
        isLightbox,
        setIsLightbox,
        currentLgImg,
        setCurrentLgImg,
        isCart,
        setIsCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
