import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {

  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if(savedTasks){
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));

    if(savedNotes){
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,
        notes,
        setNotes
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;