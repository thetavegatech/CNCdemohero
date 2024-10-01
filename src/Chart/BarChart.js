import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

const BarChart = ({ title }) => {
  const data = {
    labels: ['Fanuc', 'Mazak', 'Mori', 'MTC1', 'Okuma', 'SRC 1'],
    datasets: [
      {
        label: 'Downtime',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#ff6384'
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <Card className="mb-4" style={{ height: '260px' }}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
      <div style={{ height: '200px' }}>
        <Bar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default BarChart;
