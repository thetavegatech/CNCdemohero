// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';

// const ResponsiveForm = () => {
//   return (
//     <Container fluid className="p-4 mt-5">
//     <div className="container my-5 pt-0 border border-1 mt-5">
//       {/* <h5 className='mt-4'>Advanced Search</h5> */}
//       <Row className=" text-center py-2 mb-0 ">
//           <Col>
//             <h3> Part Rejection</h3>
//           </Col>
//         </Row>
//       <form className='mt-4 mb-2'>
//         <div className="row mt-4">
//           {/* Machine Name */}
//           <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//             <label htmlFor="machineName" className="form-label">Machine Name</label>
//             <select id="machineName" className="form-select">
//               <option defaultValue>Select Machine</option>
//               <option>Machine 1</option>
//               <option>Machine 2</option>
//               <option>Machine 3</option>
//             </select>
//           </div>

//           {/* Shift */}
//           <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//             <label htmlFor="shift" className="form-label">Shift</label>
//             <select id="shift" className="form-select">
//               <option defaultValue>Select Shift</option>
//               <option>Shift 1</option>
//               <option>Shift 2</option>
//               <option>Shift 3</option>
//             </select>
//           </div>

//           {/* Part Name */}
//           <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//             <label htmlFor="partName" className="form-label">Part Name</label>
//             <select id="partName" className="form-select">
//               <option defaultValue>Select Part</option>
//               <option>Part 1</option>
//               <option>Part 2</option>
//               <option>Part 3</option>
//             </select>
//           </div>

//           {/* Quantity */}
//           <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//             <label htmlFor="quantity" className="form-label">Quantity</label>
//             <input type="number" id="quantity" className="form-control" placeholder="Enter Quantity" />
//           </div>

//           {/* Add Rejection Button */}
//           <div className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex align-items-end">
//             <button type="button" className="btn btn-danger w-100">Add Rejection</button>
//           </div>
//         </div>
//       </form>
//     </div>
//     </Container>
//   );
// };

// export default ResponsiveForm;



// new
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';
// import PartRejecttable from './PartRejecttable';

// const ResponsiveForm = () => {
//   const initialFormData = {
//     machineName: '',
//     shift: '',
//     partName: '',
//     quantity: ''
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
//       const response = await fetch('http://localhost:5000/createPartRejection', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert('Part rejection added successfully!');
//         console.log('Response data:', data);
//         setFormData(initialFormData); // Reset form
//       } else {
//         const errorData = await response.json();
//         console.error('Error adding part rejection:', errorData);
//         alert('Failed to add part rejection.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while adding part rejection.');
//     }
//   };

//   return (
//     <Container fluid className="p-4 mt-4">
//       <div className="container my-5 pt-0 border border-1 mt-5">
//         <Row className="text-center py-2 mb-0">
//           <Col>
//             <h3>Part Rejection</h3>
//           </Col>
//         </Row>
//         <form className='mt-4 mb-2' onSubmit={handleSubmit}>
//           <div className="row mt-4">
//             {/* Machine Name */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="machineName" className="form-label">Machine Name</label>
//               <select id="machineName" className="form-select" value={formData.machineName} onChange={handleChange}>
//                 <option defaultValue>Select Machine</option>
//                 <option>Machine 1</option>
//                 <option>Machine 2</option>
//                 <option>Machine 3</option>
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

//             {/* Part Name */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="partName" className="form-label">Part Name</label>
//               <select id="partName" className="form-select" value={formData.partName} onChange={handleChange}>
//                 <option defaultValue>Select Part</option>
//                 <option>Part 1</option>
//                 <option>Part 2</option>
//                 <option>Part 3</option>
//               </select>
//             </div>

//             {/* Quantity */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//               <label htmlFor="quantity" className="form-label">Quantity</label>
//               <input
//                 type="number"
//                 id="quantity"
//                 className="form-control"
//                 placeholder="Enter Quantity"
//                 value={formData.quantity}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Add Rejection Button */}
//             <div className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex align-items-end">
//               <button type="submit" className="btn btn-danger w-100">Add Rejection</button>
//             </div>
//           </div>
//         </form>
//       </div>
//       <PartRejecttable />
//     </Container>
//   );
// };

