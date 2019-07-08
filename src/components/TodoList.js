import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const TodoList = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [todo, setTodo] = useState([]);
  const [checkList, setcheckList] = useState([]);

  if (!localStorage.getItem('auth')) {
    return <Redirect to='/' />;
  }

  const logout = () => {
    localStorage.removeItem('auth');
    setIsAuthenticated(true);
  };

  const addTodo = () => {
    setTodo([...todo, document.getElementById('newTodo').value]);
    document.getElementById('newTodo').value = '';
  };

  const removeTodo = e => {
    setTodo(todo.filter((item, index) => e.target.id != index));
    e.stopPropagation();
  };

  const removeCheckTodo = e => {
    setcheckList(checkList.filter((item, index) => e.target.id != index));
    e.stopPropagation();
  };

  const checkTodo = e => {
    setTodo(todo.filter((item, index) => e.target.id != index));
    setcheckList([
      ...checkList,
      ...todo.filter((item, index) => e.target.id == index)
    ]);
  };

  const unCheckTodo = e => {
    setcheckList(checkList.filter((item, index) => e.target.id != index));
    setTodo([
      ...todo,
      ...checkList.filter((item, index) => e.target.id == index)
    ]);
  };

  return (
    <div className='todo'>
      <div className='todoContainer'>
        <input
          type='button'
          className='btn-logout'
          value='Logout'
          onClick={logout}
        />
        <h1>TODO LIST</h1>
        <ul>
          {todo.map((item, index) => (
            <li key={index}>
              <div className='todoItemContainer'>
                <h4 className='todoItem' onClick={checkTodo} id={index}>
                  🗹{item}
                </h4>
                <input
                  className='btnTodo'
                  type='button'
                  value='x'
                  onClick={removeTodo}
                  id={index}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className='addItem'>
          <input
            type='button'
            className='btn-logout'
            value='+'
            onClick={addTodo}
          />
          <input type='text' placeholder='Add a new todo...' id='newTodo' />
        </div>
        <ul>
          {checkList.map((item, index) => (
            <li key={index}>
              <div className='todoItemContainer'>
                <h4 className='todoItemCheck' onClick={unCheckTodo} id={index}>
                  🗹{item}
                </h4>
                <input
                  className='btnTodo'
                  type='button'
                  value='x'
                  onClick={removeCheckTodo}
                  id={index}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
