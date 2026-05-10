import { useState, useEffect, useContext } from "react";
import TodoItem from "./TodoItem";
import { AppContext } from "../../Context";
import "./todo.css";

function Todo() {

  const { tasks, setTasks } = useContext(AppContext);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(handler);
  }, [search]);

  function addTask() {

    if (input.trim() === "") return;

    if (editId !== null) {

      setTasks(
        tasks.map((t) =>
          t.id === editId ? { ...t, text: input } : t
        )
      );

      setEditId(null);

    } else {

      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: input,
          done: false
        }
      ]);

    }

    setInput("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function editTask(id) {
    const task = tasks.find((t) => t.id === id);

    if (!task) return;

    setInput(task.text);
    setEditId(id);
  }

  function toggleDone(id) {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  }

  const filteredTasks = tasks.filter((task) =>
    task.text
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  );

  const activeCount = tasks.filter((t) => !t.done).length;

  return (
    <div className="todo">

      <h2>Todo List</h2>

      <input
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
      />

      <div className="input-box">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a task..."
        />

        <button onClick={addTask}>
          {editId !== null ? "Update" : "Add"}
        </button>

      </div>

      <h4 className="active-count">
        {activeCount} tasks left
      </h4>

      <div className="list">

        {filteredTasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              edit={editTask}
              deleteTask={deleteTask}
              toggleDone={toggleDone}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default Todo;