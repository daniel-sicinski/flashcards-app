import React, { Component } from "react";
import Card from "../../components/Card/CardContainer";
import { connect } from "react-redux";
import CardsWrapper from "../../components/CardsWrapper/CardsWrapper";
import {
  setDisplayedCards,
  activateSelectState
} from "../../store/actions/cardsActions";
import RenderCards from "../../components/RenderCards/RenderCards";

class Cards extends Component {
  componentDidMount() {
    this.dispatchActionBasedOnPath();
  }

  dispatchActionBasedOnPath() {
    const { pathname } = this.props.history.location;

    switch (pathname) {
      case "/":
        return this.props.setDisplayedCards(Object.keys(this.props.cardsData));
      case "/playlists/new":
        return this.props.activateSelectState();
    }
  }

  render() {
    return (
      <CardsWrapper showSpinner={this.props.loadingCards}>
        <RenderCards cards={this.props.cardsToDisplay} />
      </CardsWrapper>
    );
  }
}

const mapStateToProps = state => {
  const { cardsData, cardsDisplayed } = state.cards;
  return {
    loadingCards: state.cards.loading,
    cardsData,
    // temporary
    cardsToDisplay: convertCardsIdsToCards(cardsDisplayed, cardsData)
  };
};

function convertCardsIdsToCards(cardsIds, cardsData) {
  if (!cardsIds) return [];
  return cardsIds.map(id => cardsData[id]);
}

export default connect(mapStateToProps, {
  setDisplayedCards,
  activateSelectState
})(Cards);
