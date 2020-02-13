import React, { useState } from "react";
import { Slide } from "material-auto-rotating-carousel";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

const CustomSlide = withStyles({
  root: {
    "& div[class^=Slide-mediaBackground]": {
      height: "100%",
      backgroundColor: "transparent"
    },
    "& div[class^=Slide-text]": {
      width: "0",
      height: "0"
    }
  }
})(Slide);

export default function FlashcardSlide() {
  const [cardFlipped, setCardFlip] = useState(false);

  const innerCardClasses = cardFlipped
    ? ["slide__card-inner", "slide__card-inner--flipped"]
    : ["slide__card-inner"];

  const slideContent = (
    <div className="slide__content">
      <div
        className="slide__flip-card"
        onClick={() => setCardFlip(flipped => !flipped)}
      >
        <div className={innerCardClasses.join(" ")}>
          <div className="slide__card-front">
            <span className="slide__word">Słowo</span>
            <Divider style={{ width: "100%", margin: "2rem 0" }} />
            <p className="slide__sentence">
              To będzie jakieś zdanie na temat słowa u góry.
            </p>
          </div>
          <div className="slide__card-back">
            <span className="slide__word">Word</span>
            <Divider style={{ width: "100%", margin: "2rem 0" }} />
            <p className="slide__sentence">
              This will be some sentence about the word that is above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <CustomSlide
      media={slideContent}
      mobile
      subtitle=""
      style={{ backgroundColor: "transparent", width: "100%", height: "40rem" }}
      title=""
    ></CustomSlide>
  );
}
