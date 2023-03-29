import React, { useEffect, useState } from "react"
import Task from "./Task"
import "./TodoApp.css"

function TodoApp() {
  // const [todoList, setTodoList] = useState([])
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("todoStorage")

    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })

  const [newTask, setNewTask] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})

  const handleChange = (e) => {
    const value = e.target.value
    setNewTask(value)
  }

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, taskName: e.target.value })

    console.log(currentTodo)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newTask !== "") {
      const task = {
        // id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        id: todoList.length + 1,
        taskName: newTask.trim(),
      }

      const newTodoList = [...todoList, task]
      setTodoList(newTodoList)
    } else {
      alert("mohon todo harus diisi !")
    }
    setNewTask("")
  }

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todoList.map((newTask) => {
      return newTask.id === id ? updatedTodo : newTask
    })
    
    setIsEditing(false)
    setTodoList(updatedItem)
  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault()

    handleUpdateTodo(currentTodo.id, currentTodo)
  }

  function handleEdit(todo) {
    setIsEditing(true)
    setCurrentTodo({ ...todo })
  }

  const handleDelete = (id) => {
    const removeItem = todoList.filter((todo) => todo.id !== id)

    setTodoList(removeItem)
  }

  useEffect(() => {
    localStorage.setItem("todoStorage", JSON.stringify(todoList))
  }, [todoList])

  return (
    <div className="todo-wrap">
      {isEditing ? (
        <>
          <h1 style={{ marginBottom: 30 }}>Edit Todo App</h1>
          <form autoComplete="off" onSubmit={handleEditFormSubmit}>
            <input
              type="text"
              id="input-form"
              value={currentTodo.taskName}
              onChange={handleEditInputChange}
              placeholder="Input Todo List ..."
            />
            <button type="submit">+ Update</button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              style={{ backgroundColor: "red", color: "#fff" }}>
              x Cancel
            </button>
          </form>
        </>
      ) : (
        <>
          <h1 style={{ marginBottom: 30 }}>Todo App</h1>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <input
              type="text"
              id="input-form"
              value={newTask}
              onChange={handleChange}
              placeholder="Input Todo List ..."
            />
            <button type="submit">+ Add Task</button>
          </form>
        </>
      )}

      <div className="list-todo">
        <h2 style={{ marginBottom: 30 }}>Todo List</h2>
        {todoList.map((newTask, i) => {
          return (
            <Task
              key={newTask.id}
              // id={newTask.id}
              taskNameValue={newTask.taskName}
              inputChange={handleChange}
              btnEdit={() => handleEdit(newTask)}
              btnDelete={() => handleDelete(newTask.id)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TodoApp
