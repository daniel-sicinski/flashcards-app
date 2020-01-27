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
        return this.props.setDisplayedCards(this.props.cardsIds);
      case "/playlists/new":
        return this.props.activateSelectState();
    }
  }

  render() {
    return (
      <CardsWrapper showSpinner={this.props.loadingCards}>
        <RenderCards cards={this.props.cards} />
      </CardsWrapper>
    );
  }
}

const mapStateToProps = state => {
  const { cardsData } = state.cards;
  console.log(Object.values(cardsData));
  return {
    loadingCards: state.cards.loading,
    cardsIds: Object.keys(cardsData),
    cards: Object.values(cardsData)
  };
};

export default connect(mapStateToProps, {
  setDisplayedCards,
  activateSelectState
})(Cards);
