import React, { Component } from "react";
import Card from "../../components/Card/CardContainer";
import { connect } from "react-redux";
import CardsWrapper from "../../components/CardsWrapper/CardsWrapper";

class Cards extends Component {
  renderCards() {
    return this.props.cardsToDisplay.map(card => {
      const { _id } = card;

      return <Card cardData={card} cardId={_id} key={_id} />;
    });
  }

  render() {
    return (
      <CardsWrapper showSpinner={this.props.loadingCards}>
        {this.renderCards()}
      </CardsWrapper>
    );
  }
}

const mapStateToProps = state => {
  const { cardsData, cardsDisplayed } = state.cards;
  return {
    loadingCards: state.cards.loading,
    // temporary
    cardsToDisplay: convertCardsIdsToCards(cardsDisplayed, cardsData)
  };
};

function convertCardsIdsToCards(cardsIds, cardsData) {
  return cardsIds.map(id => cardsData[id]);
}

export default connect(mapStateToProps)(Cards);
