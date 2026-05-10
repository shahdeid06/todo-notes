import { useEffect, useState } from "react";
import "./timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [minutes, setMinutes] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [tasks, setTasks] = useState([]);



  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

 
  function formatTime() {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  function setCustomTime() {
    setSeconds(Number(minutes) * 60);
    setIsRunning(false);
  }

  function resetTimer() {
    setSeconds(minutes * 60);
    setIsRunning(false);
  }

  return (
    <div className="timer">
      <h2>Pomodoro Timer</h2>
      <div className="set-time">
        <input
          type="number"
          value={minutes}
          min="1"
          onChange={(e) => setMinutes(Number(e.target.value))}
        />
        <button onClick={setCustomTime}>Set Time</button>
      </div>

      <div className="time">{formatTime()}</div>

      <div className="timer-buttons">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
