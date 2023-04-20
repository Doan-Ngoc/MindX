import React, { useState } from "react";
import TodoItem from "../ToDoItem/ToDoItem";
import ToDoEditForm from "../ToDoEditForm/ToDoEditForm"
const TodoList = (props) => {
  const { todos, onTodoMarkComplete, onTodoDeleted, editedTodoId, handleTodoClick, submitEditedTodo } = props

  const todoListElement = todos &&
    todos.map((todoItem) => {
      if (todoItem.title) {
        return (
          <div key={todoItem.id} >
            {todoItem.id === editedTodoId ?
              <ToDoEditForm
                title={todoItem.title}
                id={todoItem.id}
                submitEditedTodo={submitEditedTodo}
                isCompleted={todoItem.isCompleted}
                onTodoMarkComplete={onTodoMarkComplete}
                onTodoDeleted={onTodoDeleted}
                handleTodoClick={handleTodoClick} />
              :
              <TodoItem
                isCompleted={todoItem.isCompleted}
                id={todoItem.id}
                title={todoItem.title}
                onTodoMarkComplete={onTodoMarkComplete}
                onTodoDeleted={onTodoDeleted}
                handleTodoClick={handleTodoClick} />
            }
          </div>
        )
      }
    })
  return (
    <div className="m-auto" style={{ width: "50%" }}>
      {todoListElement}
    </div>
  )
}

export default TodoList;
