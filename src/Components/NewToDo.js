import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// imported file
import style from "./newtodo.module.css";
import ShowMessage from "./ShowMessage";

// const NewToDo = (props) => {
//   const [user, setUser] = useState({ title: "", desc: "" });
//   const { title, desc } = user;

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;

//     setUser((oldTodo) => {
//       return { ...oldTodo, [name]: value };
//     });

//     // // another way
//     // if (name === "title") setUser({ title: value, desc });
//     // else if (name === "desc") setUser({ title, desc: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.onTodo(user);
//     setUser({ title: "", desc: "" });
//   };

//   return (
//     <form className={style.form} onSubmit={handleSubmit}>
//       <div className={style["form-field"]}>
//         <label htmlFor="title">Title :</label>
//         <input
//           type="text"
//           id="title"
//           placeholder="Enter your todo"
//           value={title}
//           name="title"
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div className={style["form-field"]}>
//         <label htmlFor="desc">Description :</label>
//         <textarea
//           type="text"
//           id="desc"
//           placeholder="Enter your description"
//           value={desc}
//           name="desc"
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Add todo</button>
//     </form>
//   );
// };
// export default NewToDo;

// //////////////////////////////////////
// practice
// ////////////////////////////////////
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
