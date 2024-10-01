// import React, { useEffect, useState } from "react";
// // import ToolsLifeChart from "../Chart/ToolsLifeChart";
// import BatteryStats from "../Chart/BatteryStats";
// import ServoTempCharta from '../Chart/ServoTemp';
// import EncoderChart from '../Chart/EncoderChart'
// import SpindleCharta from "../Chart/SpindleChart";
// import ServoLoadCharta from "../Chart/ServoLoadChart";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register necessary chart components for line chart
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );



// // eslint-disable-next-line no-lone-blocks
// {
//   /* ToolLifeChart Component */
// }
// // const ToolLifeChart = ({machineId}) => (
// //   <div className="card d-flex flex-column h-100 w-100">
// //     <div className="card-header">
// //       <h5>
// //         <b>Tool Life - Set Life vs Actual Life (5 Tools)</b>
// //       </h5>
// //     </div>
// //     <div className="card-body flex-fill">
// //       {/* Line Chart Display */}
// //       <div className="w-100" style={{ height: "250px" }}>
// //         {/* <Line data={lineChartData} options={lineChartOptions} /> */}
// //         <ToolsLifeChart  machineId={machineId}  />
// //       </div>
// //     </div>
// //   </div>
// // );


// function ComponentName() {
// //   const machineId = localStorage.getItem('selectedMachineId');
//   // const { id: machineId } = useParams();
//   const machineId = 'MACHINE2';
//   const scrollInterval = 5000; // Time interval for scrolling (in milliseconds)
//   const scrollDistance = 400; // Distance to scroll in each step (in pixels)
//   const [scrollDirection, setScrollDirection] = useState('down');

//   useEffect(() => {
//     const scrollPage = () => {
//       // Get current scroll position
//       const scrollPosition = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.documentElement.scrollHeight;

//       if (scrollDirection === 'down') {
//         // Scroll down
//         window.scrollBy(0, scrollDistance);
//         // If reached the bottom, change direction
//         if (scrollPosition + windowHeight >= documentHeight) {
//           setScrollDirection('up');
//         }
//       } else {
//         // Scroll up
//         window.scrollBy(0, -scrollDistance);
//         // If reached the top, change direction
//         if (scrollPosition <= 0) {
//           setScrollDirection('down');
//         }
//       }
//     };

//     const intervalId = setInterval(scrollPage, scrollInterval);

//     return () => clearInterval(intervalId); // Cleanup interval on component unmount
//   }, [scrollDirection, scrollInterval, scrollDistance]);


//   return (
//     <div
//       style={{
//         backgroundColor: 'white',
//         maxWidth: '100%',
//         borderRadius: '8px',
//         padding: '0px',
//         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//         marginTop: '7rem',
//         height: '',
//       }}
//     >
//       {/* Top Filters */}



//       {/* Dashboard Stats and Charts */}
//       {/* <div className="row mb-2 d-flex mt-3"> */}
//         {/* First Div - ToolLifeChart */}
//         {/* <div className="col-12 col-lg-8 mb-4 d-flex">
//           <ToolLifeChart machineId={machineId} />
//         </div> */}

//         {/* Second Div - BatteryStatus */}
//         {/* <div className="col-12 col-lg-4 mb-4 d-flex">
//           <BatteryStats machineId={machineId} />
//         </div>
//       </div> */}

//       {/* 2nd row  */}
//       <div className="row mb-2 mt-2">
//         <div className="col-lg-6 col-md-12">
//           <SpindleCharta machineId={machineId} />
//         </div>
//         <div className="col-lg-6 col-md-12">
//         <ServoTempCharta machineId={machineId} />
//         </div>
//       </div>
//       {/* 3rd row  */}
//       <div className="row" style={{marginBottom : "3rem"}}>
//         {/* Fifth Div */}
//         <div className="col-lg-6">
//           <ServoLoadCharta machineId={machineId} />
//         </div>
//         <div className="col-lg-6">
//           <EncoderChart  machineId={machineId} />
//         </div>
//       </div>
//       <div className="col-lg-6">
//           {/* <ToolsLifeChart  machineId={machineId}  /> */}
//         </div>
//          <div className="col-12 d-flex">
//           <BatteryStats machineId={machineId} />
//         </div>
//     </div>
//   );
// }

// export default ComponentName;




