import { useState } from "react";
import Card from "../Card/card";
import "./Grid.css";
function Grid(numberOfCards) {
  const [turn, setTurn] = useState(true); // false X , true 0

  function play() {
    console.log("move played");
    setTurn(!turn);
  }

  return (
    <>
      <h1 className="turn-highlight">Current turn: {turn ? "0" : "X"}</h1>
      <div className="grid">
        {Array(numberOfCards)
          .fill(<Card />)
          .map((el, idx) => {
            return (
              <Card
                onPlay={play}
                player={turn ? "circle" : "cross"}
                key={idx}
              />
            );
          })}
      </div>
    </>
  );
}

export default Grid;