// export default ResponsiveForm;



// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table, Container, Button, Modal, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// const DowntimeTable = () => {
//   const [partRejections, setPartRejections] = useState([]);
//   const [selectedRejection, setSelectedRejection] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [formData, setFormData] = useState({
//     machineName: '',
//     shift: '',
//     partName: '',
//     quantity: ''
//   });

//   const navigate = useNavigate(); // useNavigate hook for navigation

//   // Fetch part rejections from the backend
//   const fetchPartRejections = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/getAllPartRejections');
//       if (response.ok) {
//         const data = await response.json();
//         setPartRejections(data);
//       } else {
//         console.error('Failed to fetch part rejection data');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchPartRejections();
//   }, []);

//   // Handle edit button click
//   const handleEditClick = (rejection) => {
//     setSelectedRejection(rejection);
//     setFormData(rejection); // Load current rejection data into formData state
//     setShowEditModal(true); // Show modal
//   };



//   // Handle delete button click
// const handleDeleteClick = async (id) => {
//   try {
//     const response = await fetch(`http://localhost:5000/deletePartRejection/${id}`, { // Correct URL
//       method: 'DELETE'
//     });
//     if (response.ok) {
//       alert('Part rejection deleted successfully');
//       fetchPartRejections(); // Refresh data
//     } else {
//       const errorData = await response.json();
//       console.error('Failed to delete part rejection:', errorData);
//       alert(`Failed to delete part rejection: ${errorData.message}`);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     alert(`An error occurred: ${error.message}`);
//   }
// };


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
//       const response = await fetch(`http://localhost:5000/updatePartRejection/${selectedRejection._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         alert('Part rejection updated successfully');
//         setShowEditModal(false);
//         fetchPartRejections(); // Refresh data
//       } else {
//         console.error('Failed to update part rejection');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Close modal and clear selection
//   const handleCloseModal = () => {
//     setShowEditModal(false);
//     setSelectedRejection(null);
//   };

//    // Handle add button click
//    const handleAddClick = () => {
//     navigate('/PartRejection'); // Navigate to the part rejection form
//   };

//   return (
//     <Container className="mt-5">
//       <h3 className="text-center mt-2 p-4">Part Rejection Records</h3>
//       <Button variant="primary" type="submit" className="mt-3" onClick={handleAddClick}>
//               Add Part Rejection
//             </Button>
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Machine Name</th>
//             <th>Shift</th>
//             <th>Part Name</th>
//             <th>Quantity</th>
//             <th>Created At</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {partRejections.length > 0 ? (
//             partRejections.map((rejection, index) => (
//               <tr key={rejection._id}>
//                 <td>{index + 1}</td>
//                 <td>{rejection.machineName}</td>
//                 <td>{rejection.shift}</td>
//                 <td>{rejection.partName}</td>
//                 <td>{rejection.quantity}</td>
//                 <td>{new Date(rejection.createdAt).toLocaleString()}</td>
//                 <td>
//                   <Button
//                     variant="warning"
//                     size="sm"
//                     onClick={() => handleEditClick(rejection)}
//                     className="me-2"
//                   >
//                     Edit
//                   </Button>
//                 </td>
//                 <td>
//                 <Button
//                     variant="danger"
//                     size="sm"
//                     onClick={() => handleDeleteClick(rejection._id)}
//                   >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="8" className="text-center">No part rejection records found</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>

//       {/* Edit Modal */}
//       <Modal show={showEditModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Part Rejection</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleEditSubmit}>
//             <Form.Group controlId="formMachineName">
//               <Form.Label>Machine Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="machineName"
//                 value={formData.machineName}
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

//             <Form.Group controlId="formPartName">
//               <Form.Label>Part Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="partName"
//                 value={formData.partName}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formQuantity">
//               <Form.Label>Quantity</Form.Label>
//               <Form.Control
//                 type="number"
//                 name="quantity"
//                 value={formData.quantity}
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



// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table, Container, Button, Modal, Form, Row, Col } from 'react-bootstrap';

// const PartRejectionManager = () => {
//   const [partRejections, setPartRejections] = useState([]);
//   const [showTable, setShowTable] = useState(true); // State to toggle between table and form
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [selectedRejection, setSelectedRejection] = useState(null);
//   const [formData, setFormData] = useState({
//     machineName: '',
//     shift: '',
//     partName: '',
//     quantity: ''
//   });

//   // Fetch part rejections from the backend
//   const fetchPartRejections = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/getAllPartRejections');
//       if (response.ok) {
//         const data = await response.json();
//         setPartRejections(data);
//       } else {
//         console.error('Failed to fetch part rejection data');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchPartRejections();
//   }, []);

//   // Handle form data changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle edit button click
//   const handleEditClick = (rejection) => {
//     setSelectedRejection(rejection);
//     setFormData(rejection); // Load current rejection data into formData state
//     setShowEditModal(true); // Show modal
//   };

//   // Handle delete button click
//   const handleDeleteClick = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/deletePartRejection/${id}`, {
//         method: 'DELETE'
//       });
//       if (response.ok) {
//         alert('Part rejection deleted successfully');
//         fetchPartRejections(); // Refresh data
//       } else {
//         const errorData = await response.json();
//         console.error('Failed to delete part rejection:', errorData);
//         alert(`Failed to delete part rejection: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert(`An error occurred: ${error.message}`);
//     }
//   };

//   // Handle edit form submission
//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:5000/updatePartRejection/${selectedRejection._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         alert('Part rejection updated successfully');
//         setShowEditModal(false);
//         fetchPartRejections(); // Refresh data
//       } else {
//         console.error('Failed to update part rejection');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Handle add form submission
//   const handleAddSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/createPartRejection', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         alert('Part rejection added successfully!');
//         setFormData({
//           machineName: '',
//           shift: '',
//           partName: '',
//           quantity: ''
//         }); // Reset form
//         setShowTable(true); // Switch back to the table view
//         fetchPartRejections(); // Refresh data
//       } else {
//         console.error('Failed to add part rejection');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while adding part rejection.');
//     }
//   };

//   // Close modal and clear selection
//   const handleCloseModal = () => {
//     setShowEditModal(false);
//     setSelectedRejection(null);
//   };

//   return (
//     <Container className="mt-5">
//       {showTable ? (
//         <>
//           <h3 className="text-center mt-2 p-4">Part Rejection Records</h3>
//           <Button variant="primary" onClick={() => setShowTable(false)} className="mb-3">
//             Add Part Rejection
//           </Button>
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Machine Name</th>
//                 <th>Shift</th>
//                 <th>Part Name</th>
//                 <th>Quantity</th>
//                 <th>Created At</th>
//                 <th>Edit</th>
//                 <th>Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {partRejections.length > 0 ? (
//                 partRejections.map((rejection, index) => (
//                   <tr key={rejection._id}>
//                     <td>{index + 1}</td>
//                     <td>{rejection.machineName}</td>
//                     <td>{rejection.shift}</td>
//                     <td>{rejection.partName}</td>
//                     <td>{rejection.quantity}</td>
//                     <td>{new Date(rejection.createdAt).toLocaleString()}</td>
//                     <td>
//                       <Button
//                         variant="warning"
//                         size="sm"
//                         onClick={() => handleEditClick(rejection)}
//                         className="me-2"
//                       >
//                         Edit
//                       </Button>
//                     </td>
//                     <td>
//                       <Button
//                         variant="danger"
//                         size="sm"
//                         onClick={() => handleDeleteClick(rejection._id)}
//                       >
//                         Delete
//                       </Button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="8" className="text-center">No part rejection records found</td>
//                 </tr>
//               )}
//             </tbody>
//           </Table>
//         </>
//       ) : (
//         <div className="container my-5 pt-0 border border-1 mt-5">
//           <Row className="text-center py-2 mb-0">
//             <Col>
//               <h3>Add Part Rejection</h3>
//             </Col>
//           </Row>
//           <form className="mt-4 mb-2" onSubmit={handleAddSubmit}>
//             <div className="row mt-4">
//               {/* Machine Name */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <label htmlFor="machineName" className="form-label">Machine Name</label>
//                 <select name="machineName" className="form-select" value={formData.machineName} onChange={handleChange}>
//                   <option value="">Select Machine</option>
//                   <option>Machine 1</option>
//                   <option>Machine 2</option>
//                   <option>Machine 3</option>
//                 </select>
//               </div>

