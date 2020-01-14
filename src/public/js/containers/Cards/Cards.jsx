import React, { Component } from "react";
import Card from "../../components/Card";

export default class Cards extends Component {
  state = {
    cards: []
  };
  // expressions = {
  //   engWord: "doing",
  //   polWord: "robić",
  //   engSen: "I've been coding all morning",
  //   polSen: "Kodowałem cały ranek"
  // };
  // expressions2 = {
  //   engWord: "to read",
  //   polWord: "czytać",
  //   engSen: "He reads a lot",
  //   polSen: "On dużo czyta"
  // };

  componentDidMount() {
    fetch("/api/v1/cards")
      .then(res => res.json())
      .then(res => {
        this.setState({
          cards: res.data.cards
        });
        console.log(res.data.cards);
      })
      .catch(e => console.log(e));
  }

  renderCards() {
    return this.state.cards.map(card => {
      const { expressions } = card;

      return <Card expressions={expressions} key={card._id} />;
    });
  }

  render() {
    return <div className="cards">{this.renderCards()}</div>;
  }
}
