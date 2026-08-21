import { useState } from "react";
import "./Activity5.css";


function Activity5() {

  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");

  const [resultName, setResultName] = useState("");
  const [resultTime, setResultTime] = useState("");

  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");


  const checkAttendance = () => {

    if (employeeName.trim() === "" || timeIn === "") {

      setStatus("");
      setMessage("Please enter employee name and time in.");
      return;

    }


    const time = Number(timeIn);


    if (isNaN(time)) {

      setStatus("");
      setMessage("Please enter a valid time.");
      return;

    }


    setResultName(employeeName);
    setResultTime(timeIn);


    if (time <= 8) {

      setStatus("On Time");
      setMessage("Status: On Time - Good job!");

    }

    else if (time > 8 && time <= 9) {

      setStatus("Late");
      setMessage("Status: Late - Please be on time tomorrow.");

    }

    else {

      setStatus("Very Late");
      setMessage("Status: Very Late - Report to your supervisor.");

    }

  };



  const resetAttendance = () => {

    setEmployeeName("");
    setTimeIn("");

    setResultName("");
    setResultTime("");

    setStatus("");
    setMessage("");

  };



  return (

    <div className="activity5-page">


      <div className="activity5-header">


        <div className="activity5-number">
          5
        </div>


        <div>

          <p className="activity5-label">
            ACTIVITY 5
          </p>


          <h1>
            Employee Attendance Checker
          </h1>


          <p className="activity5-description">
            Classify employee time-in as On Time, Late, or Very Late.
          </p>


        </div>


      </div>





      <div className="attendance-card">


        <h2>
          Attendance Checker
        </h2>



        <label>
          Employee Name
        </label>


        <input

          type="text"

          placeholder="Enter employee name"

          value={employeeName}

          onChange={(e)=>setEmployeeName(e.target.value)}

        />





        <label>
          Time In
        </label>


        <input

          type="number"

          placeholder="Example: 8.5"

          value={timeIn}

          onChange={(e)=>setTimeIn(e.target.value)}

          step="0.1"

        />






        <div className="activity5-buttons">


          <button

            className="check-btn"

            onClick={checkAttendance}

          >

            Check Attendance

          </button>




          <button

            className="reset-btn"

            onClick={resetAttendance}

          >

            Reset

          </button>



        </div>






        {message && (

          <div className="attendance-result">


            <h3>
              Attendance Result
            </h3>


            <p>
              Employee Name: <b>{resultName}</b>
            </p>


            <p>
              Time In: <b>{resultTime}</b>
            </p>


            <p>
              Attendance Status: <b>{status}</b>
            </p>


            <p>
              {message}
            </p>



          </div>

        )}



      </div>


    </div>


  );

}


export default Activity5;