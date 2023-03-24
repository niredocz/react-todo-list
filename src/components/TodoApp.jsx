import React, { useEffect, useState } from "react"
import Task from "./Task"
import "./TodoApp.css"

function TodoApp() {
  // const [todoList, setTodoList] = useState([])
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("todoList")

    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })

  const [newTask, setNewTask] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setNewTask(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newTask !== "") {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        // id: todoList.length + 1,
        taskName: newTask.trim(),
      }

      const newTodoList = [...todoList, task]
      setTodoList(newTodoList)
    } else {
      alert("mohon todo harus diisi !")
    }
    setNewTask("")
  }

  const handleDelete = (id) => {
    const removeItem = todoList.filter((newTask) => newTask.id !== id)

    setTodoList(removeItem)
  }

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList))
  }, [todoList])

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
        {todoList.map((newTask, i) => {
          return (
            <Task
              key={i}
              id={newTask.id}
              taskNameValue={newTask.taskName}
              inputChange={handleChange}
              btnDelete={() => handleDelete(newTask.id)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TodoApp