//               {/* Shift */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <label htmlFor="shift" className="form-label">Shift</label>
//                 <select name="shift" className="form-select" value={formData.shift} onChange={handleChange}>
//                   <option value="">Select Shift</option>
//                   <option>Shift 1</option>
//                   <option>Shift 2</option>
//                   <option>Shift 3</option>
//                 </select>
//               </div>

//               {/* Part Name */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <label htmlFor="partName" className="form-label">Part Name</label>
//                 <select name="partName" className="form-select" value={formData.partName} onChange={handleChange}>
//                   <option value="">Select Part</option>
//                   <option>Part 1</option>
//                   <option>Part 2</option>
//                   <option>Part 3</option>
//                 </select>
//               </div>

//               {/* Quantity */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <label htmlFor="quantity" className="form-label">Quantity</label>
//                 <input
//                   type="number"
//                   name="quantity"
//                   className="form-control"
//                   placeholder="Enter Quantity"
//                   value={formData.quantity}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* Add Rejection Button */}
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex align-items-end">
//                 <button type="submit" className="btn btn-danger w-100">Add Rejection</button>
//               </div>
//               <div className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex align-items-end">
//                 <button
//                   type="button"
//                   className="btn btn-secondary w-100"
//                   onClick={() => setShowTable(true)} // Go back to table view
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Edit Modal */}
//       <Modal show={showEditModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Part Rejection</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleEditSubmit}>
//             <Form.Group controlId="formMachineName">
//               <Form.Label>Machine Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="machineName"
//                 value={formData.machineName}
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

//             <Form.Group controlId="formPartName">
//               <Form.Label>Part Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="partName"
//                 value={formData.partName}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group controlId="formQuantity">
//               <Form.Label>Quantity</Form.Label>
//               <Form.Control
//                 type="number"
//                 name="quantity"
//                 value={formData.quantity}
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

// export default PartRejectionManager;




import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container, Button, Modal, Form, Row, Col } from 'react-bootstrap';

