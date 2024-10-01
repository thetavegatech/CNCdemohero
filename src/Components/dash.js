import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Parameter.css';

const Dashboard = () => {
  const [parameters, setParameters] = useState([]);
  const [selectedMachine, setSelectedMachine] = useState('MACHINE2'); // Default machine

  const fetchParameters = async (machineName) => {
    try {
      const response = await axios.get(`http://localhost:5001/api/machine-data/monitoring/ORG001/${machineName}`);
      setParameters(response.data);
    } catch (error) {
      console.error("Error fetching parameters:", error);
    }
  };

  useEffect(() => {
    // Fetch parameters when the selected machine changes
    fetchParameters(selectedMachine);

    // Set up interval to fetch parameters every minute
    const interval = setInterval(() => {
      fetchParameters(selectedMachine);
    }, 60000); // 60000 milliseconds = 1 minute

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [selectedMachine]); // Fetch parameters when selectedMachine changes

  // Split parameters into two halves
  const halfIndex = Math.ceil(parameters.length / 2);
  const firstHalf = parameters.slice(0, halfIndex);
  const secondHalf = parameters.slice(halfIndex);

  const handleMachineChange = (machineName) => {
    setSelectedMachine(machineName); // Update selected machine
  };

  return (
    <div className="container-fluid" style={{ marginLeft: '20px', marginTop: '4rem' }}>
      <h4 className="text-center1  mb-5">Dashboard Parameters {selectedMachine}</h4>
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          {firstHalf.map((param) => (
            <div className="row parameter-row" key={param._id}>
              <div className="col-12 d-flex align-items-center text-center">
                {/* Icon */}
                <div className="col-2 d-flex align-items-center justify-content-center text-center">
                  <i className="bi bi-circle parameter-icon" />
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
                    {isNaN(param.ParameterValue) ? "" : (param.ParameterName.includes("Temp") ? "°C" : "%")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          {secondHalf.map((param) => (
            <div className="row parameter-row" key={param._id}>
              <div className="col-12 d-flex align-items-center text-center">
                {/* Icon */}
                <div className="col-2 d-flex align-items-center justify-content-center text-center">
                  <i className="bi bi-circle parameter-icon" />
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
                    {isNaN(param.ParameterValue) ? "" : (param.ParameterName.includes("Temp") ? "°C" : "%")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="footer-buttons mt-4 text-center">
        <button className="btn btn-secondary mx-2" onClick={() => handleMachineChange('MACHINE2')}>MACHINE2</button>
        <button className="btn btn-success mx-2" onClick={() => handleMachineChange('MACHINE3')}>MACHINE3</button>
        <button className="btn btn-danger mx-2" onClick={() => handleMachineChange('CNCMACHINE1')}>CNCMACHINE1</button>
      </div>
    </div>
  );
};

export default Dashboard;