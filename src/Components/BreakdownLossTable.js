import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

const BreakdownLossTable = () => {
  // List of major loss types
  const majorLossTypes = [
    'High spindle runout',
    'Axis backlash (Z axis/X Axis/Y axis/ B Axis)',
    'ATC Turret restoration',
    'Tool Falling',
    'Fan failure',
    'Drive Failure',
    'Clamp Fault',
    'BTS Fault',
    'Seat check loss',
    'Power Tripping',
    'Telescopic guard damage',
    'Hyd Oil Leakage',
    'Leak Alarm',
    'Pulse coder failure',
    'Tool clamp fault',
    'Electronic failure',
  ];

  // Initial state for the table data with one initial row of inputs for each shift
  const initialTableData = [
    { machine: 'OP20', shifts: [[{ lossType: '', duration: '' }], [{ lossType: '', duration: '' }], [{ lossType: '', duration: '' }]] },
    { machine: 'OP30', shifts: [[{ lossType: '', duration: '' }], [{ lossType: '', duration: '' }], [{ lossType: '', duration: '' }]] },
    { machine: 'OP40', shifts: [[{ lossType: '', duration: '' }], [{ lossType: '', duration: '' }], [{ lossType: '', duration: '' }]] },
    { machine: 'OP50', shifts: [[{ lossType: '', duration: '' }], [{ lossType: '', duration: '' }], [{ lossType: '', duration: '' }]] },
  ];

  // State to hold the table data
  const [tableData, setTableData] = useState(initialTableData);

  // Handle change for inputs
  const handleInputChange = (machineIndex, shiftIndex, lossIndex, field, value) => {
    const updatedData = [...tableData];
    updatedData[machineIndex].shifts[shiftIndex][lossIndex][field] = value;
    setTableData(updatedData);
  };

  // Handle adding a new loss row for all shifts of a specific machine
  const handleAddLoss = (machineIndex) => {
    const updatedData = [...tableData];
    updatedData[machineIndex].shifts.forEach((shift) => {
      shift.push({ lossType: '', duration: '' });
    });
    setTableData(updatedData);
  };

  return (
    <div className="container-fluid" style={{marginTop:"6rem"}}>
      <h4 className="text-center my-4">Breakdown Loss Details</h4>
      <Table bordered responsive className="text-center" style={{ width: '90%', margin: '0 auto' }}>
        <thead className="thead-dark">
          <tr>
            <th rowSpan="2">S.No</th>
            <th rowSpan="2">Machine</th>
            <th colSpan="2">A Shift</th>
            <th colSpan="2">B Shift</th>
            <th colSpan="2">C Shift</th>
            <th rowSpan="2">Action</th>
          </tr>
          <tr>
            <th>Loss Type</th>
            <th>Duration (in min)</th>
            <th>Loss Type</th>
            <th>Duration (in min)</th>
            <th>Loss Type</th>
            <th>Duration (in min)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, machineIndex) => (
            <React.Fragment key={machineIndex}>
              {row.shifts[0].map((_, lossIndex) => (
                <tr key={`${machineIndex}-${lossIndex}`}>
                  {lossIndex === 0 && (
                    <>
                      <td rowSpan={row.shifts[0].length}>{machineIndex + 1}</td>
                      <td rowSpan={row.shifts[0].length} className="align-middle">{row.machine}</td>
                    </>
                  )}
                  {/* Inputs for A Shift */}
                  <td>
                    <Form.Control
                      as="select"
                      value={row.shifts[0][lossIndex].lossType}
                      onChange={(e) => handleInputChange(machineIndex, 0, lossIndex, 'lossType', e.target.value)}
                    >
                      <option value="">Select</option>
                      {majorLossTypes.map((type, idx) => (
                        <option key={idx} value={type}>{type}</option>
                      ))}
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      min="0"
                      value={row.shifts[0][lossIndex].duration}
                      onChange={(e) => handleInputChange(machineIndex, 0, lossIndex, 'duration', e.target.value)}
                    />
                  </td>
                  {/* Inputs for B Shift */}
                  <td>
                    <Form.Control
                      as="select"
                      value={row.shifts[1][lossIndex].lossType}
                      onChange={(e) => handleInputChange(machineIndex, 1, lossIndex, 'lossType', e.target.value)}
                    >
                      <option value="">Select</option>
                      {majorLossTypes.map((type, idx) => (
                        <option key={idx} value={type}>{type}</option>
                      ))}
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      min="0"
                      value={row.shifts[1][lossIndex].duration}
                      onChange={(e) => handleInputChange(machineIndex, 1, lossIndex, 'duration', e.target.value)}
                    />
                  </td>
                  {/* Inputs for C Shift */}
                  <td>
                    <Form.Control
                      as="select"
                      value={row.shifts[2][lossIndex].lossType}
                      onChange={(e) => handleInputChange(machineIndex, 2, lossIndex, 'lossType', e.target.value)}
                    >
                      <option value="">Select</option>
                      {majorLossTypes.map((type, idx) => (
                        <option key={idx} value={type}>{type}</option>
                      ))}
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      min="0"
                      value={row.shifts[2][lossIndex].duration}
                      onChange={(e) => handleInputChange(machineIndex, 2, lossIndex, 'duration', e.target.value)}
                    />
                  </td>
                  {lossIndex === 0 && (
                    <td rowSpan={row.shifts[0].length}>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleAddLoss(machineIndex)}
                      >
                        Add Loss
                      </Button>
                    </td>
                  )}
                </tr>
              ))}
            </React.Fragment>
          ))}
          <tr>
            <td colSpan="9" className="font-weight-bold text-right">Total Loss Time</td>
          </tr>
          <tr>
            <td colSpan="9" className="font-weight-bold text-right text-primary">Total Breakdown Loss Time</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BreakdownLossTable;
