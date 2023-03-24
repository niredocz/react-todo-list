import React, { useState } from "react"
import Task from "./Task"
import "./TodoApp.css"

function TodoApp() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setNewTask(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newTask !== "") {
      const task = {
        // id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        id: todoList.length + 1,
        taskName: newTask,
      }

      const newTodoList = [...todoList, task]
      setTodoList(newTodoList)
    }
    setNewTask("")
  }

  const handleDelete = (id) => {
    const deleteTodoList = todoList.filter((todo) => todo.id !== id)

    setTodoList(deleteTodoList)
  }

  return (
    <div className="todo-wrap">
      <h1 style={{ marginBottom: 30 }}>Todo App</h1>
      <form autoComplete="off">
        <input
          type="text"
          id="input-form"
          value={newTask}
          onChange={handleChange}
          placeholder="Input Todo List ..."
        />
        <button onClick={handleSubmit}>+ Add Task</button>
      </form>

      <div className="list-todo">
        <h2 style={{ marginBottom: 30 }}>Todo List</h2>
        {todoList.map((todoName, i) => {
          return (
            <Task
              key={i}
              id={todoName.id}
              taskNameValue={todoName.taskName}
              inputChange={handleChange}
              btnDelete={() => handleDelete(todoName.id)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TodoApp
