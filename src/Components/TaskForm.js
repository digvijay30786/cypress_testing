import React, { useState } from 'react'

const TaskForm = (props) => {
  
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(text);
    setText("");
  }
  return (<form onSubmit={handleSubmit}>
    <input
      type='text'
      autoFocus
      onChange={(e) => setText(e.target.value)}
      value={text}
      className="p-2 rounded border task-input"
      placeholder="Add something?" />
  </form>)
}
  export default TaskForm