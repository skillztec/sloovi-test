import React from 'react';
import {Container, Row, Col, Form, Breadcrumb, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from '../task/Task';
// import UserProfile from '../user';
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { signOutUser } from "../../store/slices/userSlice";


const Home = () => {
	 const userName = useSelector(selectUser);
   const dispatch = useDispatch();

  //handles user logout
  const handleSignOut = () => {
    try {
      dispatch(signOutUser());
    } catch (err) {
      console.error(err.message);
      alert(err.messsage);
    }
  };

  return (
    <div>
      <>
        <header className="app-header">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Services</Breadcrumb.Item>
            <Breadcrumb.Item>About Us</Breadcrumb.Item>
            <Breadcrumb.Item onClick={handleSignOut()}>Logout</Breadcrumb.Item>
          </Breadcrumb>
        </header>
        <contents>
          <h1>WELCOME TO SLOOVI TEST!!!</h1>
          <h4 style={{ marginTop: 3, marginBottom: 4 }}>
            Hi Chiedozie, Welcome to Sloovi Test Solution App!
          </h4>
          {/* <Task /> */}
        </contents>
      </>
    </div>
  );
};

export default Home;