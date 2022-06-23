import { useState } from "react";
import Todo from "./todo";
import './todoApp.css';

export default function TodoApp() {
  const [tittle, setTittle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setTittle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      tittle: tittle,
      completed: false,
    };

    const temp = [...todos];
    temp.unshift(newTodo);
    setTodos(temp);

    setTittle("");
  }

  function handleUpDate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.tittle = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={tittle} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create"
          className="buttonCreate"
        />
      </form>
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            UpDate={handleUpDate}
            Delete={handleDelete}
          />
        ))}
    </div>
  );
}

//video 00:54:00