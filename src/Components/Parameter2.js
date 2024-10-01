import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Parameter.css';

const Dashboard = () => {
  return (
    <Container fluid style={{ marginTop: '4rem' }}>
      {/* Header Row */}
      <Row className="mb-3">
        <Col className="text-center">
          <h3>Dashboard Parameters</h3>
        </Col>
      </Row>

      {/* Main Content Row */}
      <Row className='g-5'>
        {/* Left Column */}
        <Col md={6} className="mb-3">
          {[
            'Ball Screw Life over X - Axis',
            'Ball Screw Life over Y - Axis',
            'Ball Screw Life over Z - Axis',
            'Ball Screw Bearing Life over X - Axis',
            'Ball Screw Bearing Life over Y - Axis',
            'Ball Screw Bearing Life over Z - Axis',
            'CNC Battery Life',
            'Encoder Battery Life'
          ].map((label, index) => (
            <Row key={index} className="parameter-row mb-2">
              <Col className="d-flex align-items-center text-center">
                <div className="col-7 d-flex align-items-center justify-content-center text-center">
                  <span className="parameter-label" style={{ margin: '5px' }}>{label}</span>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center text-center">
                  <span className="status-good">4000</span>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center text-center">
                  <span className="status-good">4000</span>
                </div>
                <div className="col-1 d-flex align-items-center justify-content-center text-center">
                  <span className="parameter-value">Hrs</span>
                </div>
              </Col>
            </Row>
          ))}
        </Col>

        {/* Right Column */}
        <Col md={6} className="mb-3">
          {[
            'Spindle Motor Fan to be cleaned',
            'CNC Fan to be cleaned',
            'Telescopic guard overhauling to be done',
            'B – Axis oil to be changed',
            'Cam follower greasing to be done',
            'Turret cleaning to be done',
            'UC cam roller to be changed',
            'Cam follower roller to be done'
          ].map((label, index) => (
            <Row key={index} className="parameter-row mb-2">
              <Col className="d-flex align-items-center text-center">
                <div className="col-7 d-flex align-items-center justify-content-center text-center">
                  <span className="parameter-label" style={{ margin: '5px' }}>{label}</span>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center text-center">
                  <span className="status-warning">50</span>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center text-center">
                  <span className="status-good">4000</span>
                </div>
                <div className="col-1 d-flex align-items-center justify-content-center text-center">
                  <span className="parameter-value">Hrs</span>
                </div>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>

      {/* Footer Buttons Row */}
      <Row className="footer-buttons mt-4 text-center">
  {[
    { label: 'Graph', variant: 'primary' },
    { label: 'MACHINE1', variant: 'success' },
    { label: 'MACHINE2', variant: 'danger' },
    { label: 'MACHINE3', variant: 'warning' },
    { label: 'MACHINE4', variant: 'info' },
    { label: 'MACHINE5', variant: 'light' },
    { label: 'MACHINE6', variant: 'dark' }
  ].map((button, index) => (
    <Col key={index} xs={6} md={3} lg={2} className="mb-2">
      <Button variant={button.variant} className="w-100">
        {button.label}
      </Button>
    </Col>
  ))}
</Row>

    </Container>
  );
};

export default Dashboard;
