import React, { useState } from 'react'

import './TodoApp.css'

function TodoApp() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setNewTask(value)
  }

  const handleSubmit = () => {
    const newTodoList = [...todoList, newTask];

    setTodoList(newTodoList)
  }

  const handleDelete = (i) => {
    const deleteTodoList = todoList.filter((i) => {
      if (i === i) {
        return false
      } else {
        return true
      }
    })

    // setTodoList(deleteTodoList)

    console.log(deleteTodoList)
  }

  return (
    <div className='todo-wrap'>
      <form>
        <input type="text" id="input-form" onChange={handleChange} />
        <button type='button' onClick={handleSubmit}>Add Task</button>
      </form>

      <div className='list-todo'>
        {todoList.map((todoName, i) => {
          return (
            <div className='result' key={i}>
              <h1>
                {todoName}
              </h1>
              <button type='button' onClick={() => handleDelete(i)}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TodoApp