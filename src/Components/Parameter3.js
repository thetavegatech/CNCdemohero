import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Histogram data for Output Graph
  const outputGraphData = {
    labels: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
    datasets: [
      {
        label: 'Frequency',
        data: [2, 3, 5, 7, 4, 1], // Example data representing frequencies
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
        borderWidth: 1,
        barPercentage: 1.0, // Full width for bars
        categoryPercentage: 1.0 // No gaps between bars
      },
    ],
  };

  // Chart data for OEE % vs Actual Production Graph
  const oeeProductionData = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
    datasets: [
      {
        label: 'OEE %',
        data: [0.8, 0.9, 0.93, 0.97, 0.87, 0.93],
        borderColor: '#66BB6A',
        backgroundColor: 'transparent',
        yAxisID: 'y',
        tension: 0.4,
      },
      {
        label: 'Actual Production Nos',
        data: [1430, 1550, 1480, 1580, 1370, 1500],
        borderColor: '#EF5350',
        backgroundColor: 'transparent',
        yAxisID: 'y1',
        tension: 0.4,
      },
      {
        label: 'Std Production (Capacity) Nos',
        data: [1500, 1500, 1500, 1500, 1500, 1500],
        borderColor: '#42A5F5',
        borderDash: [5, 5],
        backgroundColor: 'transparent',
        yAxisID: 'y1',
        tension: 0.4,
      },
    ],
  };

  // Chart data for Line OEE
  const lineOEEData = {
    labels: ['July', 'Aug', 'Sept'],
    datasets: [
      {
        label: 'Line OEE in %',
        data: [85, 85, 85],
        backgroundColor: ['#66BB6A', '#FFA726', '#42A5F5'],
        borderColor: ['#43A047', '#FB8C00', '#1E88E5'],
        borderWidth: 1,
      },
    ],
  };

  // Chart data for Availability Rate
  const availabilityData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'A.R. in %',
        data: [85, 90, 94, 92, 88, 84],
        borderColor: '#AB47BC',
        backgroundColor: 'rgba(171, 71, 188, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Chart data for Performance Rate
  const performanceData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'P.R. in %',
        data: [80, 85, 87, 90, 86, 83],
        borderColor: '#FFA726',
        backgroundColor: 'rgba(255, 167, 38, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Chart data for Quality Rate
  const qualityData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Q.R. in %',
        data: [98, 97, 96, 95, 94, 93],
        borderColor: '#26A69A',
        backgroundColor: 'rgba(38, 166, 154, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <Container fluid>
      <Row className="justify-content-center" style={{marginTop: "5rem"}}>
        {/* Output Graph as Histogram */}
        <Col lg={6} md={12} className="card p-3 mb-4" style={{ maxWidth: '650px' }}>
          <h4 className="text-center">Output Histogram</h4>
          <div style={{ position: 'relative', height: '250px', width: '100%' }}>
            <Bar
              data={outputGraphData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Bins (Output Ranges)',
                    },
                  },
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Frequency',
                    },
                  },
                },
              }}
            />
          </div>
        </Col>

        {/* OEE Percentage and Actual Production Graph */}
        <Col lg={6} md={12} className="card p-3 mb-4" style={{ maxWidth: '650px' }}>
          <h4 className="text-center">OEE % vs Actual Production Nos</h4>
          <div style={{ position: 'relative', height: '250px', width: '100%' }}>
            <Line
              data={oeeProductionData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    type: 'linear',
                    position: 'left',
                    ticks: {
                      callback: function (value) {
                        return value * 100 + '%'; // Show as percentage
                      },
                    },
                    title: {
                      display: true,
                      text: '%age',
                    },
                  },
                  y1: {
                    type: 'linear',
                    position: 'right',
                    beginAtZero: false,
                    max: 2100,
                    grid: {
                      drawOnChartArea: false,
                    },
                    title: {
                      display: true,
                      text: 'Nos of Veh/Sets',
                    },
                  },
                },
              }}
            />
          </div>
        </Col>
      </Row>

      {/* Line OEE Graph */}
      <Row className="justify-content-center">
        <Col lg={6} md={12} className="card p-3 mb-4" style={{ maxWidth: '650px' }}>
          <h4 className="text-center">Line OEE</h4>
          <div style={{ position: 'relative', height: '150px', width: '100%' }}>
            <Bar
              data={lineOEEData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y', // Horizontal bar
                scales: {
                  x: {
                    beginAtZero: true,
                    max: 120,
                    title: {
                      display: true,
                      text: 'Line OEE in %',
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Months',
                    },
                  },
                },
              }}
            />
          </div>
        </Col>

        {/* Production Summary Table */}
        <Col lg={6} md={12} className="card p-3 mb-4" style={{ maxWidth: '650px' }}>
          <h4 className="text-center">Production Summary</h4>
          <div style={{ overflowX: 'auto', width: '100%' }}>
            <table className="table table-bordered table-sm table-striped">
              <thead>
                <tr>
                  <th colSpan={3} className="text-center">Current Shift Production</th>
                  <th colSpan={4} className="text-center">Cumulative Production</th>
                </tr>
              </thead>
              <thead className="thead-dark">
                <tr>
                  <th>Plan</th>
                  <th>Actual</th>
                  <th>Variance</th>
                  <th>A</th>
                  <th>B</th>
                  <th>C</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>200</td>
                  <td>215</td>
                  <td className="text-success font-weight-bold">+15</td>
                  <td>250</td>
                  <td>250</td>
                  <td>200</td>
                  <td>700</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>

      {/* Availability, Performance, and Quality Rate Graphs */}
      <Row className="justify-content-center">
        <Col lg={4} md={12} className="card p-3 mb-4" style={{ maxWidth: '650px' }}>
          <h4 className="text-center">Availability Rate</h4>
          <div style={{ position: 'relative', height: '150px', width: '100%' }}>
            <Line data={availabilityData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </Col>
        <Col lg={4} md={12} className="card p-3 mb-4" style={{ maxWidth: '650px' }}>
          <h4 className="text-center">Performance Rate</h4>
          <div style={{ position: 'relative', height: '150px', width: '100%' }}>
            <Line data={performanceData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </Col>
        <Col lg={4} md={12} className="card p-3 mb-4" style={{ maxWidth: '650px' }}>
          <h4 className="text-center">Quality Rate</h4>
          <div style={{ position: 'relative', height: '150px', width: '100%' }}>
            <Line data={qualityData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
