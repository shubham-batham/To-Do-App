import { useState } from "react";

const ToDoList = () => {
  let [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [editing, setEditing] = useState({});
  const render = () => {
    setList((prevList) => [
      ...prevList,
      { title: input, id: new Date().getTime() },
    ]);
    setInput("");
  };
  const Remove = (id) =>
    setList((prevState) => prevState.filter((data) => data.id !== id));

  const edit = (e) => {
    const { value } = e.target;
    console.log(value);
    setEditing((prevState) => {
      return {
        ...prevState,
        title: value,
      };
    });
  };

  const onUpdate = () => {
    setList((prevState) =>
      prevState.map((data) => {
        if (data.id === editing.id) {
          return editing;
        }
        return data;
      })
    );
    setEditing({});
  };
  console.log("list", list);
  console.log("rerender")
  return (
    <div className="containar">
      <div className="input-box">
        <input
          type="text"
          name="todo"
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={render} className="button">
          ADD
        </button>
      </div>
      <p className="heading">To Do List</p>
      <div className="List">
        {list.map((data, index) => {
          return editing.id === data.id ? (
            <div key={data.id}>
              <input type="text" value={editing.title} onChange={edit} />
              <button onClick={onUpdate}>save</button>
            </div>
          ) : (
            <div className="output" key={data.id}>
              <span className="title">{data.title}</span>
              <button className="button1" onClick={() => Remove(data.id)}>
                Delete
              </button>
              <button className="button1" onClick={() => setEditing(data)}>
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ToDoList;







    

  