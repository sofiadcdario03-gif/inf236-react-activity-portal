import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Activity1 from "./Activity1";

function Home() {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <div className="activity-number">H</div>

        <div>
          <p className="activity-label">HOME</p>
          <h1>React Activity Portal</h1>
          <p className="activity-description">
            Select an activity from the navigation bar to get started.
          </p>
        </div>
      </div>
    </div>
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
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;