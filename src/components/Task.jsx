export default function Task({ taskNameValue, inputChange, btnDelete, id }) {
  return (
    <div className="result">
      <h2 style={{ color: "#fff", marginBottom: 0 }}>{id}</h2>
      <input
        className="result-text"
        type="text"
        defaultValue={taskNameValue}
        onChange={inputChange}
      />
      <button
        type="button"
        onClick={btnDelete}
        style={{ cursor: "pointer", padding: 10 }}>
        X
      </button>
    </div>
  )
}
