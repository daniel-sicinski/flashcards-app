import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "./containers/Cards/Cards";
import AudioManager from "./containers/AudioManager";
import { fetchCardsStart } from "./store/actions/cardsActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchCardsStart();
  }

  render() {
    return (
      <>
        <Cards />
        <AudioManager />
      </>
    );
  }
}

export default connect(null, { fetchCardsStart })(App);
