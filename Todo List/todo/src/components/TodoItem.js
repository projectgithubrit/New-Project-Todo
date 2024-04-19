import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../Redux/todoSlice';
import './TodoItem.css';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span style={{ textDecoration: 'none' }}>
        {todo.text}
      </span>
      {todo.completed && <button1 onClick={handleDelete}>Delete</button1>}
    </li>
  );
};

export default TodoItem;