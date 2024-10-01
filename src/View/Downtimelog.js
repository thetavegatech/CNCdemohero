// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';

// const ResponsiveForm = () => {
//   return (
//     <Container fluid className="p-4 mt-5">
//       <div className="container my-5 pt-2 border border-1 mt-0">
//         <Row className="text-center py-2 mb-0">
//           <Col>
//             <h3>DownTime </h3>
//           </Col>
//         </Row>
//         <form className='mt-4 mb-2'>
//           <div className="row mt-4">
//             {/* Machine ID */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="machineId" className="form-label">Machine ID</label>
//               <select id="machineId" className="form-select">
//                 <option defaultValue>Select Machine ID</option>
//                 <option>Machine 001</option>
//                 <option>Machine 002</option>
//                 <option>Machine 003</option>
//               </select>
//             </div>

//             {/* Downtime Reason */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="downtimeReason" className="form-label">Downtime Reason</label>
//               <select id="downtimeReason" className="form-select">
//                 <option defaultValue>Select Downtime Reason</option>
//                 <option>Breakdown</option>
//                 <option>Maintenance</option>
//                 <option>Setup Issue</option>
//               </select>
//             </div>

//             {/* Assigned Technician */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="technician" className="form-label">Assigned Technician</label>
//               <select id="technician" className="form-select">
//                 <option defaultValue>Select Technician</option>
//                 <option>Technician 1</option>
//                 <option>Technician 2</option>
//                 <option>Technician 3</option>
//               </select>
//             </div>

//             {/* Shift */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="shift" className="form-label">Shift</label>
//               <select id="shift" className="form-select">
//                 <option defaultValue>Select Shift</option>
//                 <option>Shift 1</option>
//                 <option>Shift 2</option>
//                 <option>Shift 3</option>
//               </select>
//             </div>

//             {/* Line Name */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="lineName" className="form-label">Line Name</label>
//               <select id="lineName" className="form-select">
//                 <option defaultValue>Select Line</option>
//                 <option>Line 1</option>
//                 <option>Line 2</option>
//                 <option>Line 3</option>
//               </select>
//             </div>

//             {/* Location */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="location" className="form-label">Location</label>
//               <input type="text" id="location" className="form-control" placeholder="Enter Location" />
//             </div>

//             {/* Downtime Start */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="downtimeStart" className="form-label">Downtime Start</label>
//               <input type="datetime-local" id="downtimeStart" className="form-control" />
//             </div>

//             {/* Downtime End */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="downtimeEnd" className="form-label">Downtime End</label>
//               <input type="datetime-local" id="downtimeEnd" className="form-control" />
//             </div>

//             {/* Remark */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="remark" className="form-label">Remark</label>
//               <textarea id="remark" className="form-control" rows="2" placeholder="Enter Remark"></textarea>
//             </div>

//             {/* Action Taken */}
//             <div className="col-lg-8 col-md-10 col-sm-12 mb-1" style={{ width: '25rem'}}>
//               <label htmlFor="actionTaken" className="form-label">Action Taken</label>
//               <textarea id="actionTaken" className="form-control" rows="3" placeholder="Enter Action Taken"></textarea>
//             </div>

//             {/* Save Downtime Button */}
//             {/* <div className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex align-items-end">
//               <button type="button" className="btn btn-success w-100">Save Downtime</button>
//             </div> */}

//             {/* Cancel Button */}
//             <div className="col-lg-4 col-md-4 col-sm-10 mb-3 d-flex align-items-end d-flex" style={{ columnGap: '1rem'}}>
//             <button type="button" className="btn btn-success w-100">Save Downtime</button>
//               <button type="button" className="btn btn-secondary w-100">Cancel</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </Container>
//   );
// };

// export default ResponsiveForm;




// new form

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';

// const ResponsiveForm = () => {
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

//   // Handle form data changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/downtime', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert('Downtime saved successfully!');
//         console.log('Response data:', data);
//       } else {
//         const errorData = await response.json();
//         console.error('Error saving downtime:', errorData);
//         alert('Failed to save downtime.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while saving downtime.');
//     }
//   };

