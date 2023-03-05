import React from "react";
import { useGlobalContext } from "../context";
import { productImages } from "../data";

function SmImage({ type }) {
  const { currentLgImg, setCurrentLgImg } = useGlobalContext();

  function Image({ smImgSrc, lgImgSrc }) {
    const smImg = require(`../assets/images/${smImgSrc}`);
    const lgImg = require(`../assets/images/${lgImgSrc}`);

    return (
      <img
        src={smImg}
        alt="preview"
        className={
          type === "section"
            ? currentLgImg.section === lgImg
              ? "active"
              : null
            : currentLgImg.lightbox === lgImg
            ? "active"
            : null
        }
        onClick={() => setCurrentLgImg({ ...currentLgImg, [type]: lgImg })}
      />
    );
  }

  return (
    <div className="sm-img-wrapper">
      {productImages.map((data) => (
        <Image key={data.id} smImgSrc={data.smImg} lgImgSrc={data.lgImg} />
      ))}
    </div>
  );
}

export default SmImage;
