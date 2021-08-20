import React from 'react'

const TaskItem = props =>
  <li>
    <div >
      <label>
        {props.value}
      </label>
    </div>
  </li>

const TaskList = props =>
  <ul className="task-list">
    {props.todos.map(todo => <TaskItem value={todo.title}/>)}
  </ul>

export default TaskList