import React, { useState } from "react";
import Heading from "./Heading";
import Form from "./Form";
import Items from "./Items";

function App() {
  const [items, setItems] = useState([]);
  function addItem(inputText) {
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
    <div className="container">
      <Heading />
      <Form onAdd={addItem} />
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

export default App;
