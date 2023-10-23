import './App.css';
import PlayCard from "./playCard/playCard";
import {useState} from "react";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";

function App() {
    const [cards, setCards] = useState<Card[]>([]);

    const deckCards = () => {
        const deck = new CardDeck();
        const deckCard = deck.getCards(5);
        return setCards(deckCard);
    };

    if (cards.length === 0) {
        return (
            <div>
                <button type='button' onClick={deckCards}>Раздать карты</button>
            </div>
        )
    } else {
        return (
            <div className="playingCards faceImages">
                <PlayCard rank={cards[0].rank} suit={cards[0].suit}></PlayCard>
                <PlayCard rank={cards[1].rank} suit={cards[1].suit}></PlayCard>
                <PlayCard rank={cards[2].rank} suit={cards[2].suit}></PlayCard>
                <PlayCard rank={cards[3].rank} suit={cards[3].suit}></PlayCard>
                <PlayCard rank={cards[4].rank} suit={cards[4].suit}></PlayCard>
                <div>
                    <button type='button' onClick={deckCards}>Раздать карты</button>
                </div>
            </div>
        )
    }
}

export default App
