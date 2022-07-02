import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import { useSelector } from "react-redux";
import { selectUser } from './store/slices/userSlice';

function App() {
  const user = null; //useSelector(selectUser);

  return (
    <div className="app">
    {/* <h1>Helllooo Welcome</h1> */}
      {!user ? (
        <Login />
     ) : (
      <Home />
    )}
  </div>
  );
};

export default App;
