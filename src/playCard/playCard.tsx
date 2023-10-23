import React from "react";

interface Props {
    rank: string;
    suit: string;
}

const PlayCard: React.FC<Props> = ({rank, suit}) => {
    let result: string = '';
    if (suit === 'diams') {
        result = '♦';
    } else if (suit === 'hearts') {
        result = '♥';
    } else if (suit === 'clubs') {
        result = '♣';
    } else if (suit === 'spades') {
        result = '♠';
    }
    return (
        <span className={`card rank-${rank} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{result}</span>
        </span>
    );
};

export default PlayCard;