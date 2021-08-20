import React, {Component, useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import TaskForm from './TaskForm'
import TaskList from './TaskList'


export default function TodoApp() {
 
  const [todos, setTodos] = useState([]);
  const handleSubmit = (title) => {
    const payload = {
      title,
      id: todos.length + 1
    }

    fetch("/tasks", {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(payload)
    }).then((res) => res.json()).then((res) => {
      setTodos([...todos, res]);
    }).catch((err) => {
      alert(err.message);
    })
    
  }

  useEffect(() => {
    fetch("/tasks").then((res) => {
      return res.json();
    }).then((res) => {
      setTodos(res);
    }).catch((err) => {
      //err
    })
  }, []);
    return (
      <Router>
        <div className="container-fluid text-center">
          <header className="p-2">
            <h1>Tasks</h1>
            <TaskForm onSubmit={ handleSubmit }/>
          </header>
          <section className="mt-2">
            <TaskList todos={todos}/>
          </section>
        </div>
      </Router>
    )
  
}