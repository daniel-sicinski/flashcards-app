class CardsService {
  constructor(CardModel) {
    this.CardModel = CardModel;
    this.getCards = this.getCards.bind(this);
  }

  getCards() {
    return this.CardModel.find({});
  }
}

module.exports = CardsService;
