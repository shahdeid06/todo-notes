import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context";
import App from "../App";
// import "./header.css";


function Header() {

  // const tasks = 12;
  // const timer = "25:00";
  // const weather = "24°C";

  const {tasks , notes} = useContext(AppContext);

  return (
    <header className="header">

      <div className="header-text">
        <h1>
          Organize Your Day <span>Smarter</span>
        </h1>

        <p>
          Manage your tasks, notes, timer and weather
          all in one modern dashboard.
        </p>

        <button ><Link to="/todo" className="get-start">Get Started</Link></button>
      </div>

      <div className="header-image">
        <div className="circle">

          <div className="mini-card">
            <h3>{tasks.length} Tasks</h3>
            <p>All Tasks</p>
          </div>

          {/* <div className="mini-card">
            <h3>{timer}</h3>
            <p>Focus Timer</p>
          </div>
          */}

          <div className="mini-card">
            <h3>{notes.length}</h3>
            <p>Notes must remeber them</p>
          </div> 

        </div>
      </div>

    </header>
   
  );
}

export default Header;