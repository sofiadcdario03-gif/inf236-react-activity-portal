import React, { useState } from "react";

function AttendanceChecker() {

  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [result, setResult] = useState(null);


  function checkAttendance() {

    if (employeeName === "" || timeIn === "") {
      setResult({
        status: "Error",
        message: "Please enter employee name and time in."
      });
      return;
    }

    let time = Number(timeIn);

    if (isNaN(time)) {
      setResult({
        status: "Error",
        message: "Please enter a valid time."
      });
    }

    else if (time <= 8) {
      setResult({
        status: "On Time",
        message: "Status: On Time – Good job!"
      });
    }

    else if (time > 8 && time <= 9) {
      setResult({
        status: "Late",
        message: "Status: Late – Please be on time tomorrow."
      });
    }

    else if (time > 9) {
      setResult({
        status: "Very Late",
        message: "Status: Very Late – Report to your supervisor."
      });
    }

  }


  function reset() {
    setEmployeeName("");
    setTimeIn("");
    setResult(null);
  }


  return (
    <div>

      <h1>Employee Attendance Checker</h1>

      <input
        type="text"
        placeholder="Employee Name"
        value={employeeName}
        onChange={(e)=>setEmployeeName(e.target.value)}
      />


      <input
        type="number"
        placeholder="Time In (Example: 8.5 = 8:30 AM)"
        value={timeIn}
        onChange={(e)=>setTimeIn(e.target.value)}
      />


      <button onClick={checkAttendance}>
        Check Attendance
      </button>


      <button onClick={reset}>
        Reset
      </button>



      {result && (
        <div>

          <h2>Result</h2>

          <p>Employee Name: {employeeName}</p>

          <p>Time In: {timeIn}</p>

          <p>Attendance Status: {result.status}</p>

          <p>{result.message}</p>

        </div>
      )}

    </div>
  );
}


export default AttendanceChecker;