// newoe
import React from "react";
import { Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart components for line chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Dummy data and options for charts
const dummyData = {
  labels: ['April', 'May', 'June', 'July', 'Aug', 'Sept'],
  datasets: [
    {
      label: 'Data',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
    },
  ],
};

const dummyOptions = {
  responsive: true,
  plugins: {
    legend: { display: true },
    // title: { display: true, text: 'Chart' },
  },
};

function Dashboard() {
  return (
    <div className="container mt-5">
      {/* Row 1 - Spindle Stats and Servo Temperature Stats */}
      <div className="row mb-4">
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <div className="card-header text-center">
              <h5>Spindle Stats</h5>
            </div>
            <div className="card-body">
              {/* First Row of Buttons */}
              <div className="row mb-3">
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Shift</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Last Shift</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Last Hour</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Today</button>
                </div>
              </div>
              {/* Second Row with Date and Apply Button */}
              <div className="row mb-3">
                <div className="col-8">
                  <input type="date" className="form-control" />
                </div>
                <div className="col-4">
                  <button className="btn btn-primary w-100">Apply</button>
                </div>
              </div>
              {/* Chart */}
              <Line data={dummyData} options={dummyOptions} />
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="card">
            <div className="card-header text-center">
              <h5>Servo Temperature Stats</h5>
            </div>
            <div className="card-body">
              {/* First Row of Buttons */}
              <div className="row mb-3">
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Shift</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Last Shift</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Last Hour</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Today</button>
                </div>
              </div>
              {/* Second Row with Date and Apply Button */}
              <div className="row mb-3">
                <div className="col-8">
                  <input type="date" className="form-control" />
                </div>
                <div className="col-4">
                  <button className="btn btn-primary w-100">Apply</button>
                </div>
              </div>
              {/* Chart */}
              <Line data={dummyData} options={dummyOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 - Servo Load Stats and Encoder Stats */}
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <div className="card-header text-center">
              <h5>Servo Load Stats</h5>
            </div>
            <div className="card-body">
              {/* First Row of Buttons */}
              <div className="row mb-3">
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Shift</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Last Shift</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Last Hour</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Today</button>
                </div>
              </div>
              {/* Second Row with Date and Apply Button */}
              <div className="row mb-3">
                <div className="col-8">
                  <input type="date" className="form-control" />
                </div>
                <div className="col-4">
                  <button className="btn btn-primary w-100">Apply</button>
                </div>
              </div>
              {/* Chart */}
              <Line data={dummyData} options={dummyOptions} />
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="card">
            <div className="card-header text-center">
              <h5>Encoder Stats</h5>
            </div>
            <div className="card-body">
              {/* First Row of Buttons */}
              <div className="row mb-3">
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Shift</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Last Shift</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Last Hour</button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-primary w-100">Today</button>
                </div>
              </div>
              {/* Second Row with Date and Apply Button */}
              <div className="row mb-3">
                <div className="col-8">
                  <input type="date" className="form-control" />
                </div>
                <div className="col-4">
                  <button className="btn btn-primary w-100">Apply</button>
                </div>
              </div>
              {/* Chart */}
              <Line data={dummyData} options={dummyOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;









// new
// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register necessary chart components for line chart
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// // Dummy data and options for charts
// const dummyData = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//   datasets: [
//     {
//       label: 'Dummy Data',
//       data: [12, 19, 3, 5, 2, 3],
//       borderColor: 'rgba(75, 192, 192, 1)',
//       backgroundColor: 'rgba(75, 192, 192, 0.2)',
//       fill: true,
//     },
//   ],
// };

// const dummyOptions = {
//   responsive: true,
//   plugins: {
//     legend: { display: true },
//     title: { display: true, text: 'Dummy Chart' },
//   },
// };

// // Chart box component with filters
// const ChartBox = ({ title }) => {
//   const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16));

//   return (
//     <div className="card mb-4">
//       <div className="card-header">
//         <h5>{title}</h5>
//         <div className="row mt-3">
//   <div className="col-lg-2 d-flex">
//     <button className="btn btn-outline-primary w-100">Shift</button>
//   </div>
//   <div className="col-lg-2 d-flex">
//     <button className="btn btn-outline-primary w-100">Last Shift</button>
//   </div>
//   <div className="col-lg-2 d-flex">
//     <button className="btn btn-outline-primary w-100">Last Hour</button>
//   </div>
//   <div className="col-lg-2 d-flex">
//     <button className="btn btn-outline-primary w-100">Today</button>
//   </div>
// </div>

//       </div>
//       <div className="card-body">
//         <div className="chart-container" style={{ height: "250px" }}>
//           <Line data={dummyData} options={dummyOptions} />
//         </div>
//       </div>
//     </div>
//   );
// };

// function Dashboard() {
//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-lg-6">
//           <ChartBox title="Spindle Stats" />
//         </div>
//         <div className="col-lg-6">
//           <ChartBox title="Servo Temperature Stats" />
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-lg-6">
//           <ChartBox title="Servo Load Stats" />
//         </div>
//         <div className="col-lg-6">
//           <ChartBox title="Encoder Stats" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

