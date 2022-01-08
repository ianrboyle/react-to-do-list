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
  function deleteItem(id) {
    console.log("trying to dlete");
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
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
          {items.map((todoItem, index) => (
            <Items key={index} id={index} text={todoItem} completed={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Form;
