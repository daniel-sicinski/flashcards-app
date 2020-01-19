import React, { Component } from "react";
import Card from "../../components/Card/CardContainer";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

class Cards extends Component {
  renderCards() {
    return this.props.cardsToDisplay.map(card => {
      const { _id } = card;

      return <Card cardData={card} cardId={_id} key={_id} />;
    });
  }

  renderSpinner = () => (
    <div className="cards-spinner-box">
      <CircularProgress style={{ color: "#d3b06a" }} />
    </div>
  );

  render() {
    return (
      <div className="cards">
        {this.props.loadingCards ? this.renderSpinner() : this.renderCards()}
      </div>
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
