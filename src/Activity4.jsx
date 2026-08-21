import { useState } from "react";
import "./Activity4.css";

function Activity4() {
  const [customerName, setCustomerName] = useState("");
  const [consumption, setConsumption] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (customerName === "" || consumption === "") {
      alert("Please enter customer name and consumption.");
      return;
    }

    const kWh = parseFloat(consumption);
    let rate = 0;
    let totalBill = 0;

    if (kWh <= 100) {
      rate = 10;
      totalBill = kWh * 10;
    } else if (kWh <= 200) {
      rate = 12;
      totalBill = kWh * 12;
    } else if (kWh <= 300) {
      rate = 15;
      totalBill = kWh * 15;
    } else {
      rate = 18;
      totalBill = kWh * 18;
    }

    const usageStatus = totalBill >= 5000 ? "High Electricity Usage" : "Normal Electricity Usage";

    setResult({
      customerName,
      consumption: kWh,
      rate,
      totalBill,
      usageStatus
    });
  };

  const handleClear = () => {
    setCustomerName("");
    setConsumption("");
    setResult(null);
  };

  return (
    <div className="activity-container">

      <div className="activity-header">
        <div className="activity-number">4</div>

        <div>
          <p className="activity-label">ACTIVITY 4</p>
          <h1>Electricity Bill Calculator</h1>
          <p className="activity-description">
            Compute a bill from kWh consumption across tiered rates.
          </p>
        </div>
      </div>

      <div className="bill-calculator-card">

        <div className="input-section">
          <h2>Calculate Electricity Bill</h2>

          <div className="form-group">
            <label>Customer Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter customer name"
            />
          </div>

          <div className="form-group">
            <label>Consumption (kWh)</label>
            <input
              type="number"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              placeholder="Enter consumption in kWh"
              min="0"
            />
          </div>

          <div className="button-group">
            <button
              onClick={handleCalculate}
              className="calculate-button"
            >
              Calculate Bill
            </button>
            <button
              onClick={handleClear}
              className="clear-button"
            >
              Clear
            </button>
          </div>
        </div>

        {result && (
          <div className="result-panel">
            <h3>Bill Details</h3>

            <div className="result-item">
              <span className="result-label">Customer Name:</span>
              <span className="result-value">{result.customerName}</span>
            </div>

            <div className="result-item">
              <span className="result-label">Consumption:</span>
              <span className="result-value">{result.consumption} kWh</span>
            </div>

            <div className="result-item">
              <span className="result-label">Rate Applied:</span>
              <span className="result-value">₱{result.rate}/kWh</span>
            </div>

            <div className="result-item total">
              <span className="result-label">Total Bill:</span>
              <span className="result-value">₱{result.totalBill.toFixed(2)}</span>
            </div>

            <div className="result-item status">
              <span className="result-label">Usage Status:</span>
              <span className={`result-value ${result.usageStatus === "High Electricity Usage" ? "high" : "normal"}`}>
                {result.usageStatus}
              </span>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default Activity4;