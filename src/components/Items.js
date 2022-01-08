import React, { useState } from "react";

function Items(props) {
  return (
    <div
      onClick={() => {
        props.completed(props.id);
      }}
    >
      <li>
        {props.text} | <button>Task Complete</button>
      </li>
    </div>
  );
}

export default Items;
