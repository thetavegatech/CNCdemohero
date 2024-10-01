// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table, Container } from 'react-bootstrap';

// const DowntimeTable = () => {
//   const [downtimes, setDowntimes] = useState([]);

//   // Fetch downtimes from the backend
//   const fetchDowntimes = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/downtime');
//       if (response.ok) {
//         const data = await response.json();
//         setDowntimes(data);
//       } else {
//         console.error('Failed to fetch downtime data');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchDowntimes();
//   }, []);

//   return (
//     <Container className="mt-5">
//       <h3 className="text-center">Downtime Records</h3>
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Machine ID</th>
//             <th>Downtime Reason</th>
//             <th>Technician</th>
//             <th>Shift</th>
//             <th>Line Name</th>
//             <th>Location</th>
//             <th>Downtime Start</th>
//             <th>Downtime End</th>
//             <th>Remark</th>
//             <th>Action Taken</th>
//             <th>Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {downtimes.length > 0 ? (
//             downtimes.map((downtime, index) => (
//               <tr key={downtime._id}>
//                 <td>{index + 1}</td>
//                 <td>{downtime.machineId}</td>
//                 <td>{downtime.downtimeReason}</td>
//                 <td>{downtime.technician}</td>
//                 <td>{downtime.shift}</td>
//                 <td>{downtime.lineName}</td>
//                 <td>{downtime.location}</td>
//                 <td>{new Date(downtime.downtimeStart).toLocaleString()}</td>
//                 <td>{new Date(downtime.downtimeEnd).toLocaleString()}</td>
//                 <td>{downtime.remark}</td>
//                 <td>{downtime.actionTaken}</td>
//                 <td>{new Date(downtime.createdAt).toLocaleString()}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="12" className="text-center">No downtime records found</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default DowntimeTable;



// new
// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table, Container, Button, Modal, Form } from 'react-bootstrap';

// const DowntimeTable = () => {
//   const [downtimes, setDowntimes] = useState([]);
//   const [selectedDowntime, setSelectedDowntime] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [formData, setFormData] = useState({
//     machineId: '',
//     downtimeReason: '',
//     technician: '',
//     shift: '',
//     lineName: '',
//     location: '',
//     downtimeStart: '',
//     downtimeEnd: '',
//     remark: '',
//     actionTaken: ''
//   });

//   // Fetch downtimes from the backend
//   const fetchDowntimes = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/downtime');
//       if (response.ok) {
//         const data = await response.json();
//         setDowntimes(data);
//       } else {
//         console.error('Failed to fetch downtime data');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchDowntimes();
//   }, []);

//   // Handle edit button click
//   const handleEditClick = (downtime) => {
//     setSelectedDowntime(downtime);
//     setFormData(downtime); // Load current downtime data into formData state
//     setShowEditModal(true); // Show modal
//   };

//   // Handle delete button click
//   const handleDeleteClick = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/downtime/${id}`, {
//         method: 'DELETE'
//       });
//       if (response.ok) {
//         alert('Downtime record deleted successfully');
//         fetchDowntimes(); // Refresh data
//       } else {
//         console.error('Failed to delete downtime record');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Handle form data changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle edit form submission
//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:5000/downtime/${selectedDowntime._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         alert('Downtime record updated successfully');
//         setShowEditModal(false);
//         fetchDowntimes(); // Refresh data
//       } else {
//         console.error('Failed to update downtime record');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Close modal and clear selection
//   const handleCloseModal = () => {
//     setShowEditModal(false);
//     setSelectedDowntime(null);
//   };

//   return (
//     <Container className="mt-5">
//       <h3 className="text-center">Downtime Records</h3>
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Machine ID</th>
//             <th>Downtime Reason</th>
//             <th>Technician</th>
//             <th>Shift</th>
//             <th>Line Name</th>
//             <th>Location</th>
//             <th>Downtime Start</th>
//             <th>Downtime End</th>
//             <th>Remark</th>
//             <th>Action Taken</th>
//             <th>Created At</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {downtimes.length > 0 ? (
//             downtimes.map((downtime, index) => (
//               <tr key={downtime._id}>
//                 <td>{index + 1}</td>
//                 <td>{downtime.machineId}</td>
//                 <td>{downtime.downtimeReason}</td>
//                 <td>{downtime.technician}</td>
//                 <td>{downtime.shift}</td>
//                 <td>{downtime.lineName}</td>
//                 <td>{downtime.location}</td>
//                 <td>{new Date(downtime.downtimeStart).toLocaleString()}</td>
//                 <td>{new Date(downtime.downtimeEnd).toLocaleString()}</td>
//                 <td>{downtime.remark}</td>
//                 <td>{downtime.actionTaken}</td>
//                 <td>{new Date(downtime.createdAt).toLocaleString()}</td>
//                 <td>
//                   <Button
//                     variant="warning"
//                     size="sm"
//                     onClick={() => handleEditClick(downtime)}
//                     className="me-2"
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     variant="danger"
//                     size="sm"
//                     onClick={() => handleDeleteClick(downtime._id)}
//                   >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="13" className="text-center">No downtime records found</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>

