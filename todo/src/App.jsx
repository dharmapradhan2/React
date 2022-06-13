import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import List from "./Components/List";
export default function App() {
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState();
  function getList() {
    let list = JSON.parse(localStorage.getItem("Todo"))
      ? JSON.parse(localStorage.getItem("Todo"))
      : [];
    if (list) {
      return list;
    }
    // console.log(todoLists);
  }
  const [todoLists, setTodoLists] = useState(getList());
  useEffect(() => {
    let list = JSON.parse(localStorage.getItem("Todo"))
      ? JSON.parse(localStorage.getItem("Todo"))
      : [];
    list.push(todoLists);
    localStorage.setItem("Todo", JSON.stringify(todoLists));
  }, [todoLists]);
  return (
    <div className="app container-fluid">
      <div className="body">
        <Header
          input={input}
          setInput={setInput}
          todoLists={todoLists}
          setTodoLists={setTodoLists}
          edit={edit}
          setEdit={setEdit}
        />
        <List
          todoLists={todoLists}
          setTodoLists={setTodoLists}
          setEdit={setEdit}
        />
      </div>
    </div>
  );
}