import React from 'react';
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = ({ title, chartType, height }) => {
  const data = {
    labels: ['Fanuc', 'Mazak', 'Mori', 'MTC1', 'Okuma', 'SRC 1'],
    datasets: [
      {
        label: 'Downtime',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#ff6384',
      },
      {
        label: 'Unscheduled Downtime',
        backgroundColor: '#36A2EB', // Color 2
        data: [8, 12, 5, 7, 3],
      },
      {
        label: 'Maintenance Downtime',
        backgroundColor: '#FFCE56', // Color 3
        data: [4, 7, 2, 3, 6],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        x: {
            stacked: true, // Stack the data
          },
          y: {
            stacked: true, // Stack the data
            beginAtZero: true,
          },
    },
    plugins: {
      legend: {
        display: false,
      },
       tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  };

  return (
    <Card className="mb-4">
      <Card.Header>{title}</Card.Header>
      <Card.Body style={{ height: height || '200px' }}>
        <Bar data={data} options={options} />
      </Card.Body>
    </Card>
  );
};

export default ChartComponent;
