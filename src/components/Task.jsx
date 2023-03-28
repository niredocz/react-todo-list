export default function Task({
  taskNameValue,
  inputChange,
  btnEdit,
  btnDelete,
}) {
  return (
    <div className="result">
      <input
        className="result-text"
        type="text"
        defaultValue={taskNameValue}
        onChange={inputChange}
      />
      {/* <button
        type="button"
        onClick={btnEdit}
        className="btn-edit"
        style={{ cursor: "pointer", padding: 10 }}>
        ✔
      </button> */}
      <button
        type="button"
        onClick={btnEdit}
        className="btn-edit"
        style={{ cursor: "pointer" }}>
        Edit
      </button>
      <button
        type="button"
        onClick={btnDelete}
        style={{ cursor: "pointer", padding: 10 }}>
        X
      </button>
    </div>
  )
}
