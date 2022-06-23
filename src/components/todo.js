import { useState } from "react";

export default function Todo({ item, UpDate, Delete }) {
  const [isEdit, setEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.tittle);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }


    function handleClick(){
        UpDate(item.id, newValue);
        setEdit(false);
    };

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="TodoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button" onClick={handleClick}>Update</button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTittle"> {item.tittle}</span>
       
        <button className="button" onClick={() => setEdit(true)}>Edit</button>
        <button className="buttonDelete" onClick={(e)=> Delete(item.id)}>Delete</button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
