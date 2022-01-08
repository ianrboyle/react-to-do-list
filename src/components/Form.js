import React, { useState } from "react";

function Form() {
  const [item, setItem] = useState("");

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleClick() {
    setItem(item);
  }

  return (
    <div className="form">
      <input onChange={handleChange} value={item} type="text" />
      <button onClick={handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default Form;