//   return (
//     <Container fluid className="p-4 mt-5">
//       <div className="container my-5 pt-2 border border-1 mt-0">
//         <Row className="text-center py-2 mb-0">
//           <Col>
//             <h3>DownTime </h3>
//           </Col>
//         </Row>
//         <form className='mt-4 mb-2' onSubmit={handleSubmit}>
//           <div className="row mt-4">
//             {/* Machine ID */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="machineId" className="form-label">Machine ID</label>
//               <select id="machineId" className="form-select" value={formData.machineId} onChange={handleChange}>
//                 <option defaultValue>Select Machine ID</option>
//                 <option>Machine 001</option>
//                 <option>Machine 002</option>
//                 <option>Machine 003</option>
//               </select>
//             </div>

//             {/* Downtime Reason */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="downtimeReason" className="form-label">Downtime Reason</label>
//               <select id="downtimeReason" className="form-select" value={formData.downtimeReason} onChange={handleChange}>
//                 <option defaultValue>Select Downtime Reason</option>
//                 <option>Breakdown</option>
//                 <option>Maintenance</option>
//                 <option>Setup Issue</option>
//               </select>
//             </div>

//             {/* Assigned Technician */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="technician" className="form-label">Assigned Technician</label>
//               <select id="technician" className="form-select" value={formData.technician} onChange={handleChange}>
//                 <option defaultValue>Select Technician</option>
//                 <option>Technician 1</option>
//                 <option>Technician 2</option>
//                 <option>Technician 3</option>
//               </select>
//             </div>

//             {/* Shift */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="shift" className="form-label">Shift</label>
//               <select id="shift" className="form-select" value={formData.shift} onChange={handleChange}>
//                 <option defaultValue>Select Shift</option>
//                 <option>Shift 1</option>
//                 <option>Shift 2</option>
//                 <option>Shift 3</option>
//               </select>
//             </div>

//             {/* Line Name */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="lineName" className="form-label">Line Name</label>
//               <select id="lineName" className="form-select" value={formData.lineName} onChange={handleChange}>
//                 <option defaultValue>Select Line</option>
//                 <option>Line 1</option>
//                 <option>Line 2</option>
//                 <option>Line 3</option>
//               </select>
//             </div>

//             {/* Location */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="location" className="form-label">Location</label>
//               <input type="text" id="location" className="form-control" placeholder="Enter Location" value={formData.location} onChange={handleChange} />
//             </div>

//             {/* Downtime Start */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="downtimeStart" className="form-label">Downtime Start</label>
//               <input type="datetime-local" id="downtimeStart" className="form-control" value={formData.downtimeStart} onChange={handleChange} />
//             </div>

//             {/* Downtime End */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="downtimeEnd" className="form-label">Downtime End</label>
//               <input type="datetime-local" id="downtimeEnd" className="form-control" value={formData.downtimeEnd} onChange={handleChange} />
//             </div>

//             {/* Remark */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="remark" className="form-label">Remark</label>
//               <textarea id="remark" className="form-control" rows="2" placeholder="Enter Remark" value={formData.remark} onChange={handleChange}></textarea>
//             </div>

//             {/* Action Taken */}
//             <div className="col-lg-8 col-md-10 col-sm-12 mb-1" style={{ width: '25rem'}}>
//               <label htmlFor="actionTaken" className="form-label">Action Taken</label>
//               <textarea id="actionTaken" className="form-control" rows="3" placeholder="Enter Action Taken" value={formData.actionTaken} onChange={handleChange}></textarea>
//             </div>

//             {/* Save Downtime Button */}
//             <div className="col-lg-4 col-md-4 col-sm-10 mb-3 d-flex align-items-end d-flex" style={{ columnGap: '1rem'}}>
//               <button type="submit" className="btn btn-success w-100">Save Downtime</button>
//               <button type="button" className="btn btn-secondary w-100">Cancel</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </Container>
//   );
// };

// export default ResponsiveForm;



// after
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import DowntimeTable from './DowntimeTable';
// import { Container, Row, Col } from 'react-bootstrap';

// const ResponsiveForm = ({ downtimes = [], onEdit, onDelete }) => {
//   const initialFormData = {
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
//   };

//   const [formData, setFormData] = useState(initialFormData);

//   // Handle form data changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/downtime', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert('Downtime saved successfully!');
//         console.log('Response data:', data);