//       {/* Edit Modal */}
//       <Modal show={showEditModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Downtime</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleEditSubmit}>
//             <Form.Group controlId="formMachineId">
//               <Form.Label>Machine ID</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="machineId"
//                 value={formData.machineId}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formDowntimeReason">
//               <Form.Label>Downtime Reason</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="downtimeReason"
//                 value={formData.downtimeReason}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formTechnician">
//               <Form.Label>Technician</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="technician"
//                 value={formData.technician}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formShift">
//               <Form.Label>Shift</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="shift"
//                 value={formData.shift}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formLineName">
//               <Form.Label>Line Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lineName"
//                 value={formData.lineName}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formLocation">
//               <Form.Label>Location</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formDowntimeStart">
//               <Form.Label>Downtime Start</Form.Label>
//               <Form.Control
//                 type="datetime-local"
//                 name="downtimeStart"
//                 value={formData.downtimeStart}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formDowntimeEnd">
//               <Form.Label>Downtime End</Form.Label>
//               <Form.Control
//                 type="datetime-local"
//                 name="downtimeEnd"
//                 value={formData.downtimeEnd}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formRemark">
//               <Form.Label>Remark</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="remark"
//                 value={formData.remark}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formActionTaken">
//               <Form.Label>Action Taken</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="actionTaken"
//                 value={formData.actionTaken}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mt-3">
//               Save Changes
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// };

// export default DowntimeTable;


// run
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container, Button, Modal, Form } from 'react-bootstrap';

const DowntimeTable = () => {
  const [downtimes, setDowntimes] = useState([]);
  const [selectedDowntime, setSelectedDowntime] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    machineId: '',
    downtimeReason: '',
    technician: '',
    shift: '',
    lineName: '',
    location: '',
    downtimeStart: '',
    downtimeEnd: '',
    remark: '',
    actionTaken: ''
  });

  // Fetch downtimes from the backend
  const fetchDowntimes = async () => {
    try {
      const response = await fetch('http://localhost:5000/downtime');
      if (response.ok) {
        const data = await response.json();
        setDowntimes(data);
      } else {
        console.error('Failed to fetch downtime data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchDowntimes();
  }, []);

  // Handle edit button click
  const handleEditClick = (downtime) => {
    setSelectedDowntime(downtime);
    setFormData(downtime); // Load current downtime data into formData state
    setShowEditModal(true); // Show modal
  };

  // Handle delete button click
  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/downtime/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        alert('Downtime record deleted successfully');
        fetchDowntimes(); // Refresh data
      } else {
        console.error('Failed to delete downtime record');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/downtime/${selectedDowntime._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Downtime record updated successfully');
        setShowEditModal(false);
        fetchDowntimes(); // Refresh data
      } else {
        console.error('Failed to update downtime record');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Close modal and clear selection
  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedDowntime(null);
  };

  return (
    <Container className="mt-5">
      <h3 className="text-center">Downtime Records</h3>
      <Table striped bordered hover responsive>
        <thead className='bg-dark text-white'>
          <tr>
            <th>#</th>
            <th style={{ whiteSpace: 'nowrap' }}>Machine ID</th>
            <th style={{ whiteSpace: 'nowrap' }}>Downtime Reason</th>
            <th style={{ whiteSpace: 'nowrap' }}>Technician</th>
            <th>Shift</th>
            <th style={{ whiteSpace: 'nowrap' }}>Line Name</th>
            <th>Location</th>
            <th style={{ whiteSpace: 'nowrap' }}>Downtime Start</th>
            <th style={{ whiteSpace: 'nowrap' }}>Downtime End</th>
            <th>Remark</th>
            <th style={{ whiteSpace: 'nowrap' }}>Action Taken</th>
            <th style={{ whiteSpace: 'nowrap' }}>Created At</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {downtimes.length > 0 ? (
            downtimes.map((downtime, index) => (
              <tr key={downtime._id}>
                <td>{index + 1}</td>
                <td>{downtime.machineId}</td>
                <td>{downtime.downtimeReason}</td>
                <td>{downtime.technician}</td>
                <td>{downtime.shift}</td>
                <td>{downtime.lineName}</td>
                <td>{downtime.location}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{new Date(downtime.downtimeStart).toLocaleString()}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{new Date(downtime.downtimeEnd).toLocaleString()}</td>
                <td>{downtime.remark}</td>
                <td>{downtime.actionTaken}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{new Date(downtime.createdAt).toLocaleString()}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEditClick(downtime)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteClick(downtime._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="14" className="text-center">No downtime records found</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Downtime</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditSubmit}>
            <Form.Group controlId="formMachineId">
              <Form.Label>Machine ID</Form.Label>
              <Form.Control
                type="text"
                name="machineId"
                value={formData.machineId}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDowntimeReason">
              <Form.Label>Downtime Reason</Form.Label>
              <Form.Control
                type="text"
                name="downtimeReason"
                value={formData.downtimeReason}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formTechnician">
              <Form.Label>Technician</Form.Label>
              <Form.Control
                type="text"
                name="technician"
                value={formData.technician}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formShift">
              <Form.Label>Shift</Form.Label>
              <Form.Control
                type="text"
                name="shift"
                value={formData.shift}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formLineName">
              <Form.Label>Line Name</Form.Label>
              <Form.Control
                type="text"
                name="lineName"
                value={formData.lineName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDowntimeStart">
              <Form.Label>Downtime Start</Form.Label>
              <Form.Control
                type="datetime-local"
                name="downtimeStart"
                value={formData.downtimeStart}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDowntimeEnd">
              <Form.Label>Downtime End</Form.Label>
              <Form.Control
                type="datetime-local"
                name="downtimeEnd"
                value={formData.downtimeEnd}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formRemark">
              <Form.Label>Remark</Form.Label>
              <Form.Control
                type="text"
                name="remark"
                value={formData.remark}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formActionTaken">
              <Form.Label>Action Taken</Form.Label>
              <Form.Control
                type="text"
                name="actionTaken"
                value={formData.actionTaken}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default DowntimeTable;
