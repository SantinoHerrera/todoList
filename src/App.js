import React, { Fragment, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import NotFound from './components/NotFound';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className='container'>
      {}
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/todoList' component={TodoList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
