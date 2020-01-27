import React, { forwardRef } from "react";
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

export default function RenderCards({ cards }) {
  if (!cards) return null;

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
    >
      {Card}
    </List>
  );
}
