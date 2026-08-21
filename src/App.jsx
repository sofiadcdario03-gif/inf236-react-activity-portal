import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Navbar";
import Activity1 from "./Activity1";
import GradeEvaluation from "./GradeEvaluation";
import Activity3 from "./Activity3";
import Activity5 from "./Activity5";

function Home() {
  const activities = [
    {
      number: 1,
      title: "Login Authentication",
      description:
        "Validate a username and password against sample credentials and manage login/logout state.",
      path: "/activity1",
    },
    {
      number: 2,
      title: "Student Grade Evaluation",
      description:
        "Enter a student's score and get an automatic remark based on grade ranges.",
      path: "/activity2",
    },
    {
      number: 3,
      title: "Password Strength Checker",
      description:
        "Check password length and receive live feedback on how strong it is.",
      path: "/activity3",
    },
    {
      number: 4,
      title: "Electricity Bill Calculator",
      description:
        "Calculate a customer's electricity bill based on kWh consumption and tiered rates.",
      path: "/activity4",
    },
    {
      number: 5,
      title: "Employee Attendance Checker",
      description:
        "Check an employee's time-in and determine whether they are on time, late, or very late.",
      path: "/activity5",
    },
  ];

  return (
    <main className="home-container">

      <section className="home-hero">
        <h1>React Activity Portal</h1>

        <p>
          Five interactive React activities demonstrating state, events,
          conditional logic, validation, and calculations.
        </p>
      </section>

      <section className="activity-grid">
        {activities.map((activity) => (
          <div className="activity-card" key={activity.number}>

            <div className="activity-number">
              {activity.number}
            </div>

            <h2>{activity.title}</h2>

            <p>{activity.description}</p>

            <Link
              to={activity.path}
              className="open-activity-button"
            >
              Open Activity
            </Link>

          </div>
        ))}
      </section>

    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="page">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity1" element={<Activity1 />} />
          <Route path="/activity2" element={<GradeEvaluation />} />
          <Route path="/activity3" element={<Activity3 />} />
          <Route path="/activity5" element={<Activity5 />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;