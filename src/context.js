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
  const [transaction, setTransaction] = useState({
    amount: 0,
    finalAmount: 0,
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
