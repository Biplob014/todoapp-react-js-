import React from "react";
import { FaTrashAlt } from "react-icons/fa";
// imported file
import style from "./todo.module.css";

const Todo = (props) => {
  const { id, title, desc } = props.todo;

  const handleOnclick = () => {
    props.removeId(id);
  };
  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <button className={style.btn} onClick={handleOnclick}>
        <FaTrashAlt size={23} />
      </button>
    </article>
  );
};

export default Todo;
