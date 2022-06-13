import { useEffect, useRef } from "react";
function Header({ input, setInput, todoLists, setTodoLists, edit, setEdit }) {
  const inputField = useRef();
  let timeStamp = new Date().getUTCMilliseconds();
  function updateEdit(text, id) {
    const todo = todoLists.map((item) =>
      item.id === id ? { text, id } : item
    );
    setTodoLists(todo);
    setEdit();
  }
  useEffect(() => {
    if (edit) {
      // console.log("edit");
      setInput(edit.text);
      // to focus input field on click edit button
      inputField.current.focus();
    } else {
      // console.log("not edit");
      setInput("");
    }
  }, [setInput ,edit]);
  function inputHandler(e) {
    e.preventDefault();
    if (!edit) {
      input = input.trim();
      if (input !== "") {
        setTodoLists([{ text: input, id: timeStamp }, ...todoLists]);
        setInput("");
      }
    } else {
      updateEdit(input, edit.id);
    }
  }
  
  return (
    <div>
      <div className="h2 text-center text-white m-1">Todo-List App</div>
      <form
        className="form input_field input-group-md text-center p-3"
        onSubmit={inputHandler}
      >
        <input
          ref={inputField}
          type="text"
          name="input"
          id=""
          // data-count={todoLists.length}
          value={input}
          className="form-control-sm rounded-pill border border-primary"
          placeholder={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <input
          type="submit"
          value={edit ? "Save" : "Add List"}
          className="btn btn-primary p-1 m-1"
        />
      </form>
    </div>
  );
}

export default Header;