//         // Reset form data to initial state after successful submission
//         setFormData(initialFormData);
//       } else {
//         const errorData = await response.json();
//         console.error('Error saving downtime:', errorData);
//         alert('Failed to save downtime.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while saving downtime.');
//     }
//   };

//   // Handle form reset/cancel
//   const handleReset = () => {
//     setFormData(initialFormData);
//   };

//   return (
//     <Container fluid className="p-4 mt-5">
//       <div className="container my-5 pt-2 border border-1 mt-0">
//         <Row className="text-center py-2 mb-0">
//           <Col>
//             <h3>Downtime Entry</h3>
//           </Col>
//         </Row>
//         <form className='mt-4 mb-2' onSubmit={handleSubmit}>
//           <div className="row mt-4">
//             {/* Machine ID */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="machineId" className="form-label">Machine ID</label>
//               <select id="machineId" className="form-select" value={formData.machineId} onChange={handleChange}>
//                 <option value="">Select Machine ID</option>
//                 <option value="Machine 001">Machine 001</option>
//                 <option value="Machine 002">Machine 002</option>
//                 <option value="Machine 003">Machine 003</option>
//               </select>
//             </div>

//             {/* Downtime Reason */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="downtimeReason" className="form-label">Downtime Reason</label>
//               <select id="downtimeReason" className="form-select" value={formData.downtimeReason} onChange={handleChange}>
//                 <option value="">Select Downtime Reason</option>
//                 <option value="Breakdown">Breakdown</option>
//                 <option value="Maintenance">Maintenance</option>
//                 <option value="Setup Issue">Setup Issue</option>
//               </select>
//             </div>

//             {/* Assigned Technician */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="technician" className="form-label">Assigned Technician</label>
//               <select id="technician" className="form-select" value={formData.technician} onChange={handleChange}>
//                 <option value="">Select Technician</option>
//                 <option value="Technician 1">Technician 1</option>
//                 <option value="Technician 2">Technician 2</option>
//                 <option value="Technician 3">Technician 3</option>
//               </select>
//             </div>

//             {/* Shift */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="shift" className="form-label">Shift</label>
//               <select id="shift" className="form-select" value={formData.shift} onChange={handleChange}>
//                 <option value="">Select Shift</option>
//                 <option value="Shift 1">Shift 1</option>
//                 <option value="Shift 2">Shift 2</option>
//                 <option value="Shift 3">Shift 3</option>
//               </select>
//             </div>

//             {/* Line Name */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="lineName" className="form-label">Line Name</label>
//               <select id="lineName" className="form-select" value={formData.lineName} onChange={handleChange}>
//                 <option value="">Select Line</option>
//                 <option value="Line 1">Line 1</option>
//                 <option value="Line 2">Line 2</option>
//                 <option value="Line 3">Line 3</option>
//               </select>
//             </div>

//             {/* Location */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="location" className="form-label">Location</label>
//               <input
//                 type="text"
//                 id="location"
//                 className="form-control"
//                 placeholder="Enter Location"
//                 value={formData.location}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Downtime Start */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="downtimeStart" className="form-label">Downtime Start</label>
//               <input
//                 type="datetime-local"
//                 id="downtimeStart"
//                 className="form-control"
//                 value={formData.downtimeStart}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Downtime End */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="downtimeEnd" className="form-label">Downtime End</label>
//               <input
//                 type="datetime-local"
//                 id="downtimeEnd"
//                 className="form-control"
//                 value={formData.downtimeEnd}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Remark */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="remark" className="form-label">Remark</label>
//               <textarea
//                 id="remark"
//                 className="form-control"
//                 rows="2"
//                 placeholder="Enter Remark"
//                 value={formData.remark}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Action Taken */}
//             <div className="col-lg-8 col-md-10 col-sm-12 mb-1" style={{ width: '25rem'}}>
//               <label htmlFor="actionTaken" className="form-label">Action Taken</label>
//               <textarea
//                 id="actionTaken"
//                 className="form-control"
//                 rows="3"
//                 placeholder="Enter Action Taken"
//                 value={formData.actionTaken}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Save Downtime Button */}
//             <div className="col-lg-4 col-md-4 col-sm-10 mb-3 d-flex align-items-end d-flex" style={{ columnGap: '1rem' }}>
//               <button type="submit" className="btn btn-success w-100">Save Downtime</button>
//               <button
//                 type="button"
//                 className="btn btn-secondary w-100"
//                 onClick={handleReset}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//       {/* <DowntimeTable /> */}
//     </Container>
//   );
// };

