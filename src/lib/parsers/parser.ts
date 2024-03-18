import { Card } from '../interfaces'

export default abstract class Parser {
  document: string;
  cards: Card[];

  constructor(html: string) {
    this.document = html
    this.cards = []
  }

  abstract getCards(): Card[];
}
