import React from "react";
import { useGlobalContext } from "../context";
import DetailsArea from "./DetailsArea";
import ImagesArea from "./ImagesArea";
import Lightbox from "./Lightbox";

function Section() {
  const { currentWidth } = useGlobalContext();

  return (
    <section>
      {currentWidth > 1000 ? <ImagesArea /> : <Lightbox />}
      <DetailsArea />
    </section>
  );
}

export default Section;
