import React, { forwardRef, useEffect, useState, useRef } from "react";
import Card from "../Card/CardContainer";
import { FixedSizeList as List } from "react-window";
import { CARDS_PADDING_TOP, CARD_HEIGHT } from "../../config";

const innerElementType = forwardRef(({ style, ...rest }, ref) => (
  <div
    ref={ref}
    style={{
      ...style,
      height: style.height + 2 * CARDS_PADDING_TOP
    }}
    {...rest}
  />
));

function RenderCards({ cards, isGlobalAudioPlay, currentlyActiveCardId }) {
  if (!cards) return null;

  const listRef = useRef(null);

  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    setCardIndex(0);
  }, [isGlobalAudioPlay]);

  useEffect(() => {
    listRef.current.scrollToItem(cardIndex, "center");
    setCardIndex(cardIndex => cardIndex + 1);
  }, [currentlyActiveCardId]);

  const listWidth = window.innerWidth;
  const listHeight = window.innerHeight;
  const listItemsCount = cards.length;
  const listItemSize = CARD_HEIGHT;
  const itemKey = (index, data) => {
    const card = data[index];
    return card._id;
  };

  return (
    <List
      height={listHeight}
      itemCount={listItemsCount}
      itemSize={listItemSize}
      width={listWidth}
      itemData={cards}
      itemKey={itemKey}
      innerElementType={innerElementType}
      ref={listRef}
    >
      {Card}
    </List>
  );
}

export default RenderCards;
