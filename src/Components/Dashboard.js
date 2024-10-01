import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import GaugeChart from "react-gauge-chart";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../Images/oe.jpeg";
import image1 from "../Images/gre.jpeg";
import axios from 'axios';
import ProductionBarChart from "../Chart/ProductionBarChart";

const Dashboard = () => {


  const scrollInterval = 3000; // Time interval for scrolling (in milliseconds)
  const scrollDistance = 400; // Distance to scroll in each step (in pixels)
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const scrollPage = () => {
      // Get current scroll position
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollDirection === "down") {
        // Scroll down
        window.scrollBy(0, scrollDistance);
        // If reached the bottom, change direction
        if (scrollPosition + windowHeight >= documentHeight) {
          setScrollDirection("up");
        }
      } else {
        // Scroll up
        window.scrollBy(0, -scrollDistance);
        // If reached the top, change direction
        if (scrollPosition <= 0) {
          setScrollDirection("down");
        }
      }
    };

    const intervalId = setInterval(scrollPage, scrollInterval);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [scrollDirection, scrollInterval, scrollDistance]);

  // Sample data for charts (You can replace this with your actual data)
  const barChartData = {
    labels: ["HERO-SM-F8", "HERO-SM-F9", "HERO-SM-FA", "HERO-SM-FB"],
    datasets: [
      {
        label: "Current Shift",
        backgroundColor: "#007bff",
        data: [3000, 4000, 3500, 4500],
      },
      {
        label: "Previous Shift",
        backgroundColor: "#28a745",
        data: [2800, 3900, 3200, 4400],
      },
      {
        label: "Current Month",
        backgroundColor: "#ffc107",
        data: [3200, 4200, 3700, 4600],
      },
      {
        label: "Month",
        backgroundColor: "black",
        data: [3200, 4200, 3700, 4600],
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Maintenance", "Operations"],
    datasets: [
      {
        data: [30, 70],
        backgroundColor: ["#ff6384", "#36a2eb"],
      },
    ],
  };

  const lineChartData = {
    labels: ["Feb 16", "Feb 17", "Feb 18", "Feb 19", "Feb 20"],
    datasets: [
      {
        label: "Actual",
        borderColor: "#007bff",
        fill: false,
        data: [1.2, 1.3, 1.0, 0.9, 1.1],
      },
      {
        label: "Forecast",
        borderColor: "#dc3545",
        fill: false,
        data: [1.1, 1.2, 1.1, 1.0, 1.2],
      },
    ],
  };

  return (
    <Container fluid className="mt-5 table-bordered">
      {/* First set of components */}
      <Row className="justify-content-center mt-1 mb-1">
        <Col xs={12} sm={6} lg={3} className="d-flex mt-4 mb-2">
          <Card
            style={{
              width: "100%",
              height: "120px", // Reduced the card height
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <Card.Body className="p-2 text-center">
              <Row>
                <Col xs={4} className="p-1">
                  <div className="font-weight-bold text-danger">120</div>
                  <div className="text-muted small">Last Shift</div>
                  <div className="font-weight-bold text-danger">120</div>
                  <div className="text-muted small">Prev Day</div>
                </Col>
                <Col xs={4} className="p-1">
                  <div className="font-weight-bold text-danger">144</div>
                  <div className="text-muted small">Avg Last Month</div>
                  <div className="font-weight-bold text-danger">236</div>
                  {/* <div className="text-muted small">Prediction Whole Day</div> */}
                </Col>
                <Col xs={4} className="p-1">
                  <div className="text-muted small">Production</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={3} className="d-flex mt-4 mb-2">
          <Card
            style={{
              width: "100%",
              height: "120px", // Reduced the card height
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <Card.Body className="p-2 text-center">
              <Row>
                <Col xs={4} className="p-1">
                  <div className="text-muted small">CP</div>
                  <div className="font-weight-bold text-danger">0.42</div>
                  <div className="text-muted small">CPK</div>
                  <div className="font-weight-bold text-danger">3.08</div>
                </Col>
                <Col xs={4} className="p-1">
                  <div className="text-muted small">PP</div>
                  <div className="font-weight-bold text-danger">0.56</div>
                  <div className="text-muted small">PPK</div>
                  <div className="font-weight-bold text-danger">0.44</div>
                </Col>
                <Col xs={4} className="p-1">
                  <div className="text-muted small">Quality</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={3} className="d-flex mt-4 mb-2">
          <Card
            style={{
              width: "100%",
              height: "120px", // Reduced the card height
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <Card.Body className="p-2 text-center">
              <Row>
                <Col xs={4} className="p-1">
                  <div className="text-muted small">DHCA Plan</div>
                  <div className="font-weight-bold text-danger">1.48</div>
                  <div className="text-muted small">MTBF</div>
                  <div className="font-weight-bold text-danger">5.90</div>
                </Col>
                <Col xs={4} className="p-1">
                  <div className="text-muted small">MTTR</div>
                  <div className="font-weight-bold text-danger">2.10</div>
                  <div className="text-muted small">Uptime</div>
                  <div className="font-weight-bold text-danger">11.80</div>
                </Col>
                <Col xs={4} className="p-1">
                  <div className="text-muted small">Maintenance</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={3} className="d-flex mt-4 mb-2">
          <Card
            style={{
              width: "100%",
              height: "120px", // Reduced the card height
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <Card.Body className="p-2 text-center">
              <Row>
                <Col xs={12} className="p-2 text-start">
                  <div className="text-muted small">Machine</div>
                  <div className="font-weight-bold text-danger">HERO-SM-F8</div>
                  <div className="text-muted small">Shift</div>
                  <div className="font-weight-bold text-danger">Shift A</div>
                  {/* <div className="text-muted small">Status</div>
                        <div className="font-weight-bold text-success">Operational</div> */}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Second set of components */}
      {/* Second set of components with charts */}
      <Row className="mt-1">
        <Col lg={8} className="mb-5">
          <Card>
            <Card.Body>
              <Row>
                {/* Horizontal Bar Chart */}
                <Col md={6} className="mb-0">
                  <Card>
                    <Card.Header className="font-weight-bold">
                      Line Machine Utilization
                    </Card.Header>
                    {/* <ProductionBarChart /> */}
                    <Card.Body>
                      <Bar
                        data={barChartData}
                        options={{
                          indexAxis: "y",
                          maintainAspectRatio: false,
                          legend: { display: true, position: "top" },
                          scales: {
                            xAxes: [{ stacked: true }],
                            yAxes: [{ stacked: true }],
                          },
                        }}
                        height={300}
                      />
                    </Card.Body>
                  </Card>
                </Col>

                {/* Doughnut Chart */}
                <Col md={6} className="mb-0">
                  <Card>
                    <Card.Header className="font-weight-bold">
                      Preventive Maintenance (Hrs)
                    </Card.Header>
                    <Card.Body>
                      <Doughnut
                        data={doughnutChartData}
                        options={{ maintainAspectRatio: false }}
                        height={300}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* Footer Section */}
              {/* Footer Section */}
              <Row
                className="mt-2 justify-content-center"
                style={{ width: "100%", margin: "0%" }}
              >
                <Col xs={12} md={4} className="mb-0 px-1">
                  <Card>
                    <Card.Body className="text-center">
                      <div className="font-weight-bold">Shift Hours</div>
                      <input
                        type="number"
                        className="form-control mb-0"
                        min="0"
                        padding="0.2rem"
                        max="100"
                        defaultValue="70" // Set the default value as needed
                        style={{ width: "70%", margin: "0%" }}
                        onChange={(e) => {
                          const value = Math.min(
                            Math.max(Number(e.target.value), 0),
                            100
                          );
                          document.getElementById("shiftHoursValue").innerText =
                            value;
                        }}
                      />
                      <input
                        type="range"
                        className="form-range"
                        min="0"
                        max="100"
                        defaultValue="70"
                        style={{ width: "100%" }}
                        onInput={(e) => {
                          const value = e.target.value;
                          document.getElementById("shiftHoursValue").innerText =
                            value;
                          document.querySelector("#shiftHoursInput").value =
                            value;
                        }}
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={4} className="mb-0 px-1">
                  <Card>
                    <Card.Body className="text-center">
                      <div className="font-weight-bold">Downtime</div>
                      <input
                        type="number"
                        className="form-control mb-0"
                        min="0"
                        padding="0.2rem"
                        max="100"
                        defaultValue="30"
                        style={{ width: "70%", margin: "0%" }}
                        onChange={(e) => {
                          const value = Math.min(
                            Math.max(Number(e.target.value), 0),
                            100
                          );
                          document.getElementById("downtimeValue").innerText =
                            value;
                        }}
                      />
                      <input
                        type="range"
                        className="form-range"
                        min="0"
                        max="100"
                        defaultValue="30"
                        style={{ width: "100%" }}
                        onInput={(e) => {
                          const value = e.target.value;
                          document.getElementById("downtimeValue").innerText =
                            value;
                          document.querySelector("#downtimeInput").value =
                            value;
                        }}
                      />
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={4} className="mb-0 px-1">
                  <Card>
                    <Card.Body className="text-center">
                      <div className="font-weight-bold">Reject Count</div>
                      <input
                        type="number"
                        className="form-control mb-0"
                        min="0"
                        padding="0.2rem"
                        max="100"
                        defaultValue="50"
                        style={{ width: "70%", margin: "0%" }}
                        onChange={(e) => {
                          const value = Math.min(
                            Math.max(Number(e.target.value), 0),
                            100
                          );
                          document.getElementById(
                            "rejectCountValue"
                          ).innerText = value;
                        }}
                      />
                      <input
                        type="range"
                        className="form-range"
                        min="0"
                        max="100"
                        defaultValue="50"
                        style={{ width: "100%" }}
                        onInput={(e) => {
                          const value = e.target.value;
                          document.getElementById(
                            "rejectCountValue"
                          ).innerText = value;
                        }}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* clock chart  */}
              <div className="container mt-4">
      <div className="row">
        {/* 1st Row - Availability and Quality */}
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Availability</h5>
              <GaugeChart
                id="availability-chart"
                nrOfLevels={20}
                percent={0.6}
                colors={["#FF0000", "#FFA500", "#00FF00"]}
                arcWidth={0.3}
                 textColor="#000000"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Quality</h5>
              <GaugeChart
                id="quality-chart"
                nrOfLevels={20}
                percent={0.8}
                colors={["#FF0000", "#FFA500", "#00FF00"]}
                arcWidth={0.3}
                textColor="#000000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Row - Production and OEE */}
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Production</h5>
              <GaugeChart
                id="production-chart"
                nrOfLevels={20}
                percent={0.7}
                colors={["#FF0000", "#FFA500", "#00FF00"]}
                arcWidth={0.3}
                textColor="#000000"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">OEE</h5>
              <GaugeChart
                id="oee-chart"
                nrOfLevels={20}
                percent={0.75}
                colors={["#FF0000", "#FFA500", "#00FF00"]}
                arcWidth={0.3}
                textColor="#000000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
            </Card.Body>
          </Card>
        </Col>

        <Col
          lg={4}
          style={{
            maxHeight: "650px",
            overflowY: "auto",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        >
          <Row style={{ height: "33%" }}>
            <Col>
              <Card>
                <Card.Header className="font-weight-bold">
                  Deviation From Cycle Time (%)
                </Card.Header>
                <Card.Body>
                  <Line
                    data={lineChartData}
                    options={{ maintainAspectRatio: false }}
                    height={100}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ height: "33%" }}>
            <Col>
              <Card>
                <Card.Header className="font-weight-bold">
                  Capacity Utilization (%)
                </Card.Header>
                <Card.Body>
                  <Line
                    data={lineChartData}
                    options={{ maintainAspectRatio: false }}
                    height={100}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ height: "33%" }}>
            <Col>
              <Card>
                <Card.Header className="font-weight-bold">OPE (%)</Card.Header>
                <Card.Body>
                  <Line
                    data={lineChartData}
                    options={{ maintainAspectRatio: false }}
                    height={100}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ height: "33%" }}>
            <Col>
              <Card>
                <Card.Header className="font-weight-bold">
                  Deviation From Cycle Time (%)
                </Card.Header>
                <Card.Body>
                  <Line
                    data={lineChartData}
                    options={{ maintainAspectRatio: false }}
                    height={100}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ height: "33%" }}>
            <Col>
              <Card>
                <Card.Header className="font-weight-bold">
                  Capacity Utilization (%)
                </Card.Header>
                <Card.Body>
                  <Line
                    data={lineChartData}
                    options={{ maintainAspectRatio: false }}
                    height={100}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
