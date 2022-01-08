import React, { useState } from "react";

function Items(props) {
  const [taskCompleted, setTaskCompleted] = useState(false);
  function strikeThrough() {
    setTaskCompleted((prevValue) => {
      return !prevValue;
    });
  }
  function unStrike() {
    setTaskCompleted(false);
  }
  return (
    <div>
      <li onClick={strikeThrough} style={{ textDecoration: taskCompleted ? "line-through" : null }}>
        {props.text}
      </li>
    </div>
  );
}

export default Items;
