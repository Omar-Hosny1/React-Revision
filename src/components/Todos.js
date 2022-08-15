import React from "react";
import TodoItem from "./TodoItem";

function Todos(props) {
  const hour = new Date();
  const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/").toString();
  const Todos = props.todos.map((todo) => (
    <TodoItem
      text={todo.text}
      id={todo.id}
      key={todo.id}
      date={date}
      hours={
        hour.getHours() > 12
          ? `${hour.getHours() % 12} pm`
          : `${hour.getHours() % 12} am`
      }
      onDelete={props.onDelete}
      onEdit={props.onEdit}
    />
  ));

  return <div>{Todos}</div>;
}

export default Todos;
