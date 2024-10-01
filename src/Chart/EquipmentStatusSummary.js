import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register required elements for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const EquipmentStatusSummary = () => {
  // Sample data for three different downtime categories
  const data = {
    labels: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Machine 5'],
    datasets: [
      {
        label: 'Scheduled ',
        backgroundColor: '#FF6384', // Color 1
        data: [12, 19, 3, 5, 2],
      },
      {
        label: 'Unscheduled ',
        backgroundColor: '#36A2EB', // Color 2
        data: [8, 12, 5, 7, 3],
      },
      {
        label: 'Maintenance ',
        backgroundColor: '#FFCE56', // Color 3
        data: [4, 7, 2, 3, 6],
      },
    ],
  };

  // Options for the bar chart
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
            display: true, // Show legend
            position: 'bottom', // Position the legend box at the bottom
          },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
  };

  return (
    <Card className="mb-4" style={{ height: '250px' }}>
      <Card.Header>Equipment Status Downtime Summary</Card.Header>
      <Card.Body>
        <div style={{ height: '200px' }}>
          <Bar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default EquipmentStatusSummary;
