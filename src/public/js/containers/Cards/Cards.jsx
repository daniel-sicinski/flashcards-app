import React, { Component } from "react";
import Card from "../../components/Card/CardContainer";
import { connect } from "react-redux";
import CardsWrapper from "../../components/CardsWrapper/CardsWrapper";
import { setDisplayedCards } from "../../store/actions/cardsActions";
import RenderCards from "../../components/RenderCards/RenderCards";

class Cards extends Component {
  componentDidMount() {
    this.props.setDisplayedCards(this.props.cardsIds);
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

  return {
    loadingCards: state.cards.loading,
    cardsIds: Object.keys(cardsData),
    cards: Object.values(cardsData)
  };
};

export default connect(mapStateToProps, {
  setDisplayedCards
})(Cards);
