// import { useParams } from "react-router-dom";
import React from "react";
import { Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie, Bar } from "react-chartjs-2";
import ToolsLifeChart from "../Chart/ToolsLifeChart";
import { Line } from "react-chartjs-2";
// import { Row, Col } from "react-bootstrap";
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

const MachineDetails = ({
  dailyToolLifeData1,
  weeklyToolLifeData1,
  dailyToolLifeData2,
  weeklyToolLifeData2,
  dailyToolLifeData3,
  weeklyToolLifeData3,
}) => {
  // const { id } = useParams(); // Extract the machine ID from the URL

  // Default data in case any prop is missing

  // Default data in case any prop is missing
  const defaultPieData = {
    labels: ["Performing Tool"], // Added labels for both performing and non-performing
    datasets: [
      {
        label: "Tool Performance",
        data: [80, 20], // Data values for performing and non-performing tools
        backgroundColor: ["#4CAF50", "#F44336"], // Green for performing, Red for non-performing
      },
    ],
  };

  const PieData = {
    labels: ["Non Performing Tool"], // Adjusted the order of labels if necessary
    datasets: [
      {
        label: "Tool Performance",
        data: [20, 80], // Adjusted the data values to highlight non-performing tools
        backgroundColor: ["#F44336", "#4CAF50"], // Red for non-performing, Green for performing
      },
    ],
  };

  // Reusable Chart Component for Tool Change Frequency
  const ToolChangeFrequencyChart = ({ chartData, chartOptions }) => {
    return (
      <div
        className="p-3 mb-4"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          height: "250px",
        }}
      >
        <h6 className="text-center text-purple mb-3">Tool Change Frequency</h6>
        <div style={{ height: "180px" }}>
          {" "}
          {/* Controlled height for chart container */}
          <Bar data={chartData} options={chartOptions} />
        </div>
        <div className="d-flex align-items-center mt-3">
          <div
            className="py-1 px-2"
            style={{
              backgroundColor: "#f1c40f",
              color: "#fff",
              borderRadius: "4px",
            }}
          >
            W
          </div>
          <div
            className="py-1 px-2 my-1"
            style={{ backgroundColor: "#ecf0f1", borderRadius: "4px" }}
          >
            M
          </div>
          <div
            className="py-1 px-2 my-1"
            style={{ backgroundColor: "#ecf0f1", borderRadius: "4px" }}
          >
            Q
          </div>
          <div
            className="py-1 px-2 my-1"
            style={{ backgroundColor: "#ecf0f1", borderRadius: "4px" }}
          >
            HY
          </div>
          <div
            className="py-1 px-2"
            style={{ backgroundColor: "#ecf0f1", borderRadius: "4px" }}
          >
            Y
          </div>
        </div>
      </div>
    );
  };

  // Example chart data and options
  const chartData = {
    labels: ["11", "40", "30", "24", "21", "8", "4"],
    datasets: [
      {
        label: "Tool Changes",
        data: [88, 70, 50, 42, 24, 18, 9],
        backgroundColor: "#3498db",
      },
      {
        label: "Cumulative Percentage",
        data: [28, 50, 70, 83, 92, 97, 100],
        type: "line",
        borderColor: "#e74c3c",
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#000",
        },
      },
      x: {
        ticks: {
          color: "#000",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Styled Box Component
  const StyledBox = ({ children }) => {
    return (
      <div
        className="p-3 mb-4"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          height: "auto",
          minHeight: "200px", // Minimum height to keep consistency with the stackchart
        }}
      >
        {children}
      </div>
    );
  };




// Register necessary chart components for line chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Dummy data and options for charts
const dummyData = {
  labels: ['April', 'May', 'June', 'July', 'Aug', 'Sept'],
  datasets: [
    {
      label: 'Tools Data',
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
    title: { display: true, text: 'Tools Life Chart' },
  },
};


  return (
    <div
      style={{
        backgroundColor: "white",
        maxWidth: "100%",
        borderRadius: "8px",
        padding: "0px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        marginTop: "55px",
        height: "auto",
      }}
    >
      {/* Top Filters */}

      {/* Dashboard Header */}
      <div
        className="container-fluid"
        style={{ maxHeight: "80vh", overflowY: "auto", marginTop: "4rem" }}
      >
        <Row className=" text-center py-1 mb-3 bg-warning">
          <Col>
            <h5>Tooling Dashboard</h5>
          </Col>
        </Row>

        {/* Charts and Information Section */}

        <Row className="text-center mt">
          {/* First Column - Crankcase Left */}

          <Col lg={4} md={6} sm={12} className="mb">
            <h5 className="font-weight-bold text-primary">LEFT</h5>
            <StyledBox>
              {/* Row with Two Columns for Pie Charts */}
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <h6 className="font-weight-bold text-center">
                    Daily Tool Life<br></br> Monitoring
                  </h6>
                  <div className="p-3" style={{ height: "180px" }}>
                    <Pie
                      data={dailyToolLifeData1 || defaultPieData}
                      options={{ maintainAspectRatio: false }}
                    />
                  </div>
                  {/* Footer for Daily Tool Life Monitoring */}
                  <div className="text-center">
                    {/* <p style={{ color: 'blue', marginBottom: '0' }}>Performing tools</p> */}
                    <div>No. of tools changed: __</div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h6 className="font-weight-bold text-center">
                    Weekly Tool Life Monitoring
                  </h6>
                  <div className="p-3" style={{ height: "180px" }}>
                    <Pie
                      data={weeklyToolLifeData1 || PieData}
                      options={{ maintainAspectRatio: false }}
                    />
                  </div>
                  {/* Footer for Weekly Tool Life Monitoring */}
                  <div className="text-center">
                    {/* <p style={{ color: 'red', marginBottom: '0' }}>Non performing tools</p> */}
                    <div>No. of tools changed: __</div>
                  </div>
                </Col>
              </Row>
            </StyledBox>
          </Col>

          {/* Second Column - Crankcase Right */}
          <Col lg={4} md={6} sm={12} className="mb">
            <h5 className="font-weight-bold text-primary">RIGHT</h5>
            <StyledBox>
              {/* Row with Two Columns for Pie Charts */}
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <h6 className="font-weight-bold text-center">
                    Daily Tool Life<br></br> Monitoring
                  </h6>
                  <div className="p-3" style={{ height: "180px" }}>
                    <Pie
                      data={dailyToolLifeData2 || defaultPieData}
                      options={{ maintainAspectRatio: false }}
                    />
                  </div>
                  {/* Footer for Daily Tool Life Monitoring */}
                  <div className="text-center">
                    {/* <p style={{ color: 'blue', marginBottom: '0' }}>Performing tools</p> */}
                    <div>No. of tools changed: __</div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h6 className="font-weight-bold text-center">
                    Weekly Tool Life Monitoring
                  </h6>
                  <div className="p-3" style={{ height: "180px" }}>
                    <Pie
                      data={weeklyToolLifeData2 || PieData}
                      options={{ maintainAspectRatio: false }}
                    />
                  </div>
                  {/* Footer for Weekly Tool Life Monitoring */}
                  <div className="text-center">
                    {/* <p style={{ color: 'red', marginBottom: '0' }}>Non performing tools</p> */}
                    <div>No. of tools changed: __</div>
                  </div>
                </Col>
              </Row>
            </StyledBox>
          </Col>

          {/* Third Column - Cylinder Head */}
          <Col lg={4} md={6} sm={12} className="mb">
            <h5 className="font-weight-bold text-primary">CYL HEAD</h5>
            {/* Row with Two Columns for Pie Charts */}
            <StyledBox>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <h6 className="font-weight-bold text-center">
                    Daily Tool Life<br></br> Monitoring
                  </h6>
                  <div className="p-3" style={{ height: "180px" }}>
                    <Pie
                      data={dailyToolLifeData3 || defaultPieData}
                      options={{ maintainAspectRatio: false }}
                    />
                  </div>
                  {/* Footer for Daily Tool Life Monitoring */}
                  <div className="text-center">
                    <div>No. of tools changed: __</div>
                    {/* <p style={{ color: 'blue', marginBottom: '0' }}>Performing tools</p> */}
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h6 className="font-weight-bold text-center">
                    Weekly Tool Life Monitoring
                  </h6>
                  <div className="p-3" style={{ height: "180px" }}>
                    <Pie
                      data={weeklyToolLifeData3 || PieData}
                      options={{ maintainAspectRatio: false }}
                    />
                  </div>
                  {/* Footer for Weekly Tool Life Monitoring */}
                  <div className="text-center">
                    <div>No. of tools changed: __</div>
                    {/* <p style={{ color: 'red', marginBottom: '0' }}>Non performing tools</p> */}
                  </div>
                </Col>
              </Row>
            </StyledBox>
          </Col>
        </Row>

        {/* <Row className="justify-content-center">
          <Col lg={4} md={6} sm={12} className="mb-4">
            <ToolsLifeChart machineId={"MACHINE2"} />
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <ToolsLifeChart machineId={"MACHINE3"} />
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <ToolsLifeChart machineId={"CNCMACHINE1"} />
          </Col>
        </Row> */}

<Row className="justify-content-center">
      {/* First Chart */}
      <Col lg={4} md={6} sm={12} className="mb-4">
        <div className="card">
          <div className="card-header text-center">ToolsLifeChart</div>
          <div className="card-body">
            <Line data={dummyData} options={dummyOptions} />
          </div>
        </div>
      </Col>

      {/* Second Chart */}
      <Col lg={4} md={6} sm={12} className="mb-4">
        <div className="card">
          <div className="card-header text-center">ToolsLifeChart</div>
          <div className="card-body">
            <Line data={dummyData} options={dummyOptions} />
          </div>
        </div>
      </Col>

      {/* Third Chart */}
      <Col lg={4} md={6} sm={12} className="mb-4">
        <div className="card">
          <div className="card-header text-center">ToolsLifeChart</div>
          <div className="card-body">
            <Line data={dummyData} options={dummyOptions} />
          </div>
        </div>
      </Col>
    </Row>


        {/* Additional Tool Change Frequency Charts */}
        {/* <Container fluid className="mt-4"> */}
        <Row className="justify-content-center">
          <Col lg={4} md={6} sm={12} className="mb-4">
            <ToolChangeFrequencyChart
              chartData={chartData}
              chartOptions={chartOptions}
            />
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <ToolChangeFrequencyChart
              chartData={chartData}
              chartOptions={chartOptions}
            />
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <ToolChangeFrequencyChart
              chartData={chartData}
              chartOptions={chartOptions}
            />
          </Col>
        </Row>
        {/* </Container> */}


      </div>
    </div>
  );
};

export default MachineDetails;
