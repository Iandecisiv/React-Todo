import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {

  return (
    <div>
      {props.items.map((item) => (
        <React.Fragment>
         <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
         <button onClick={props.clearDone}>Clear done</button>
</React.Fragment>
      ))}
    </div>
  );
};

export default TodoList;