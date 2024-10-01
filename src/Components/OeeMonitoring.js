import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UtilizationCard from '../Chart/UtilizationCard';
import ChartComponent from '../Chart/ChartComponent';
import StatusTable from '../Chart/StatusTable';
import EquipmentStatusSummary from '../Chart/EquipmentStatusSummary';
import DowntimeParetoChart from '../Chart/DowntimeParetoChart';
import Barchart from '../Chart/BarChart'

const Dashboard = () => {
  const scrollInterval = 3000; // Time interval for scrolling (in milliseconds)
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
    <Container fluid style={{marginTop: "4rem"}}>
      {/* <h2 className="text-center ">Machine & OEE Monitoring</h2> */}
      <h3 className="text-center1  mb-3">Machine & OEE Monitoring</h3>
      <Row>
        {/* First Column for Charts and Table */}
        <Col lg={8}>
          <Row>
            <Col md={6}>
              {/* New Equipment Status Downtime Summary Chart */}
              <EquipmentStatusSummary />
            </Col>
            <Col md={6}>
              <ChartComponent title="Equipment Status Timeline" chartType="bar" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            <DowntimeParetoChart />            </Col>
            <Col md={6}>
              <Barchart title="Equipment Status Current" chartType="bar" />
            </Col>
          </Row>
          <Row>
            <StatusTable />
          </Row>
        </Col>

        {/* Second Column for Utilization Cards */}
        <Col lg={4}>
          <Row>
            <UtilizationCard stage="Stage 1" utilization={80} program="8064" />
            <UtilizationCard stage="Stage 2" utilization={67} program="633" />
          </Row>
          <Row>
            <UtilizationCard stage="Stage 3" utilization={80} program="8027" />
            <UtilizationCard stage="Stage 4" utilization={96} program="323" />
          </Row>
          <Row>
            <UtilizationCard stage="Stage 5" utilization={57} program="17" />
            <UtilizationCard stage="Stage 6" utilization={83} program="1076" />
          </Row>
          <Row>
            <UtilizationCard stage="Stage 7" utilization={75} program="6359" />
            <UtilizationCard stage="Stage 8" utilization={0} program="-" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
