import React from "react";

const Todo = (props) => {

  return (
    <div onClick={() => props.toggleItem(props.item.id)} >
        <h1>{props.item.description}</h1>
    </div>
  );
};

export default Todo;