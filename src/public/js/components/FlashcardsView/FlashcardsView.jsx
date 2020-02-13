import React from "react";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
import { withStyles } from "@material-ui/core/styles";
import FlashcardSlide from "../FlashcardSlide/FlashcardSlide";

const AutoRotatingCarouselHOC = isDesktop => {
  const carouselMobileStyling = {
    paddingTop: "20rem"
  };
  const carouselDesktopStyling = {
    paddingTop: "10rem",
    width: "40%",
    margin: "0 auto"
  };

  return withStyles({
    root: {
      zIndex: "0 !important",
      "& div.MuiBackdrop-root": {
        backgroundColor: "transparent"
      },
      "& div.MuiPaper-root": {
        borderRadius: "0",
        boxShadow: "none"
      },
      "& div[class^=AutoRotatingCarousel-content]": isDesktop
        ? carouselDesktopStyling
        : carouselMobileStyling
    }
  })(AutoRotatingCarousel);
};

export default function FlashcardsView({ isDesktop }) {
  const CustomAutoRotatingCarousel = AutoRotatingCarouselHOC(isDesktop);
  return (
    <CustomAutoRotatingCarousel
      mobile={!isDesktop}
      open
      autoplay={false}
      style={{ zIndex: "auto !important" }}
    >
      <FlashcardSlide></FlashcardSlide>
      <FlashcardSlide></FlashcardSlide>
      <FlashcardSlide></FlashcardSlide>
    </CustomAutoRotatingCarousel>
  );
}
