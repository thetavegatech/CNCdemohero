// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Parameter.css";

// const Dashboard = () => {
 
//   const [parameters, setParameters] = useState([]);
//   const [selectedMachine, setSelectedMachine] = useState("MACHINE2"); // Default machine

//   const fetchParameters = async (machineName) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5001/api/machine-data/monitoring/ORG001/${machineName}`
//       );
//       setParameters(response.data);
//     } catch (error) {
//       console.error("Error fetching parameters:", error);
//     }
//   };

//   useEffect(() => {
//     // Fetch parameters when the selected machine changes
//     fetchParameters(selectedMachine);

//     // Set up interval to fetch parameters every minute
//     const interval = setInterval(() => {
//       fetchParameters(selectedMachine);
//     }, 60000); // 60000 milliseconds = 1 minute

//     // Clean up the interval on component unmount
//     return () => clearInterval(interval);
//   }, [selectedMachine]); // Fetch parameters when selectedMachine changes

//   // Split parameters into two halves
//   const halfIndex = Math.ceil(parameters.length / 2);
//   const firstHalf = parameters.slice(0, halfIndex);
//   const secondHalf = parameters.slice(halfIndex);

//   const handleMachineChange = (machineName) => {
//     setSelectedMachine(machineName); // Update selected machine
//   };

//   return (
//     <div
//       className="container-fluid"
//       style={{ marginLeft: "20px", marginTop: "4rem" }}
//     >
//       <h4 className="text-center1  mb-3">
//         Dashboard Parameters {selectedMachine}
//       </h4>
//       <div className="row">
//         {/* Left Column */}
//         <div className="col-md-5" style={{marginLeft: '2%'}}>
//           {firstHalf.map((param) => (
//             <div className="row parameter-row" key={param._id}>
//               <div className="col-12 d-flex align-items-center text-center">
//                 {/* Icon */}
//                 <div className="col-2 d-flex align-items-center justify-content-center text-center">
//                 <i className="bi bi-speedometer2 parameter-icon" />
//                 </div>
//                 {/* Label */}
//                 <div className="col-6 d-flex align-items-center justify-content-center text-center">
//                   <span className="parameter-label">{param.ParameterName}</span>
//                 </div>
//                 {/* Value */}
//                 <div className="col-2 d-flex align-items-center justify-content-center text-center">
//                   <span className="parameter-value">
//                     {param.ParameterValue}
//                   </span>
//                 </div>
//                 {/* Unit */}
//                 <div className="col-2 d-flex align-items-center justify-content-center text-center">
//                   <span className="parameter-unit">
//                     {isNaN(param.ParameterValue)
//                       ? ""
//                       : param.ParameterName.includes("Temp")
//                       ? "°C"
//                       : "%"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Right Column */}
//         <div className="col-md-5">
//           {secondHalf.map((param) => (
//             <div className="row parameter-row" key={param._id}>
//               <div className="col-12 d-flex align-items-center text-center">
//                 {/* Icon */}
//                 <div className="col-2 d-flex align-items-center justify-content-center text-center">
//                 <i className="bi bi-speedometer2 parameter-icon" />
//                 </div>
//                 {/* Label */}
//                 <div className="col-6 d-flex align-items-center justify-content-center text-center">
//                   <span className="parameter-label">{param.ParameterName}</span>
//                 </div>
//                 {/* Value */}
//                 <div className="col-2 d-flex align-items-center justify-content-center text-center">
//                   <span className="parameter-value">
//                     {param.ParameterValue}
//                   </span>
//                 </div>
//                 {/* Unit */}
//                 <div className="col-2 d-flex align-items-center justify-content-center text-center">
//                   <span className="parameter-unit">
//                     {isNaN(param.ParameterValue)
//                       ? ""
//                       : param.ParameterName.includes("Temp")
//                       ? "°C"
//                       : "%"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer Buttons */}
//       <div className="footer-buttons mt-4 text-center">
//         <button
//           className="btn btn-secondary mx-2"
//           onClick={() => handleMachineChange("MACHINE2")}
//         >
//           MACHINE2
//         </button>
//         <button
//           className="btn btn-success mx-2"
//           onClick={() => handleMachineChange("MACHINE3")}
//         >
//           MACHINE3
//         </button>
//         <button
//           className="btn btn-danger mx-2"
//           onClick={() => handleMachineChange("CNCMACHINE1")}
//         >
//           CNCMACHINE1
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import "./Parameter.css";

