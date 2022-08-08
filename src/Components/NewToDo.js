import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// imported file
import style from "./newtodo.module.css";
import ShowMessage from "./ShowMessage";

const NewToDo = (props) => {
  const [newTodo, setNewTodo] = useState({ title: "", desc: "" });
  const { title, desc } = newTodo;

  // handleChange
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewTodo((previousTodo) => {
      return { ...previousTodo, id: uuidv4(), [name]: value };
    });
  };

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    props.newtodo(newTodo);
    setNewTodo({ title: "", desc: "" });
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title :</label>
        <input
          type="text"
          placeholder="Add your todo title"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
          required
        />
      </div>

      <div className={style["form-field"]}>
        <label htmlFor="desc">Description :</label>
        <textarea
          type="text"
          placeholder="Enter your todo descripion"
          name="desc"
          value={desc}
          onChange={handleChange}
          id="desc"
          cols="2"
          rows="3"
        ></textarea>
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewToDo;