const PartRejectionManager = () => {
  const [partRejections, setPartRejections] = useState([]);
  const [showTable, setShowTable] = useState(true); // State to toggle between table and form
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRejection, setSelectedRejection] = useState(null);
  const [formData, setFormData] = useState({
    machineName: '',
    shift: '',
    partName: '',
    quantity: ''
  });

  // Fetch part rejections from the backend
  const fetchPartRejections = async () => {
    try {
      const response = await fetch('http://localhost:5000/getAllPartRejections');
      if (response.ok) {
        const data = await response.json();
        setPartRejections(data);
      } else {
        console.error('Failed to fetch part rejection data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchPartRejections();
  }, []);

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle edit button click
  const handleEditClick = (rejection) => {
    setSelectedRejection(rejection);
    setFormData(rejection); // Load current rejection data into formData state
    setShowEditModal(true); // Show modal
  };

  // Handle delete button click
  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/deletePartRejection/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        alert('Part rejection deleted successfully');
        fetchPartRejections(); // Refresh data
      } else {
        const errorData = await response.json();
        console.error('Failed to delete part rejection:', errorData);
        alert(`Failed to delete part rejection: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`An error occurred: ${error.message}`);
    }
  };

  // Handle edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/updatePartRejection/${selectedRejection._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Part rejection updated successfully');
        setShowEditModal(false);
        fetchPartRejections(); // Refresh data
      } else {
        console.error('Failed to update part rejection');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Handle add form submission
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/createPartRejection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Part rejection added successfully!');
        setFormData({
          machineName: '',
          shift: '',
          partName: '',
          quantity: ''
        }); // Reset form
        setShowTable(true); // Switch back to the table view
        fetchPartRejections(); // Refresh data
      } else {
        console.error('Failed to add part rejection');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding part rejection.');
    }
  };

  // Close modal and clear selection
  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedRejection(null);
  };

  return (
    <Container className="mt-5">
      {showTable ? (
        <>
          <h3 className="text-center mt-2 p-4">Part Rejection Records</h3>
          <Button variant="primary" onClick={() => setShowTable(false)} className="mb-3">
            Add Part Rejection
          </Button>
          <Table striped bordered hover responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Machine Name</th>
      <th>Shift</th>
      <th>Part Name</th>
      <th>Quantity</th>
      <th>Created At</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {/* Static Data Rows */}
    <tr>
      <td>1</td>
      <td>Lathe Machine</td>
      <td>Shift 1</td>
      <td>Crankshaft</td>
      <td>10</td>
      <td>{new Date('2023-09-28T10:00:00Z').toLocaleString()}</td>
      <td>
        <Button variant="warning" size="sm" className="me-2">
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
      <td>Milling Machine</td>
      <td>Shift 2</td>
      <td>Piston</td>
      <td>15</td>
      <td>{new Date('2023-09-28T14:00:00Z').toLocaleString()}</td>
      <td>
        <Button variant="warning" size="sm" className="me-2">
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
      <td>Drilling Machine</td>
      <td>Shift 1</td>
      <td>Connecting Rod</td>
      <td>8</td>
      <td>{new Date('2023-09-29T09:00:00Z').toLocaleString()}</td>
      <td>
        <Button variant="warning" size="sm" className="me-2">
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
    {partRejections.length === 0 && (
      <tr>
        <td colSpan="8" className="text-center">
          {/* No part rejection records found */}
        </td>
      </tr>
    )}
  </tbody>
</Table>

        </>
      ) : (
        <div className="container my-5 pt-0 border border-1 mt-5">
          <Row className="text-center py-2 mb-0">
            <Col>
              <h3>Add Part Rejection</h3>
            </Col>
          </Row>
          <form className="mt-4 mb-2" onSubmit={handleAddSubmit}>
            <div className="row mt-4">
              {/* Machine Name */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label htmlFor="machineName" className="form-label">Machine Name</label>
                <select name="machineName" className="form-select" value={formData.machineName} onChange={handleChange}>
                  <option value="">Select Machine</option>
                  <option>Machine 1</option>
                  <option>Machine 2</option>
                  <option>Machine 3</option>
                </select>
              </div>

              {/* Shift */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label htmlFor="shift" className="form-label">Shift</label>
                <select name="shift" className="form-select" value={formData.shift} onChange={handleChange}>
                  <option value="">Select Shift</option>
                  <option>Shift 1</option>
                  <option>Shift 2</option>
                  <option>Shift 3</option>
                </select>
              </div>

              {/* Part Name */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label htmlFor="partName" className="form-label">Part Name</label>
                <select name="partName" className="form-select" value={formData.partName} onChange={handleChange}>
                  <option value="">Select Part</option>
                  <option>Part 1</option>
                  <option>Part 2</option>
                  <option>Part 3</option>
                </select>
              </div>

              {/* Quantity */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  className="form-control"
                  placeholder="Enter Quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>

              {/* Add Rejection Button */}
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex align-items-end">
                <button type="submit" className="btn btn-danger w-100">Add Rejection</button>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3 d-flex align-items-end">
                <button
                  type="button"
                  className="btn btn-secondary w-100"
                  onClick={() => setShowTable(true)} // Go back to table view
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Part Rejection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditSubmit}>
            <Form.Group controlId="formMachineName">
              <Form.Label>Machine Name</Form.Label>
              <Form.Control
                type="text"
                name="machineName"
                value={formData.machineName}
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

            <Form.Group controlId="formPartName">
              <Form.Label>Part Name</Form.Label>
              <Form.Control
                type="text"
                name="partName"
                value={formData.partName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={formData.quantity}
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

export default PartRejectionManager;

