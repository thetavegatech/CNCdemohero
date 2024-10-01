import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin for center text with custom colors
const centerTextPlugin = {
  id: 'centerText',
  afterDatasetsDraw(chart, args, options) {
    const { ctx, data } = chart;
    const total = data.datasets[0].data.reduce((acc, val) => acc + val, 0);
    const percentage = data.datasets[0].data[0];

    // Draw the text in the center
    ctx.save();
    const x = chart.getDatasetMeta(0).data[0].x;
    const y = chart.getDatasetMeta(0).data[0].y;

    // Percentage value
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = '#fff'; // Change this color for percentage value
    ctx.fillText(`${percentage}%`, x, y - 5);

    // Utilization heading
    ctx.font = 'bold 12px Arial';
    ctx.fillStyle = '#fff'; // Change this color for "Utilization" heading
    ctx.fillText('Utilization', x, y + 15);

    ctx.restore();
  },
};

// Define custom colors for each stage card
const stageColors = {
  'Stage 1': '#FF5733', // Example color for Stage 1
  'Stage 2': '#33FF57', // Example color for Stage 2
  'Stage 3': '#3357FF', // Example color for Stage 3
  'Stage 4': '#F1C40F', // Example color for Stage 4
  'Stage 5': '#8E44AD', // Example color for Stage 5
  'Stage 6': '#E74C3C', // Example color for Stage 6
  'Stage 7': '#27AE60', // Example color for Stage 7
  'Stage 8': '#3498DB', // Example color for Stage 8
};

const UtilizationCard = ({ stage, utilization, program }) => {
  const data = {
    labels: ['Utilization', 'Remaining'],
    datasets: [
      {
        data: [utilization, 100 - utilization],
        backgroundColor: ['#36A2EB', '#FF6384'], // Pie chart colors
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend to match the provided design
      },
      centerText: true, // Enable custom plugin
    },
  };

  // Get the background color for the stage
  const cardColor = stageColors[stage] || '#ffffff'; // Default to white if no color is found

  return (
    <Col sm={6} className="mb-2">
      <Card style={{ height: '200px', backgroundColor: cardColor }}>
        <Card.Header className="text-center" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
          <h6 className="text-center mb-0">{stage} </h6>
        </Card.Header>
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <div style={{ width: '100%', height: '100px' }}>
            <Pie data={data} options={options} plugins={[centerTextPlugin]} />
          </div>
          <p className="mt-2 text-center">Program: {program}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UtilizationCard;
