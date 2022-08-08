import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// imported file
import Todos from "./Todos";
import NewToDo from "./NewToDo";
import style from "./apphome.module.css";
import ShowMessage from "./ShowMessage";

// const AppHome = () => {
//   const [todos, setTodos] = useState([]);
//   const [isModalOpen, setIsmodalOpen] = useState(false);
//   const [modalText, setModalText] = useState("");

//   const handleOntodo = (container) => {
//     setTodos((previousTodos) => {
//       return [...previousTodos, { id: uuidv4(), ...container }];
//     });

//     // showing message for adding todo
//     setIsmodalOpen(true);
//     return (
//       setTimeout(() => {
//         setIsmodalOpen(false);
//       }, 1000),
//       setModalText("Todo is added")
//     );
//   };

//   // deleting item
//   const handleonRemoveItem = (id) => {
//     // const filterTodos = todos.filter((todo) => todo.id !== id);
//     // setTodos(filterTodos);

//     // anothear way
//     setTodos((previousTodos) => {
//       const filterTodos = previousTodos.filter((todo) => todo.id !== id);
//       return filterTodos;
//     });

//     // showing message for removing todo
//     setIsmodalOpen(true);
//     return (
//       setTimeout(() => {
//         setIsmodalOpen(false);
//       }, 1000),
//       setModalText("Todo is removed")
//     );
//   };

//   return (
//     <div className={style.container}>
//       <h1 style={{ color: "white" }}>Todo App</h1>
//       <NewToDo onTodo={handleOntodo} />

//       <Todos
//         todos={todos}
//         addmsg={isModalOpen && modalText}
//         onRemoveItem={handleonRemoveItem}
//       />
//     </div>
//   );
// };

// export default AppHome;

// //////////////////////////////////
// practice
// ////////////////////////////////
const AppHome = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  // handleNewtodo
  const handleNewtodo = (newtodo) => {
    setTodos((previoustodo) => {
      return [...previoustodo, newtodo];
    });

    // showing added message
    setIsmodalOpen(true);
    return (
      setTimeout(() => {
        setIsmodalOpen(false);
      }, 1000),
      setModalText("To do is added")
    );
  };

  // handleRemoveid
  const handleRemoveid = (id) => {
    setTodos((previoustodo) => previoustodo.filter((todo) => todo.id !== id));

    // showing removing message
    setIsmodalOpen(true);
    return (
      setTimeout(() => {
        setIsmodalOpen(false);
      }, 1000),
      setModalText("Todo is removed")
    );
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "#fff" }}>Todo App</h1>
      <NewToDo newtodo={handleNewtodo} />
      <Todos
        todos={todos}
        removeId={handleRemoveid}
        msg={isModalOpen && modalText}
      />
    </div>
  );
};

export default AppHome;
