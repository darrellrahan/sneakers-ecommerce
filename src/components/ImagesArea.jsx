import React from "react";
import { useGlobalContext } from "../context";
import LgImage from "./LgImage";
import SmImage from "./SmImage";

function ImagesArea() {
  const { currentLgImg } = useGlobalContext();

  return (
    <div className="images">
      <LgImage src={currentLgImg.section} />
      <SmImage type="section" />
    </div>
  );
}

export default ImagesArea;
