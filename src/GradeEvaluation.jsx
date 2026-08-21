import { useState } from "react";
import "./GradeEvaluation.css";

function GradeEvaluation() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  const [remarks, setRemarks] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [displayScore, setDisplayScore] = useState("");

  const handleEvaluate = () => {
    const trimmedName = studentName.trim();
    const numericScore = Number(score);

    if (trimmedName === "") {
      setRemarks("Please enter the student name.");
      setDisplayName("");
      setDisplayScore("");
    } else if (score === "" || isNaN(numericScore)) {
      setRemarks("Please enter a valid numeric score.");
      setDisplayName("");
      setDisplayScore("");
    } else if (numericScore < 0 || numericScore > 100) {
      setDisplayName(trimmedName);
      setDisplayScore(score);
      setRemarks("Invalid score");
    } else if (numericScore >= 90 && numericScore <= 100) {
      setDisplayName(trimmedName);
      setDisplayScore(score);
      setRemarks("Excellent");
    } else if (numericScore >= 85 && numericScore <= 89) {
      setDisplayName(trimmedName);
      setDisplayScore(score);
      setRemarks("Very Good");
    } else if (numericScore >= 80 && numericScore <= 84) {
      setDisplayName(trimmedName);
      setDisplayScore(score);
      setRemarks("Good");
    } else if (numericScore >= 75 && numericScore <= 79) {
      setDisplayName(trimmedName);
      setDisplayScore(score);
      setRemarks("Passed");
    } else {
      setDisplayName(trimmedName);
      setDisplayScore(score);
      setRemarks("Failed");
    }
  };

  const handleClear = () => {
    setStudentName("");
    setScore("");
    setRemarks("");
    setDisplayName("");
    setDisplayScore("");
  };

  const getRemarksClass = () => {
    if (remarks === "Excellent" || remarks === "Very Good" || remarks === "Good") {
      return "remarks remarks-passed";
    } else if (remarks === "Passed") {
      return "remarks remarks-passed";
    } else if (remarks === "Failed") {
      return "remarks remarks-failed";
    } else {
      return "remarks remarks-error";
    }
  };

  return (
    <div className="activity-container">

      <div className="activity-header">
        <div className="activity-number">2</div>

        <div>
          <p className="activity-label">ACTIVITY 2</p>
          <h1>Grade Evaluation</h1>
          <p className="activity-description">
            Enter a student's name and score to evaluate their grade remarks.
          </p>
        </div>
      </div>

      <div className="grade-card">

        <h2>Student Evaluator</h2>

        <div className="form-group">
          <label>Student Name</label>
          <input
            type="text"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
            placeholder="Enter student name"
          />
        </div>

        <div className="form-group">
          <label>Score</label>
          <input
            type="number"
            value={score}
            onChange={(event) => setScore(event.target.value)}
            placeholder="Enter score (0-100)"
          />
        </div>

        <div className="button-group">
          <button
            onClick={handleEvaluate}
            className="evaluate-button"
          >
            Evaluate
          </button>

          <button
            onClick={handleClear}
            className="clear-button"
          >
            Clear
          </button>
        </div>

        {remarks && (
          <div className="result-panel">
            <h3>Evaluation Result</h3>

            {displayName && (
              <div className="result-row">
                <span className="result-label">Student Name:</span>
                <span className="result-value">{displayName}</span>
              </div>
            )}

            {displayScore && (
              <div className="result-row">
                <span className="result-label">Score:</span>
                <span className="result-value">{displayScore}</span>
              </div>
            )}

            <div className="result-row">
              <span className="result-label">Remarks:</span>
              <span className={getRemarksClass()}>{remarks}</span>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default GradeEvaluation;