const ParameterRow = ({ param }) => {
  return (
    <div className="row parameter-row" key={param._id}>
      <div className="col-12 d-flex align-items-center text-center">
        {/* Icon */}
        <div className="col-2 d-flex align-items-center justify-content-center text-center">
          <i className="bi bi-speedometer2 parameter-icon" />
        </div>
        {/* Label */}
        <div className="col-6 d-flex align-items-center justify-content-center text-center">
          <span className="parameter-label">{param.ParameterName}</span>
        </div>
        {/* Value */}
        <div className="col-2 d-flex align-items-center justify-content-center text-center">
          <span className="parameter-value">{param.ParameterValue}</span>
        </div>
        {/* Unit */}
        <div className="col-2 d-flex align-items-center justify-content-center text-center">
          <span className="parameter-unit">
            {isNaN(param.ParameterValue)
              ? ""
              : param.ParameterName.includes("Temp")
              ? "°C"
              : param.ParameterName.includes("Load")
              ? "%"
              : param.ParameterName.includes("Speed")
              ? "RPM"
              : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [parameters, setParameters] = useState([]);
  const [selectedMachine, setSelectedMachine] = useState("MACHINE2");

  const dummyData = {
    MACHINE2: [
      { _id: "1", ParameterName: "ServoTemp1", ParameterValue: "45" },
      { _id: "2", ParameterName: "ServoTemp2", ParameterValue: "50" },
      { _id: "3", ParameterName: "ServoTemp3", ParameterValue: "48" },
      { _id: "4", ParameterName: "ServoTemp4", ParameterValue: "46" },
      { _id: "5", ParameterName: "ServoLoad1", ParameterValue: "80" },
      { _id: "6", ParameterName: "ServoLoad2", ParameterValue: "85" },
      { _id: "7", ParameterName: "ServoLoad3", ParameterValue: "75" },
      { _id: "8", ParameterName: "ServoLoad4", ParameterValue: "90" },
      { _id: "9", ParameterName: "BatteryStatus1", ParameterValue: "Good" },
      { _id: "10", ParameterName: "BatteryStatus2", ParameterValue: "Good" },
      { _id: "11", ParameterName: "BatteryStatus3", ParameterValue: "Good" },
      { _id: "12", ParameterName: "BatteryStatus4", ParameterValue: "Low" },
      { _id: "13", ParameterName: "SpindleLoad", ParameterValue: "75" },
      { _id: "14", ParameterName: "SpindleSpeed", ParameterValue: "1200" },
      { _id: "15", ParameterName: "Encoder1", ParameterValue: "1600" },
      { _id: "16", ParameterName: "Encoder2", ParameterValue: "1206" },
      { _id: "17", ParameterName: "Encoder3", ParameterValue: "1200" },
      { _id: "18", ParameterName: "Encoder4", ParameterValue: "1200" },
    ],
    MACHINE3: [
      { _id: "15", ParameterName: "ServoTemp1", ParameterValue: "48" },
      { _id: "16", ParameterName: "ServoTemp2", ParameterValue: "52" },
      { _id: "17", ParameterName: "ServoTemp3", ParameterValue: "50" },
      { _id: "18", ParameterName: "ServoTemp4", ParameterValue: "49" },
      { _id: "19", ParameterName: "ServoLoad1", ParameterValue: "82" },
      { _id: "20", ParameterName: "ServoLoad2", ParameterValue: "84" },
      { _id: "21", ParameterName: "ServoLoad3", ParameterValue: "79" },
      { _id: "22", ParameterName: "ServoLoad4", ParameterValue: "88" },
      { _id: "23", ParameterName: "BatteryStatus1", ParameterValue: "Good" },
      { _id: "24", ParameterName: "BatteryStatus2", ParameterValue: "Good" },
      { _id: "25", ParameterName: "BatteryStatus3", ParameterValue: "Good" },
      { _id: "26", ParameterName: "BatteryStatus4", ParameterValue: "Good" },
      { _id: "27", ParameterName: "SpindleLoad", ParameterValue: "80" },
      { _id: "28", ParameterName: "SpindleSpeed", ParameterValue: "1300" },
      { _id: "15", ParameterName: "Encoder1", ParameterValue: "1200" },
      { _id: "16", ParameterName: "Encoder2", ParameterValue: "1230" },
      { _id: "17", ParameterName: "Encoder3", ParameterValue: "200" },
      { _id: "18", ParameterName: "Encoder4", ParameterValue: "1250" },
    ],
    CNCMACHINE1: [
      { _id: "29", ParameterName: "ServoTemp1", ParameterValue: "60" },
      { _id: "30", ParameterName: "ServoTemp2", ParameterValue: "65" },
      { _id: "31", ParameterName: "ServoTemp3", ParameterValue: "62" },
      { _id: "32", ParameterName: "ServoTemp4", ParameterValue: "61" },
      { _id: "33", ParameterName: "ServoLoad1", ParameterValue: "90" },
      { _id: "34", ParameterName: "ServoLoad2", ParameterValue: "88" },
      { _id: "35", ParameterName: "ServoLoad3", ParameterValue: "85" },
      { _id: "36", ParameterName: "ServoLoad4", ParameterValue: "92" },
      { _id: "37", ParameterName: "BatteryStatus1", ParameterValue: "Good" },
      { _id: "38", ParameterName: "BatteryStatus2", ParameterValue: "Good" },
      { _id: "39", ParameterName: "BatteryStatus3", ParameterValue: "Low" },
      { _id: "40", ParameterName: "BatteryStatus4", ParameterValue: "Good" },
      { _id: "41", ParameterName: "SpindleLoad", ParameterValue: "85" },
      { _id: "42", ParameterName: "SpindleSpeed", ParameterValue: "1400" },
      { _id: "15", ParameterName: "Encoder1", ParameterValue: "1200" },
      { _id: "16", ParameterName: "Encoder2", ParameterValue: "1500" },
      { _id: "17", ParameterName: "Encoder3", ParameterValue: "1700" },
      { _id: "18", ParameterName: "Encoder4", ParameterValue: "1300" },
    ],
  };

  useEffect(() => {
    // Fetch dummy data based on the selected machine
    setParameters(dummyData[selectedMachine]);
  }, [selectedMachine]);

  // Split parameters into two halves for a two-column layout
  const halfIndex = Math.ceil(parameters.length / 2);
  const firstHalf = parameters.slice(0, halfIndex);
  const secondHalf = parameters.slice(halfIndex);

  return (
    <div className="container-fluid" style={{ marginLeft: "20px", marginTop: "4rem" }}>
      <h4 className="text-center1 mb-3">Dashboard Parameters {selectedMachine}</h4>
      <div className="row">
        <div className="col-md-5" style={{ marginLeft: "2%" }}>
          {firstHalf.map((param) => (
            <ParameterRow param={param} key={param._id} />
          ))}
        </div>
        <div className="col-md-5">
          {secondHalf.map((param) => (
            <ParameterRow param={param} key={param._id} />
          ))}
        </div>
      </div>
      <div className="footer-buttons mt-4 text-center">
        <button
          className="btn btn-secondary mx-2"
          onClick={() => setSelectedMachine("MACHINE2")}
        >
          MACHINE2
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => setSelectedMachine("MACHINE3")}
        >
          MACHINE3
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => setSelectedMachine("CNCMACHINE1")}
        >
          CNCMACHINE1
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

