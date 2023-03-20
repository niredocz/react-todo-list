export default function Task({ taskNameValue, inputChange, btnDelete, id }) {
  return (
    <div className="result">
      <input
        className="result-text"
        type="text"
        value={taskNameValue}
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
