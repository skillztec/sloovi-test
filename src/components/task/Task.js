// import React, { useState } from 'react';
// import {Container, Row, Col, Form, Breadcrumb, Button, Alert } from 'react-bootstrap';


// const Task = () => {
//   // const [textInput, setTextInput] = useState('');

//   // const handleTextInput = (text) => {
//   //   text.preventDefault();
//   // };


//   return (
//     <div>
//       {/* task UI */}
//       {/* <div className="container">
//         <div className="form-div">
//           <form onSubmit={handleTextInput}>
//             <input
//               className="form-control form-group"
//               type="text"
//               placeholder="Task discription"
//               value={textInput}
//               onChange={(text) => setTextInput(text.target.value)}
//             />
//           </form>
//           <Button className="btn btn-primary" 
//           onClick={handleTextInput}>
//             Create Task
//           </Button>
//         </div>
//       </div> */}

//       <Container>
//         <Container
//           style={{
//             backgroundColor: "#f7f7f7",
//             padding: 20,
//             borderRadius: 2,
//             boxShadow: "2px 3px 4px rgba(0,0,0, .20)",
//           }}
//         >
//           <Form className="mb-5">
//             <h5>Login or Signup to your Sloovi Account</h5>
//             <Row>
//               <Col md>
//                 <Form.Group controlId="formEmail">
//                   <Form.Label>Email Address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email address"
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md className="mb-4">
//                 <Form.Group controlId="formPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Col
//               className="mb-2"
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <Form.Text className="mr-5" style={{ cursor: "pointer" }}>
//                 Terms & Conditions
//               </Form.Text>
//               <Form.Text className="ml-5" style={{ cursor: "pointer" }}>
//                 Forgotten Password?
//               </Form.Text>
//             </Col>
//             <Button className="btn btn-primary mb-5">Login</Button>
//             <Button className="btn btn-secondary mt-5">Sign-Up</Button>
//           </Form>
//         </Container>
//         <Alert className="mt-5" variant="success">
//           Congratulations You're Successfully Registered!
//         </Alert>
//         <div class="input-group mb-3 mt-3">
//           <input
//             type="text"
//             class="form-control"
//             placeholder="Recipient's username"
//             aria-label="Recipient's username"
//             aria-describedby="basic-addon2"
//           ></input>
//           <span class="input-group-text" id="basic-addon2">
//             @example.com
//           </span>
//         </div>
//         <Button className="btn btn-primary">Test Button</Button>
//       </Container>
//     </div>
//   );
// };

// export default Task;