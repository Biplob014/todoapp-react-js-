import React from "react";
// imported file
import Todo from "./Todo";
import style from "./todos.module.css";
import ShowMessage from "./ShowMessage";

const Todos = (props) => {
  const handleRemoveId = (id) => {
    props.removeId(id);
  };
  return (
    <section className={style.todos}>
      {props.msg && <ShowMessage msg={props.msg} />}
      {props.todos.map((todo) => (
        <Todo todo={todo} key={todo.id} removeId={handleRemoveId} />
      ))}
    </section>
  );
};

export default Todos;
