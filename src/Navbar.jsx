import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-inner">

        <NavLink to="/" className="navbar-brand">

          <div className="navbar-logo">
            R
          </div>

          <span>React Activity Portal</span>

        </NavLink>

        <div className="navbar-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/activity1"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Activity 1
          </NavLink>

          <NavLink
            to="/activity2"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Activity 2
          </NavLink>

          <NavLink
            to="/activity3"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Activity 3
          </NavLink>

          <NavLink
            to="/activity4"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Activity 4
          </NavLink>

          <NavLink
            to="/activity5"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Activity 5
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;