import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

// OEEChart Component
const OEEChart = () => {
  // Data for the chart
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1), // Days of the month (1-30)
    datasets: [
      {
        label: 'OEE %',
        data: [45, 52, 33, 60, 70, 60, 50, 40, 80, 85, 78, 75, 80, 65, 72, 58, 65, 75, 55, 60, 70, 65, 75, 80, 85, 65, 60, 70, 80, 60],
        borderColor: '#28a745',
        backgroundColor: 'rgba(40, 167, 69, 0.2)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Actual Production Nos',
        data: [1200, 1100, 1050, 1250, 1300, 1350, 1400, 1150, 1250, 1500, 1450, 1380, 1400, 1200, 1350, 1300, 1400, 1450, 1300, 1400, 1350, 1300, 1450, 1500, 1400, 1300, 1350, 1400, 1450, 1500],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: '3rd Production (Capacity) Nos',
        data: [1500, 1450, 1350, 1400, 1350, 1450, 1400, 1500, 1550, 1600, 1500, 1450, 1500, 1400, 1450, 1500, 1450, 1500, 1450, 1400, 1450, 1500, 1450, 1400, 1450, 1500, 1450, 1500, 1550, 1500],
        borderColor: '#dc3545',
        backgroundColor: 'rgba(220, 53, 69, 0.2)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Days of the Month',
        },
      },
      y: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Values',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className="chart-container" style={{ height: '250px' }}>
      <Line data={data} options={options} />
    </div>
  );
};
// Main ProductionOEEDashboard Component
const ProductionOEEDashboard = () => {
  const scrollInterval = 5000; // Time interval for scrolling (in milliseconds)
  const scrollDistance = 400; // Distance to scroll in each step (in pixels)
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    const scrollPage = () => {
      // Get current scroll position
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollDirection === 'down') {
        // Scroll down
        window.scrollBy(0, scrollDistance);
        // If reached the bottom, change direction
        if (scrollPosition + windowHeight >= documentHeight) {
          setScrollDirection('up');
        }
      } else {
        // Scroll up
        window.scrollBy(0, -scrollDistance);
        // If reached the top, change direction
        if (scrollPosition <= 0) {
          setScrollDirection('down');
        }
      }
    };

    const intervalId = setInterval(scrollPage, scrollInterval);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [scrollDirection, scrollInterval, scrollDistance]);

  return (
    <Container fluid className="p-4 mt-3">
      {/* Header */}
      <Row className="mb-4 mt-4">
        <Col className="text-center">
          <h4 className="font-weight-bold bg-warning p-2"> Production & OEE Dashboard</h4>
        </Col>
      </Row>

      {/* Subheader with two columns */}
      <Row className="mb-4">
        <Col md={6} className="mb-2">
          <h5 className="font-weight-bold text-center">Daily Cell OEE & Loss Capturing Sheet</h5>
        </Col>
        <Col md={6} className="mb-2">
          <h6 className="font-weight-bold text-center text-lightgray">TPM HMCD DAILY WORK MANAGEMENT SHEET NO: 1Rev01</h6>
        </Col>
      </Row>

      {/* OEE Chart */}
      <Row className="mb-4">
        <Col>
          <OEEChart />
        </Col>
      </Row>

      {/* Table Section */}
      <Row>
        <Col>
          <div className="table-responsive">
            <Table bordered className="text-center table-sm" style={{ fontSize: '10px' }}>
              {/* Table Header */}
              <thead className="thead-dark">
                <tr>
                  <th rowSpan="2">S.N</th>
                  <th rowSpan="2">Effect Rate</th>
                  <th rowSpan="2">Loss No.</th>
                  <th rowSpan="2">Loss Name</th>
                  <th rowSpan="2">UOM</th>
                  <th colSpan="3">LAST 3 MONTHS</th>
                  <th colSpan="30">Days</th>
                  <th rowSpan="2">TOTAL</th>
                </tr>
                <tr>
                  <th>July-24</th>
                  <th>Aug-24</th>
                  <th>Sept-24</th>
                  {[...Array(30)].map((_, index) => (
                    <th key={index} style={{ width: '20px' }}>{index + 1}</th>
                  ))}
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {/* Data Rows */}
                {[...Array(21)].map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{rowIndex + 1}</td>
                    <td>{rowIndex < 9 ? 'A' : rowIndex < 16 ? 'P' : 'R'}</td>
                    <td>{rowIndex + 1}</td>
                    <td>
                      {rowIndex === 0
                        ? 'Planned Shutdown Loss'
                        : rowIndex === 1
                        ? 'Breakdown Loss'
                        : rowIndex === 2
                        ? 'Set Up and Adjustment Loss'
                        : rowIndex === 3
                        ? 'Cutting Tool Replacement Loss'
                        : rowIndex === 4
                        ? 'Start Up Time Loss'
                        : rowIndex === 5
                        ? 'Waiting for Material'
                        : rowIndex === 6
                        ? 'Waiting for Approval'
                        : rowIndex === 7
                        ? 'Motion Loss'
                        : rowIndex === 8
                        ? 'Line Organization Loss'
                        : rowIndex === 9
                        ? 'Minor Stoppage & Idling Loss'
                        : rowIndex === 10
                        ? 'Speed Loss'
                        : rowIndex === 11
                        ? 'Yield Loss'
                        : rowIndex === 12
                        ? 'Energy Loss'
                        : rowIndex === 13
                        ? 'Consumable Loss'
                        : rowIndex === 14
                        ? 'Recovery Loss'
                        : rowIndex === 15
                        ? 'Outsourcing Loss'
                        : rowIndex === 16
                        ? 'Profit Loss'
                        : rowIndex === 17
                        ? 'Loss of Vehicles'
                        : rowIndex === 18
                        ? 'Profit Loss Spares'
                        : rowIndex === 19
                        ? 'Rejection (Vendor)'
                        : rowIndex === 20
                        ? 'Rework'
                        : 'Other Loss'}
                    </td>
                    <td>Min</td>
                    <td>100</td>
                    <td>110</td>
                    <td>120</td>
                    {[...Array(30)].map((_, dayIndex) => (
                      <td key={dayIndex} style={{ width: '20px' }}>
                        {dayIndex === 5 || dayIndex === 10 || dayIndex === 15 || dayIndex === 20
                          ? dayIndex * 10
                          : '0'}
                      </td>
                    ))}
                    <td>{600 + rowIndex * 10}</td>
                  </tr>
                ))}

                {/* Footer Rows */}
                <tr className="table-success">
                  <td rowSpan="1">A</td>
                  <td rowSpan="1">TOTAL DOWN TIME (E+A) (Without Planned Shut Down Loss)</td>
                  <td rowSpan="1">Min</td>
                  <td>3185</td>
                  <td>3563</td>
                  <td>3000</td>
                  {[...Array(30)].map((_, index) => (
                    <td key={index} style={{ width: '20px' }}>{index === 4 || index === 12 || index === 24 ? 85 : ''}</td>
                  ))}
                  <td></td> {/* Empty column */}
                  <td></td> {/* Empty column */}
                  <td>3530</td> {/* Total Value for this row */}
                </tr>
                <tr className="table-success">
                  <td rowSpan="1">B</td>
                  <td rowSpan="1">LOADING TIME (C - Loss No. 8)* B</td>
                  <td rowSpan="1">Min</td>
                  <td>32410</td>
                  <td>33020</td>
                  <td>32700</td>
                  {[...Array(30)].map((_, index) => (
                    <td key={index} style={{ width: '20px' }}>{index === 4 || index === 12 || index === 24 ? 1270 : ''}</td>
                  ))}
                  <td></td> {/* Empty column */}
                  <td></td> {/* Empty column */}
                  <td>32900</td> {/* Total Value for this row */}
                </tr>
                <tr className="table-success">
                  <td rowSpan="1">C</td>
                  <td rowSpan="1">AVAILABLE TIME (C) - B</td>
                  <td rowSpan="1">Min</td>
                  <td>28787</td>
                  <td>30022</td>
                  <td>29700</td>
                  {[...Array(30)].map((_, index) => (
                    <td key={index} style={{ width: '20px' }}>{index === 4 || index === 12 || index === 24 ? 1115 : ''}</td>
                  ))}
                  <td></td> {/* Empty column */}
                  <td></td> {/* Empty column */}
                  <td>29770</td> {/* Total Value for this row */}
                </tr>
                <tr className="table-success">
                  <td rowSpan="1">AR</td>
                  <td rowSpan="1">AV. RATE(A/R) = (C-B) X 100</td>
                  <td rowSpan="1">%</td>
                  <td rowSpan="1">%</td>
                  <td rowSpan="1">%</td>
                  <td>91%</td>
                  <td>93%</td>
                  <td>91%</td>
                  {[...Array(30)].map((_, index) => (
                    <td key={index} style={{ width: '20px' }}>{index === 4 || index === 12 || index === 24 ? 89 : ''}</td>
                  ))}
                  {/* <td></td> Empty column */}
                  {/* <td></td> Empty column */}
                  <td>89%</td> {/* Total Value for this row */}
                </tr>
                <tr className="table-success">
                  <td rowSpan="1">D</td>
                  <td rowSpan="1">ACTUAL PRODUCTION (D)</td>
                  <td rowSpan="1">Nos</td>
                  <td>37485</td>
                  <td>37845</td>
                  <td>37845</td>
                  {[...Array(30)].map((_, index) => (
                    <td key={index} className=" text-dark" style={{ width: '20px' }}>
                      {index === 4 || index === 12 || index === 24 ? '1510' : ''}
                    </td>
                  ))}
                  <td></td> {/* Empty column */}
                  <td></td> {/* Empty column */}
                  <td>34944</td> {/* Total Value for this row */}
                </tr>
                <tr className="table-success">
                  <td rowSpan="1">E</td>
                  <td rowSpan="1">ACTUAL PRODUCTION RATE (E)</td>
                  <td rowSpan="1">Nos/Min</td>
                  <td colSpan="3">1.2</td>
                  {[...Array(30)].map((_, index) => (
                    <td key={index} className=" text-dark" style={{ width: '20px' }}>
                      {index === 4 || index === 12 || index === 24 ? '101%' : ''}
                    </td>
                  ))}
                  <td></td> {/* Empty column */}
                  <td></td> {/* Empty column */}
                  <td>94%</td> {/* Total Value for this row */}
                </tr>
                <tr className="table-danger">
                  <td rowSpan="1">PR</td>
                  <td rowSpan="1">PERFORMANCE RATE</td>
                  <td rowSpan="1">%</td>
                  <td colSpan="3">101%</td>
                  {[...Array(30)].map((_, index) => (
                    <td key={index} className=" text-dark" style={{ width: '20px' }}>
                      {index === 4 || index === 12 || index === 24 ? '71%' : ''}
                    </td>
                  ))}
                  <td></td> {/* Empty column */}
                  <td></td> {/* Empty column */}
                  <td>84%</td> {/* Total Value for this row */}
                </tr>
                <tr className="table-success">
                  <td rowSpan="1">OEE</td>
                  <td rowSpan="1">OEE (%)</td>
                  <td rowSpan="1">%</td>
                  <td colSpan="3">84%</td>
                  {[...Array(30)].map((_, index) => (
                    <td key={index} className=" text-dark" style={{ width: '20px' }}>
                      {index === 4 || index === 12 || index === 24 ? '84%' : ''}
                    </td>
                  ))}
                  <td></td> {/* Empty column */}
                  <td></td> {/* Empty column */}
                  <td>84%</td> {/* Total Value for this row */}
                </tr>

              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductionOEEDashboard;
