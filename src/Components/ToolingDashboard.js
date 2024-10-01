import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ToolingDashboard = () => {
  // Sample data structure (Replace this with actual data fetching logic)
  const toolingData = [
    {
      toolNumber: 'T1',
      operations: [
        { op: 'OP20', life: 40000, used: 20000, remaining: 20000 },
        { op: 'OP30', life: 35670, used: 15000, remaining: 5000 },
        { op: 'OP40', life: 50000, used: 20000, remaining: 30000 },
        { op: 'OP50', life: 20000, used: 15000, remaining: 5000 },
      ],
    },
    {
      toolNumber: 'T2',
      operations: [
        { op: 'OP20', life: 65000, used: 40000, remaining: 25000 },
        { op: 'OP30', life: 50000, used: 40000, remaining: 10000 },
        { op: 'OP40', life: 30000, used: 25000, remaining: 5000 },
        { op: 'OP50', life: 20000, used: 18000, remaining: 2000 },
      ],
    },
    // Add more tool data as needed...
  ];

  // Helper function to apply red color for values below 15000 and green above 15000
  const getCellStyle = (value) => ({
    color: value < 15000 ? 'red' : 'green',
  });

  return (
    <div className="container-fluid" style={{ marginTop: "4rem" }}>
      {/* First Row: Heading */}
      <div className="row mb-0">
        <div className="col text-center bg-warning">
          <h5 className="font-weight-bold">Tooling Dashboard</h5>
        </div>
      </div>

      {/* Second Row: Table */}
      <div className="row mb-2">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              {/* Header Row */}
              <thead className="thead-dark">
                <tr className="text-center">
                  <th rowSpan="2">Tool No.</th>
                  <th colSpan="3">OP20</th>
                  <th colSpan="3">OP30</th>
                  <th colSpan="3">OP40</th>
                  <th colSpan="3">OP50</th>
                </tr>
                <tr className="text-center">
                  <th>Life</th>
                  <th>Used</th>
                  <th>Remaining</th>
                  <th>Life</th>
                  <th>Used</th>
                  <th>Remaining</th>
                  <th>Life</th>
                  <th>Used</th>
                  <th>Remaining</th>
                  <th>Life</th>
                  <th>Used</th>
                  <th>Remaining</th>
                </tr>
              </thead>
              <tbody>
                {toolingData.map((tool, index) => (
                  <tr key={index} className="text-center">
                    <td className="font-weight-bold">{tool.toolNumber}</td>
                    {tool.operations.map((op, idx) => (
                      <React.Fragment key={idx}>
                        <td style={getCellStyle(op.life)}>
                          {op.life}
                        </td>
                        <td style={getCellStyle(op.used)}>
                          {op.used}
                        </td>
                        <td style={getCellStyle(op.remaining)}>
                          {op.remaining}
                        </td>
                      </React.Fragment>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Third Row: Cards */}
      <div className="row mt-0">
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card border rounded bg-light h-100">
            <div className="card-header text-center font-weight-bold">Tool Change Data</div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>A: 8</li>
                <li>B: 11</li>
                <li>C: 5</li>
                <li>Total: 24</li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <span className="text-muted">End of Data</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="card border rounded bg-light h-100">
            <div className="card-header text-center font-weight-bold">Unit of Description</div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>Life: 8</li>
                <li>Used: 11</li>
                <li>Remaining: 5</li>
              </ul>
            </div>
            <div className="card-footer text-center">
              <span className="text-muted">End of Data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolingDashboard;
