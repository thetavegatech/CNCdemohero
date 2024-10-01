import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

// Register required components and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

const DowntimeParetoChart = () => {
  // Sample data for downtime (bars) and cumulative percentage (line)
  const downtimeData = [12, 19, 3, 5, 2];
  const cumulativePercentage = downtimeData.reduce((acc, val) => {
    const last = acc.length > 0 ? acc[acc.length - 1] : 0;
    acc.push(last + (val / downtimeData.reduce((sum, d) => sum + d, 0)) * 100);
    return acc;
  }, []);

  const data = {
    labels: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Machine 5'],
    datasets: [
      {
        type: 'bar',
        label: 'Downtime',
        data: downtimeData,
        backgroundColor: '#FF6384', // Bar color
        yAxisID: 'y',
      },
      {
        type: 'line',
        label: 'Cumulative %',
        data: cumulativePercentage,
        borderColor: '#36A2EB', // Line color
        fill: false,
        yAxisID: 'y1',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        position: 'left',
        title: {
          display: true,
          text: 'Downtime',
        },
      },
      y1: {
        beginAtZero: true,
        position: 'right',
        title: {
          display: true,
          text: 'Cumulative %',
        },
        ticks: {
          callback: function (value) {
            return value + '%'; // Add percentage to y1 axis
          },
        },
        grid: {
          drawOnChartArea: false, // Remove gridlines from y1
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      annotation: {
        annotations: {
          cutoffLine: {
            type: 'line',
            yMin: 80, // Cutoff value for the line
            yMax: 80,
            borderColor: 'rgba(75, 192, 192, 0.4)',
            borderWidth: 2,
            borderDash: [6, 6],
            label: {
              content: 'Cutoff',
              enabled: true,
              position: 'center',
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
          },
        },
      },
    },
  };

  return (
    <Card className="mb-4" style={{ height: '260px' }}>
      <Card.Header>Equipment Status Downtime Pareto</Card.Header>
      <Card.Body>
        <div style={{ height: '200px' }}>
          <Bar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default DowntimeParetoChart;
