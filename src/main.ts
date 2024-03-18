import axios from 'axios';
import MtgGoldfishParser from './lib/parsers/mtggoldfish-parser';
import MoxfieldParser from './lib/parsers/moxfield-parser';
import config from './config/default';

const run = async () => {
  const response = await axios.get('https://www.mtggoldfish.com/deck/6082516#paper');
  const mtgGoldfishParser = new MtgGoldfishParser(response.data);
  const cards = mtgGoldfishParser.getCards();

  const wishListResponse = await axios.get(`https://api2.moxfield.com/v3/decks/all/${config.wishListId}`, {responseType: 'text'});
  const moxfiledParser = new MoxfieldParser(wishListResponse.data);
  const wishListCards = moxfiledParser.getCards();

  const result = cards.filter(card => {
    return wishListCards.some(wishListCard => {
      return card.name === wishListCard.name
    })
  })

  console.log('result2', result);
}

run();
