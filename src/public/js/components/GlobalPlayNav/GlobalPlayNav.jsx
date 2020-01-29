import React from "react";
import NavOption from "../NavOption/NavOption";

export default function GlobalPlayNav({ playSelectedTracks }) {
  return (
    <>
      <NavOption onClickCb={() => playSelectedTracks("all")}>
        Odtwórz wszystkie
      </NavOption>
      <NavOption onClickCb={() => playSelectedTracks("words")}>
        Odtwórz słówka
      </NavOption>
      <NavOption onClickCb={() => playSelectedTracks("sentences")}>
        Odtwórz zdania
      </NavOption>
    </>
  );
}
