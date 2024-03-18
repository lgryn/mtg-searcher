import { Card } from '../interfaces'
import Parser from './parser';

export default class MoxfieldParser extends Parser {
  getCards(): Card[] {
    const data = JSON.parse(this.document);
    const {cards} = data.boards.mainboard;

    return Object.keys(cards).map(key => ({
      name: cards[key].card.name,
      price: cards[key].card.prices.usd,
      amount: cards[key].quantity
    }));
  }
}