// export default ResponsiveForm;

// running
// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table, Container, Button, Modal, Form, Row, Col } from 'react-bootstrap';

// const DowntimeManager = () => {
//   const [downtimes, setDowntimes] = useState([]);
//   const [showForm, setShowForm] = useState(false); // Control form visibility
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [selectedDowntime, setSelectedDowntime] = useState(null);
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

//   // Handle form data changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle form submission for adding new downtime
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/downtime', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         alert('Downtime saved successfully!');
//         setFormData({
//           machineId: '',
//           downtimeReason: '',
//           technician: '',
//           shift: '',
//           lineName: '',
//           location: '',
//           downtimeStart: '',
//           downtimeEnd: '',
//           remark: '',
//           actionTaken: ''
//         }); // Reset form
//         setShowForm(false); // Hide form and show table
//         fetchDowntimes(); // Refresh data
//       } else {
//         alert('Failed to save downtime.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while saving downtime.');
//     }
//   };

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
//     <Container className="mt-5 p-4">
//       {showForm ? (
//         <div className="container my-5 pt-0 border border-1 mt-5 p-2">
//           <Row className="text-center py-2 mb-0">
//             <Col>
//               <h3>Downtime Entry</h3>
//             </Col>
//           </Row>
//           <form className="mt-4 mb-2" onSubmit={handleSubmit}>
//             <div className="row mt-4">
//               {/* Machine ID */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <label htmlFor="machineId" className="form-label">Machine ID</label>
//                 <select name="machineId" className="form-select" value={formData.machineId} onChange={handleChange}>
//                   <option value="">Select Machine ID</option>
//                   <option value="Machine 001">Machine 001</option>
//                   <option value="Machine 002">Machine 002</option>
//                   <option value="Machine 003">Machine 003</option>
//                 </select>
//               </div>

//               {/* Downtime Reason */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <label htmlFor="downtimeReason" className="form-label">Downtime Reason</label>
//                 <select name="downtimeReason" className="form-select" value={formData.downtimeReason} onChange={handleChange}>
//                   <option value="">Select Downtime Reason</option>
//                   <option value="Breakdown">Breakdown</option>
//                   <option value="Maintenance">Maintenance</option>
//                   <option value="Setup Issue">Setup Issue</option>
//                 </select>
//               </div>

//               {/* Assigned Technician */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <label htmlFor="technician" className="form-label">Assigned Technician</label>
//                 <select name="technician" className="form-select" value={formData.technician} onChange={handleChange}>
//                   <option value="">Select Technician</option>
//                   <option value="Technician 1">Technician 1</option>
//                   <option value="Technician 2">Technician 2</option>
//                   <option value="Technician 3">Technician 3</option>
//                 </select>
//               </div>

//               {/* Shift */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <label htmlFor="shift" className="form-label">Shift</label>
//                 <select name="shift" className="form-select" value={formData.shift} onChange={handleChange}>
//                   <option value="">Select Shift</option>
//                   <option value="Shift 1">Shift 1</option>
//                   <option value="Shift 2">Shift 2</option>
//                   <option value="Shift 3">Shift 3</option>
//                 </select>
//               </div>

//               {/* Line Name */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <label htmlFor="lineName" className="form-label">Line Name</label>
//                 <select name="lineName" className="form-select" value={formData.lineName} onChange={handleChange}>
//                   <option value="">Select Line</option>
//                   <option value="Line 1">Line 1</option>
//                   <option value="Line 2">Line 2</option>
//                   <option value="Line 3">Line 3</option>
//                 </select>
//               </div>

