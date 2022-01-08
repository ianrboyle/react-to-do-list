import React, { useState } from "react";
import Items from "./Items";

function Form() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newInput = event.target.value;
    setInputText(newInput);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  return (
    <div>
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <Items text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Form;
