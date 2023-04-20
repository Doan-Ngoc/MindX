import { useState } from "react";

const TodoForm = (props) => {
  const { id, handleTodoClick } = props
  const [title, setTitle] = useState("");
  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddNewTodo(title);
    setTitle("");
  };
  return (
    <div className="m-auto" style={{ width: "60%" }}>
      <form className="d-flex flex-column gap-5 my-5" onSubmit={onSubmitHandler}>
        <input
          className="form-control fs-5"
          name="title"
          value={title}
          onChange={onChangeHandler}
          onClick={() => handleTodoClick(id)}
          placeholder="I will do this *"
        />
        <div class="d-flex justify-content-center">
          <button class="btn btn-warning mx-auto fs-5" type="submit">Add + </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;