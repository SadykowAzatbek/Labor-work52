import Card from './Card';

class PokerHand {
    cards: Card[];

    constructor(card: Card[]) {
        this.cards = card;
    }

    getOutcome() {
        const ranNum = Math.floor(Math.random() * this.cards.length);

        for (let i = 0; i > 2; i++) {
            const cardRes = this.cards[i].rank;

            if (cardRes === ranNum.toString()) {

            }
        }
    }
}

export default PokerHand;