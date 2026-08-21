import { useState } from "react";
import "./Activity4.css";

function Activity4() {

  const [customerName, setCustomerName] = useState("");
  const [consumption, setConsumption] = useState("");

  const [resultName, setResultName] = useState("");
  const [resultConsumption, setResultConsumption] = useState("");
  const [rateApplied, setRateApplied] = useState("");
  const [totalBill, setTotalBill] = useState("");
  const [usageStatus, setUsageStatus] = useState("");



  const calculateBill = () => {

    if(customerName.trim()==="" || consumption===""){
      setUsageStatus("Please enter customer name and consumption.");
      return;
    }


    const kwh = Number(consumption);


    let rate;


    if(kwh <= 100){
      rate = 10;
    }
    else if(kwh <= 200){
      rate = 12;
    }
    else if(kwh <= 300){
      rate = 15;
    }
    else{
      rate = 18;
    }


    const bill = kwh * rate;


    setResultName(customerName);
    setResultConsumption(kwh);
    setRateApplied(rate);
    setTotalBill(bill);


    if(bill >= 5000){
      setUsageStatus("High Electricity Usage");
    }
    else{
      setUsageStatus("Normal Electricity Usage");
    }

  };



  const clearButton = ()=>{

    setCustomerName("");
    setConsumption("");

    setResultName("");
    setResultConsumption("");
    setRateApplied("");
    setTotalBill("");
    setUsageStatus("");

  };



return(

<div className="activity-container">


<div className="activity-header">

<div className="activity-number">
4
</div>


<div>

<p className="activity-label">
ACTIVITY 4
</p>


<h1>
Electricity Bill Calculator
</h1>


<p className="activity-description">
Compute a bill from kWh consumption across tiered rates.
</p>


</div>


</div>





<div className="electricity-layout">



<div className="electricity-card">


<h2>
Inputs & Buttons
</h2>


<div className="form-group">

<label>
Customer Name
</label>


<input

type="text"

placeholder="Enter customer name"

value={customerName}

onChange={(e)=>setCustomerName(e.target.value)}

/>


</div>



<div className="form-group">

<label>
Consumption (kWh)
</label>


<input

type="number"

placeholder="Enter kWh"

value={consumption}

onChange={(e)=>setConsumption(e.target.value)}

/>


</div>




<div className="button-group">


<button

className="evaluate-button"

onClick={calculateBill}

>

Calculate Bill

</button>



<button

className="clear-button"

onClick={clearButton}

>

Clear

</button>



</div>


</div>







<div className="electricity-card">


<h2>
Conditions
</h2>


<p>0 - 100 kWh → ₱10 per kWh</p>

<p>101 - 200 kWh → ₱12 per kWh</p>

<p>201 - 300 kWh → ₱15 per kWh</p>

<p>Above 300 kWh → ₱18 per kWh</p>


<br/>


<p>Bill ≥ ₱5,000 → High Electricity Usage</p>

<p>Bill &lt; ₱5,000 → Normal Electricity Usage</p>


</div>






<div className="electricity-result">


<h2>
Result Panel Shows
</h2>


<p>
Customer Name:
<b> {resultName}</b>
</p>


<p>
Consumption:
<b> {resultConsumption} kWh</b>
</p>


<p>
Rate Applied:
<b> ₱{rateApplied}/kWh</b>
</p>


<p>
Total Bill:
<b> ₱{totalBill}</b>
</p>


<p>
Usage Status:
<b> {usageStatus}</b>
</p>


</div>




</div>


</div>


);


}


export default Activity4;