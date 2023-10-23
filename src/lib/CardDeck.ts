import Card from "./Card";

class CardDeck {
    cards: Card[]

    constructor() {
        this.cards = [];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
        const suits = ['hearts', 'diams', 'clubs', 'spades'];
        for (let i = 0; i < ranks.length; i++) {
            for (let j = 0; j < suits.length; j++) {
                this.cards.push(new Card(ranks[i], suits[j]));
            }
        }

    }

    getCard(): Card {
        const delCard = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(delCard, 1)[0];
    }

    getCards(howMany: number): Card[] {
        const cards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        }
        return cards;
    }
}

export default CardDeck;