//               {/* Location */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <label htmlFor="location" className="form-label">Location</label>
//                 <input
//                   type="text"
//                   name="location"
//                   className="form-control"
//                   placeholder="Enter Location"
//                   value={formData.location}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* Downtime Start */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <label htmlFor="downtimeStart" className="form-label">Downtime Start</label>
//                 <input
//                   type="datetime-local"
//                   name="downtimeStart"
//                   className="form-control"
//                   value={formData.downtimeStart}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* Downtime End */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <label htmlFor="downtimeEnd" className="form-label">Downtime End</label>
//                 <input
//                   type="datetime-local"
//                   name="downtimeEnd"
//                   className="form-control"
//                   value={formData.downtimeEnd}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* Remark */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <label htmlFor="remark" className="form-label">Remark</label>
//                 <textarea
//                   name="remark"
//                   className="form-control"
//                   rows="2"
//                   placeholder="Enter Remark"
//                   value={formData.remark}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* Action Taken */}
//               <div className="col-lg-8 col-md-10 col-sm-12 mb-1">
//                 <label htmlFor="actionTaken" className="form-label">Action Taken</label>
//                 <textarea
//                   name="actionTaken"
//                   className="form-control"
//                   rows="3"
//                   placeholder="Enter Action Taken"
//                   value={formData.actionTaken}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* Save Downtime Button */}
//               <div className="col-lg-4 col-md-4 col-sm-10 mb-3 d-flex align-items-end" style={{ columnGap: '1rem' }}>
//                 <button type="submit" className="btn btn-success w-100">Save Downtime</button>
//                 <button
//                   type="button"
//                   className="btn btn-secondary w-100"
//                   onClick={() => setShowForm(false)} // Hide form and show table
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <>
//           <h3 className="text-center">Downtime Records</h3>
//           <Button variant="primary" className="mb-3" onClick={() => setShowForm(true)}>
//             Add Downtime
//           </Button>
//           <Table striped bordered hover responsive>
//             <thead className='bg-dark text-white'>
//               <tr>
//                 <th>#</th>
//                 <th style={{ whiteSpace: 'nowrap' }}>Machine ID</th>
//                 <th style={{ whiteSpace: 'nowrap' }}>Downtime Reason</th>
//                 <th style={{ whiteSpace: 'nowrap' }}>Technician</th>
//                 <th>Shift</th>
//                 <th style={{ whiteSpace: 'nowrap' }}>Line Name</th>
//                 <th>Location</th>
//                 <th style={{ whiteSpace: 'nowrap' }}>Downtime Start</th>
//                 <th style={{ whiteSpace: 'nowrap' }}>Downtime End</th>
//                 <th>Remark</th>
//                 <th style={{ whiteSpace: 'nowrap' }}>Action Taken</th>
//                 <th style={{ whiteSpace: 'nowrap' }}>Created At</th>
//                 <th>Edit</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {downtimes.length > 0 ? (
//                 downtimes.map((downtime, index) => (
//                   <tr key={downtime._id}>
//                     <td>{index + 1}</td>
//                     <td>{downtime.machineId}</td>
//                     <td>{downtime.downtimeReason}</td>
//                     <td>{downtime.technician}</td>
//                     <td>{downtime.shift}</td>
//                     <td>{downtime.lineName}</td>
//                     <td>{downtime.location}</td>
//                     <td style={{ whiteSpace: 'nowrap' }}>{new Date(downtime.downtimeStart).toLocaleString()}</td>
//                     <td style={{ whiteSpace: 'nowrap' }}>{new Date(downtime.downtimeEnd).toLocaleString()}</td>
//                     <td>{downtime.remark}</td>
//                     <td>{downtime.actionTaken}</td>
//                     <td style={{ whiteSpace: 'nowrap' }}>{new Date(downtime.createdAt).toLocaleString()}</td>
//                     <td>
//                       <Button
//                         variant="warning"
//                         size="sm"
//                         onClick={() => handleEditClick(downtime)}
//                       >
//                         Edit
//                       </Button>
//                     </td>
//                     <td>
//                       <Button
//                         variant="danger"
//                         size="sm"
//                         onClick={() => handleDeleteClick(downtime._id)}
//                       >
//                         Delete
//                       </Button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="14" className="text-center">No downtime records found</td>
//                 </tr>
//               )}
//             </tbody>
//           </Table>
//         </>
//       )}

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

// export default DowntimeManager;


// new demo
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container, Button, Modal, Form, Row, Col } from 'react-bootstrap';

