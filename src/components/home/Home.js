import React from 'react';
import {Container, Row, Col, Form, Breadcrumb, Button, Alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Task from '../task';
import UserProfile from '../user';


const Home = () => {
  return (
    <div>
      <>
        <header className='app-header'>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Services</Breadcrumb.Item>
            <Breadcrumb.Item>About Us</Breadcrumb.Item>
          </Breadcrumb>
        </header>
        <contents>
          <h4 style={{marginTop: 3, marginBottom: 4}}>
            Hi Chiedozie, Welcome to Sloovi Test Solution App!
          </h4>
          <Task />
        </contents>
      </>
    </div>
  )
};

export default Home;