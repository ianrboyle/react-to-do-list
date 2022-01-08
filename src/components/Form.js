import React, { useState } from "react";
import Items from "./Items";

function Form(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newInput = event.target.value;
    setInputText(newInput);
  }

  return (
    <div>
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button
          onClick={() => {
            props.onAdd(inputText);
            setInputText("");
          }}
        >
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}

export default Form;
