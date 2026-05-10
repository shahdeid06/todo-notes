function TodoItem({
  task,
  deleteTask,
  toggleDone,
  edit,
}) {
  return (
    <div
      className={`item ${task.done ? "done" : ""}`}
    >
      <div className="checkbox">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleDone(task.id)}
        />

        <span onClick={() => toggleDone(task.id)}>{task.text}</span>
      </div>

      <div className="buttons">
        <button className="edit" onClick={() => edit(task.id)}>
          Edit
        </button>

        <button className="delete" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