const DowntimeManager = () => {
  const [downtimes, setDowntimes] = useState([]);
  const [showForm, setShowForm] = useState(false); // Control form visibility
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDowntime, setSelectedDowntime] = useState(null);
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

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission for adding new downtime
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/downtime', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Downtime saved successfully!');
        setFormData({
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
        }); // Reset form
        setShowForm(false); // Hide form and show table
        fetchDowntimes(); // Refresh data
      } else {
        alert('Failed to save downtime.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while saving downtime.');
    }
  };

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
    <Container className="mt-5 p-4">
      {showForm ? (
        <div className="container my-5 pt-0 border border-1 mt-5 p-2">
          <Row className="text-center py-2 mb-0">
            <Col>
              <h3>Downtime Entry</h3>
            </Col>
          </Row>
          <form className="mt-4 mb-2" onSubmit={handleSubmit}>
            <div className="row mt-4">
              {/* Machine ID */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label htmlFor="machineId" className="form-label">Machine ID</label>
                <select name="machineId" className="form-select" value={formData.machineId} onChange={handleChange}>
                  <option value="">Select Machine ID</option>
                  <option value="Machine 001">Machine 001</option>
                  <option value="Machine 002">Machine 002</option>
                  <option value="Machine 003">Machine 003</option>
                </select>
              </div>

              {/* Downtime Reason */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label htmlFor="downtimeReason" className="form-label">Downtime Reason</label>
                <select name="downtimeReason" className="form-select" value={formData.downtimeReason} onChange={handleChange}>
                  <option value="">Select Downtime Reason</option>
                  <option value="Breakdown">Breakdown</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Setup Issue">Setup Issue</option>
                </select>
              </div>

              {/* Assigned Technician */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label htmlFor="technician" className="form-label">Assigned Technician</label>
                <select name="technician" className="form-select" value={formData.technician} onChange={handleChange}>
                  <option value="">Select Technician</option>
                  <option value="Technician 1">Technician 1</option>
                  <option value="Technician 2">Technician 2</option>
                  <option value="Technician 3">Technician 3</option>
                </select>
              </div>

              {/* Shift */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label htmlFor="shift" className="form-label">Shift</label>
                <select name="shift" className="form-select" value={formData.shift} onChange={handleChange}>
                  <option value="">Select Shift</option>
                  <option value="Shift 1">Shift 1</option>
                  <option value="Shift 2">Shift 2</option>
                  <option value="Shift 3">Shift 3</option>
                </select>
              </div>

              {/* Line Name */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label htmlFor="lineName" className="form-label">Line Name</label>
                <select name="lineName" className="form-select" value={formData.lineName} onChange={handleChange}>
                  <option value="">Select Line</option>
                  <option value="Line 1">Line 1</option>
                  <option value="Line 2">Line 2</option>
                  <option value="Line 3">Line 3</option>
                </select>
              </div>

              {/* Location */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  placeholder="Enter Location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              {/* Downtime Start */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label htmlFor="downtimeStart" className="form-label">Downtime Start</label>
                <input
                  type="datetime-local"
                  name="downtimeStart"
                  className="form-control"
                  value={formData.downtimeStart}
                  onChange={handleChange}
                />
              </div>

              {/* Downtime End */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label htmlFor="downtimeEnd" className="form-label">Downtime End</label>
                <input
                  type="datetime-local"
                  name="downtimeEnd"
                  className="form-control"
                  value={formData.downtimeEnd}
                  onChange={handleChange}
                />
              </div>

              {/* Remark */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label htmlFor="remark" className="form-label">Remark</label>
                <textarea
                  name="remark"
                  className="form-control"
                  rows="2"
                  placeholder="Enter Remark"
                  value={formData.remark}
                  onChange={handleChange}
                />
              </div>

              {/* Action Taken */}
              <div className="col-lg-8 col-md-10 col-sm-12 mb-1">
                <label htmlFor="actionTaken" className="form-label">Action Taken</label>
                <textarea
                  name="actionTaken"
                  className="form-control"
                  rows="3"
                  placeholder="Enter Action Taken"
                  value={formData.actionTaken}
                  onChange={handleChange}
                />
              </div>

              {/* Save Downtime Button */}
              <div className="col-lg-4 col-md-4 col-sm-10 mb-3 d-flex align-items-end" style={{ columnGap: '1rem' }}>
                <button type="submit" className="btn btn-success w-100">Save Downtime</button>
                <button
                  type="button"
                  className="btn btn-secondary w-100"
                  onClick={() => setShowForm(false)} // Hide form and show table
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <>
          <h3 className="text-center">Downtime Records</h3>
          <Button variant="primary" className="mb-3" onClick={() => setShowForm(true)}>
            Add Downtime
          </Button>
          <Table striped bordered hover responsive>
  <thead className="bg-dark text-white">
    <tr>
      <th>#</th>
      <th style={{ whiteSpace: "nowrap" }}>Machine ID</th>
      <th style={{ whiteSpace: "nowrap" }}>Downtime Reason</th>
      <th style={{ whiteSpace: "nowrap" }}>Technician</th>
      <th>Shift</th>
      <th style={{ whiteSpace: "nowrap" }}>Line Name</th>
      <th>Location</th>
      <th style={{ whiteSpace: "nowrap" }}>Downtime Start</th>
      <th style={{ whiteSpace: "nowrap" }}>Downtime End</th>
      <th>Remark</th>
      <th style={{ whiteSpace: "nowrap" }}>Action Taken</th>
      <th style={{ whiteSpace: "nowrap" }}>Created At</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {/* Static Data Rows */}
    <tr>
      <td>1</td>
      <td>MCH001</td>
      <td>Power Failure</td>
      <td>John Doe</td>
      <td>Shift 1</td>
      <td>Line A</td>
      <td>Floor 1</td>
      <td style={{ whiteSpace: "nowrap" }}>{new Date('2023-10-01T09:00:00Z').toLocaleString()}</td>
      <td style={{ whiteSpace: "nowrap" }}>{new Date('2023-10-01T10:30:00Z').toLocaleString()}</td>
      <td>Checked power circuit</td>
      <td>Replaced power switch</td>
      <td style={{ whiteSpace: "nowrap" }}>{new Date('2023-10-01T11:00:00Z').toLocaleString()}</td>
      <td>
        <Button variant="warning" size="sm">
          Edit
        </Button>
      </td>
      <td>
        <Button variant="danger" size="sm">
          Delete
        </Button>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>MCH002</td>
      <td>Overheating</td>
      <td>Jane Smith</td>
      <td>Shift 2</td>
      <td>Line B</td>
      <td>Floor 2</td>
      <td style={{ whiteSpace: "nowrap" }}>{new Date('2023-10-01T12:00:00Z').toLocaleString()}</td>
      <td style={{ whiteSpace: "nowrap" }}>{new Date('2023-10-01T13:45:00Z').toLocaleString()}</td>
      <td>Cooling system failed</td>
      <td>Replaced fan motor</td>
      <td style={{ whiteSpace: "nowrap" }}>{new Date('2023-10-01T14:00:00Z').toLocaleString()}</td>
      <td>
        <Button variant="warning" size="sm">
          Edit
        </Button>
      </td>
      <td>
        <Button variant="danger" size="sm">
          Delete
        </Button>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>MCH003</td>
      <td>Mechanical Failure</td>
      <td>Mike Johnson</td>
      <td>Shift 1</td>
      <td>Line C</td>
      <td>Floor 3</td>
      <td style={{ whiteSpace: "nowrap" }}>{new Date('2023-10-01T08:00:00Z').toLocaleString()}</td>
      <td style={{ whiteSpace: "nowrap" }}>{new Date('2023-10-01T09:30:00Z').toLocaleString()}</td>
      <td>Machine jammed</td>
      <td>Replaced broken gear</td>
      <td style={{ whiteSpace: "nowrap" }}>{new Date('2023-10-01T09:45:00Z').toLocaleString()}</td>
      <td>
        <Button variant="warning" size="sm">
          Edit
        </Button>
      </td>
      <td>
        <Button variant="danger" size="sm">
          Delete
        </Button>
      </td>
    </tr>

    {/* Conditional Check for Empty Table */}
    {downtimes.length === 0 && (
      <tr>
        <td colSpan="14" className="text-center">
          No downtime records found
        </td>
      </tr>
    )}
  </tbody>
</Table>

        </>
      )}

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

export default DowntimeManager;
