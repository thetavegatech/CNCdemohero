import React from 'react';
import { Table, Card } from 'react-bootstrap';
import './StatusTable.css';

// Helper function to determine row style based on the minimum duration value
const getRowStyle = (value, minValue) => {
  if (value === minValue) {

    return { backgroundColor: 'rgba(255, 99, 132, 0.5)', color: '#FF0000', fontWeight: 'bold' }; // Red for lowest value
  }else{
    return { backgroundColor: 'rgba(255, 99, 132, 0.5)', color: 'green', fontWeight: 'bold' }; // Red for lowest value

  }
  return {};
};

const StatusTable = () => {
  // Data for the table
  const tableData = [
    { general: 'In Cycle', specific: 'Spindle Load', equipment: 'Fanuc', duration: 0.5 },
    { general: 'In Cycle', specific: 'Spindle Load', equipment: 'Mazak', duration: 1.02 },
    { general: 'Unplanned Downtime', specific: 'Quality', equipment: 'Mori', duration: 0.12},
    // Add more rows as needed
  ];

  // Find the minimum duration value
  const minDuration = Math.min(...tableData.map(row => row.duration));

  return (
    <Card className="mb-2">
      <body>
        <h5>Equipment Status Grid</h5>
        <Table style={{ backgroundColor: "red"}}>
          <thead>
            <tr>
              <th>General</th>
              <th>Specific</th>
              <th>Equipment</th>
              <th>General Duration</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} style={getRowStyle(row.duration, minDuration)}>
                <td>{row.general}</td>
                <td>{row.specific}</td>
                <td>{row.equipment}</td>
                <td>{row.duration}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </body>
    </Card>
  );
};

export default StatusTable;
