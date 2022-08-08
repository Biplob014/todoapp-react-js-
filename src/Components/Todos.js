import React from "react";
// imported file
import Todo from "./Todo";
import style from "./todos.module.css";
import ShowMessage from "./ShowMessage";

// const Todos = (props) => {
//   // passing deleted object id to the Arary/home
//   const handleonRemoveItem = (id) => props.onRemoveItem(id);

//   return (
//     <section className={style.todos}>
//       <ShowMessage modalText={props.addmsg} />
//       {props.todos.map((todo) => (
//         <Todo todo={todo} key={todo.id} onRemoveItem={handleonRemoveItem} />
//       ))}
//     </section>
//   );
// };

// export default Todos;

// ////////////////////////////////
// practice
////////////////////////////////
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
