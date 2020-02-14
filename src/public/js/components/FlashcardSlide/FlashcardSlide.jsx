import React, { useState } from "react";
import { Slide } from "material-auto-rotating-carousel";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

const CustomSlide = withStyles({
  root: {
    "& > div:first-child": {
      height: "100%",
      backgroundColor: "transparent"
    },
    "& > div:nth-of-type(2)": {
      width: "0",
      height: "0"
    }
  }
})(Slide);

export default function FlashcardSlide({
  polWord,
  polSen,
  engWord,
  engSen,
  invertedSlides
}) {
  const [cardFlipped, setCardFlip] = useState(false);

  const innerCardClasses = cardFlipped
    ? ["slide__card-inner", "slide__card-inner--flipped"]
    : ["slide__card-inner"];

  const frontExpressions = {
    word: invertedSlides ? polWord : engWord,
    sentence: invertedSlides ? polSen : engSen
  };

  const backExpressions = {
    word: invertedSlides ? engWord : polWord,
    sentence: invertedSlides ? engSen : polSen
  };

  const slideContent = (
    <div className="slide__content">
      <div
        className="slide__flip-card"
        onClick={() => setCardFlip(flipped => !flipped)}
      >
        <div className={innerCardClasses.join(" ")}>
          <div className="slide__card-front">
            <span className="slide__word">{frontExpressions.word}</span>
            <Divider style={{ width: "100%", margin: "2rem 0" }} />
            <p className="slide__sentence">{frontExpressions.sentence}</p>
          </div>
          <div className="slide__card-back">
            <span className="slide__word">{backExpressions.word}</span>
            <Divider style={{ width: "100%", margin: "2rem 0" }} />
            <p className="slide__sentence">{backExpressions.sentence}</p>
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
