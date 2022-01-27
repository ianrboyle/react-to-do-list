import React from "react";
import CalculatorSquare from "./CalculatorSquare";
const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(4, 1fr) / repeat(3, 1fr)",
};
const Grid = ({ squares, onClick }) => {
  return (
    <div style={style}>
      {squares.map((square, i) => {
        return <CalculatorSquare key={i} value={square} onClick={() => onClick(i)} />;
      })}
    </div>
  );
};

export default Grid;
