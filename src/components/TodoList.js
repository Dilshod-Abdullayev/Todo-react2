import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  return (
    <div className="lists">
      {todos.map((todo) => (
        <div className="todo-list" key={todo.id}>
          <h1 className="list" onChange={(e) => e.preventDefault()}>
            {todo.title}
          </h1>
          <div>
            <button className="change-btn" onClick={() => handleEdit(todo)}>
              (change
            </button>
            <button className="rem-btn" onClick={() => handleDelete(todo)}>
              -rem
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
