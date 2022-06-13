// import { useEffect } from "react";
export default function List({ todoLists, setTodoLists, setEdit }) {
  function editBtn(item) {
    let h = todoLists.filter((data) => data.id === item);
    // console.log(h[0]);
    setEdit(h[0]);
  }
  function deleteList(item) {
    // console.log(item);
    setTodoLists(todoLists.filter((data, index) => index !== item));
    // console.log(todoLists);
  }
  return (
    <div className="task_lists">
      {todoLists.map((item, index) => {
        return (
          <div
            className="input-group justify-content-center d-flex input-group-sm"
            key={index}
          >
            <input
              type="text"
              name="text"
              id=""
              value={item.text}
              className="form-control form-control-sm m-1 "
              readOnly
              disabled
            />
            <button
              className="btn btn-outline-warning m-1"
              onClick={() => editBtn(item.id)}
            >
              Edit
            </button>

            <button
              className="btn btn-outline-danger m-1"
              onClick={() => deleteList(index)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}