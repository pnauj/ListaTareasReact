import { useState } from "react";

export default function TodoApp() {
  const [tittle, setTittle] = useState("hola");
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
        completed: false
    }

    const temp = [... todos];
    temp.unshift(newTodo)
    setTodos(temp);
  }


  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={tittle} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="create todo"
          className="buttonCreate"
        />
      </form>
    </div>
  );
}
