import React, { useState } from "react";
import Grid from "./Grid";
const Calculator = () => {
  const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const handleClick = {};
  return (
    <div>
      <p>Calculator</p>
      <Grid squares={squares} onClick={handleClick} />
    </div>
  );
};

export default Calculator;
