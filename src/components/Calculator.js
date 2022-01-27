import React, { useState } from "react";
import "../styles.css";

const style = {
  background: "lightblue",
  border: "2px solid darkblue",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
  padding: "10px",
  margin: "3px",
};

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if ((ops.includes(value) && calc === "") || (ops.includes(value) && ops.includes(calc.slice(-1)))) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
    console.log(calc);
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} style={style} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="calc-grid">
      <p>Calculator</p>
      <div className="output">
        {result ? <span>({result})</span> : ""}
        {calc || "0"}
      </div>
      <div className="operators">
        <button onClick={deleteLast} style={style}>
          AC
        </button>
        <button onClick={() => updateCalc("+")} style={style}>
          +
        </button>
        <button onClick={() => updateCalc("-")} style={style}>
          -
        </button>
        <button onClick={() => updateCalc("*")} style={style}>
          *
        </button>
        <button onClick={() => updateCalc("/")} style={style}>
          /
        </button>
        <button style={style}>0</button>
        <button style={style}>.</button>
        <button onClick={calculate} style={style}>
          =
        </button>
      </div>
      {createDigits()}
    </div>
  );
};

export default Calculator;
