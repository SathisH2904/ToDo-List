import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({ text, id, isComplete, deleteTodo, Toggle }) => {
  return (
    <div className='tick-head'>
      <div onClick={() => Toggle(id)} className='header'>
        <img src={isComplete ? tick : not_tick} alt="Toggle Complete" />
        <p style={{ textDecoration: isComplete ? 'line-through' : 'none' }}>
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt="Delete Task"
        className='delete'
      />
    </div>
  );
};

export default TodoItems;
