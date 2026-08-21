import { useState } from "react";
import "./Activity3.css";

function Activity3() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckPassword = () => {
    if (password === "") {
      setStrength("");
      setMessage("Please enter a password.");
    } else if (password.length < 6) {
      setStrength("weak");
      setMessage("Status: Weak – Create a stronger password.");
    } else if (password.length >= 6 && password.length <= 9) {
      setStrength("medium");
      setMessage("Status: Medium – Consider a longer password.");
    } else {
      setStrength("strong");
      setMessage("Status: Strong – You can use this password.");
    }
  };

  const handleClear = () => {
    setPassword("");
    setStrength("");
    setMessage("");
  };

  const getStrengthIndicator = () => {
    if (strength === "weak") {
      return (
        <div className="strength-indicator">
          <div className="strength-bar weak"></div>
          <div className="strength-bar"></div>
          <div className="strength-bar"></div>
        </div>
      );
    } else if (strength === "medium") {
      return (
        <div className="strength-indicator">
          <div className="strength-bar medium"></div>
          <div className="strength-bar medium"></div>
          <div className="strength-bar"></div>
        </div>
      );
    } else if (strength === "strong") {
      return (
        <div className="strength-indicator">
          <div className="strength-bar strong"></div>
          <div className="strength-bar strong"></div>
          <div className="strength-bar strong"></div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="activity-container">

      <div className="activity-header">
        <div className="activity-number">3</div>

        <div>
          <p className="activity-label">ACTIVITY 3</p>
          <h1>Password Strength Checker</h1>
          <p className="activity-description">
            Classify a password by length as Weak, Medium, or Strong.
          </p>
        </div>
      </div>

      <div className="password-card">

        <h2>Password Checker</h2>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
          />
          <p className="character-count">
            {password.length} character{password.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="button-group">
          <button
            onClick={handleCheckPassword}
            className="check-button"
          >
            Check Password
          </button>

          <button
            onClick={handleClear}
            className="clear-button"
          >
            Clear
          </button>
        </div>

        {message && (
          <div className="result-panel">
            <h3>Password Status</h3>
            <p className="strength-message">{message}</p>
            {getStrengthIndicator()}
          </div>
        )}

      </div>

    </div>
  );
}

export default Activity3;
