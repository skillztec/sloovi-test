// import React from 'react';
// import { updateTask, deleteTask } from '../../redux/slices/taskSlice';
// import { useSelector, useDispatch } from 'react-redux';
// import {Container, Row, Col, Form, Breadcrumb, Button, Alert } from 'react-bootstrap';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const UdateTask = () => {
//   const dispatch = useDispatch();

//   //updates task
//   const handleUpdateTask = () => {
//     // dispatch(updateTask({id: id}));
//     return console.log('Task updated!')
//   };
  
//   //delete task
//   const handleDeleteTask = () => {
//     dispatch(deleteTask({id: id}));
//   };


//   return (
//     <div className='container'>
//       {/* bottom section */}
//       <div className='df-r justifyContent-space-between alignItems-center'>
//         <p onClick={handleDeleteTask}>Delete Icon</p>
//         <Button className='btn btn-secondary' onClick={() => console.log('Go back to task home')}>
//           Cancel
//         </Button>
//         <Button className='btn btn-secondary' onClick={handleUpdateTask}>
//           Save
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default UdateTask;