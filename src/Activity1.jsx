import { useState } from "react";
import "./Activity1.css";

function Activity1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === "" || password === "") {
      setMessage("Please enter username and password.");
    } else if (username === "admin" && password === "1234") {
      setMessage("Login successful!");
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setMessage("");
  };

  return (
    <div className="activity-container">

      <div className="activity-header">
        <div className="activity-number">1</div>

        <div>
          <p className="activity-label">ACTIVITY 1</p>
          <h1>Login Authentication</h1>
          <p className="activity-description">
            Sample Credentials: Username: admin | Password: 1234
          </p>
        </div>
      </div>

      <div className="login-card">

        {!isLoggedIn ? (
          <form onSubmit={handleLogin}>

            <h2>Login</h2>

            <div className="form-group">
              <label>Username</label>

              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter username"
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>

            {message && (
              <p className="error-message">
                {message}
              </p>
            )}

          </form>
        ) : (
          <div className="welcome-panel">

            <h2>Welcome, {username}!</h2>

            <p>Login successful!</p>

            <button
              onClick={handleLogout}
              className="logout-button"
            >
              Logout
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

export default Activity1;