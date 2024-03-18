import { Card } from '../interfaces'
import Parser from './parser';
import * as cheerio from 'cheerio';

export default class MtgGoldfishParser extends Parser {
  getCards(): Card[] {
    const document = cheerio.load(this.document);
    const tableRows = document('#tab-paper .deck-view-deck-table tr')
      .not('.deck-category-header')

    tableRows.each((i, row) => {
      const column = document(row).find('td')
      this.cards.push({
        amount: column.first().text().trim(),
        name: column.has('span.card_name').text().trim(),
        price: column.last().text().trim(),
      })
    })

    return this.cards
  }
}
