import './App.css';
import Header from './components/Header';
import Navbar from "./components/Navbar";
import Timer from './components/Timer/Timer';
import Todo from './components/Todo/Todo';
import Weather from './components/Weather/Weather';
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Notes from './components/Notes/Notes';

function App() {

  return (
    <div className="app-container">
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/timer" element={<Timer/>} />
          <Route path="/notes" element={<Notes/>} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
