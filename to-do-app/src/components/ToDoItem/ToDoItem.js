import React from "react";

const TodoItem = (props) => {
  const { isCompleted, id, title, onTodoMarkComplete, onTodoDeleted, handleTodoClick } = props

  return (<div className="d-flex align-items-center gap-4 mb-3 p-3" style={{ backgroundColor: "#f5f5f5" }} >
    <input type="checkbox" checked={isCompleted}
      onChange={() => onTodoMarkComplete(id)} />
    <div >
      <span className=" fs-5 me-3"
        onClick={() => handleTodoClick(id)}
        style={{ textDecoration: isCompleted ? 'line-through' : 'none', wordWrap: 'break-word' }}>{title}</span>
    </div>
    <div className="ms-auto d-flex gap-2">
      <button className=" ms-auto btn btn-warning fs-6" onClick={() => onTodoDeleted(id)}>✖</button>
    </div>
  </div>)
};

export default TodoItem;
