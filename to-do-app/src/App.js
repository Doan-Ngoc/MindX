import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  //Thêm Todo Item
  const onAddNewTodo = (todoTitle) => {
    // Step 1: Create new todoItem
    const newTodo = {
      title: todoTitle,
      isCompleted: false,
      id: uuidv4(),
    };
    const nextTodoList = [...todoList, newTodo];
    setTodoList(nextTodoList);
  };

  // Cập nhật trạng thái hoàn thành
  const onTodoMarkComplete = (todoId) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    })
    setTodoList(updatedTodoList)
    setEditedTodoId(null)
  };

  // Delete todoItem
  const onTodoDeleted = (todoID) => {
    const newTodoList = todoList.filter(todoItem => todoItem.id !== todoID)
    setTodoList(newTodoList)
  }

  //Make editing form appear when clicking on todo item
  const [editedTodoId, setEditedTodoId] = useState(null)
  function handleTodoClick(todoId) {
    setEditedTodoId(todoId)
  }

  //Submit todoItem editing form
  const submitEditedTodo = (todoID, todoTitle) => {
    const newTodoList = todoList.map(todo => {
      if (todoID === todo.id) {
        return {
          ...todo,
          title: todoTitle,
        }
      }
      else { return todo }
    })
    setTodoList(newTodoList)
    setEditedTodoId(null)
  }

  return (
    <div className="container">
      <h1 className="text-center my-5">TODO LIST</h1>
      <TodoForm onAddNewTodo={onAddNewTodo}
        handleTodoClick={handleTodoClick} />
      <TodoList
        todos={todoList}
        onTodoMarkComplete={onTodoMarkComplete}
        onTodoDeleted={onTodoDeleted}
        submitEditedTodo={submitEditedTodo}
        editedTodoId={editedTodoId}
        handleTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;



/*Cách 2 để cập nhật trạng thái hoàn thành:
    const onTodoMarkComplete = (todoID) => {
    const completedTodo = todoList.find(todoItem => todoItem.id === todoID)
    const indexOfCompletedTodo = todoList.indexOf(completedTodo)
    const newTodoList = [...todoList]
    newTodoList[indexOfCompletedTodo].isCompleted = !todoList[indexOfCompletedTodo].isCompleted
    setTodoList(newTodoList)
    setEditedTodoId(null)
  };*/