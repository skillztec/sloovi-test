import React, { useState } from 'react';
import {
  Button,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";
import { loginUser } from "../../store/slices/userSlice";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const userName = useSelector(selectUser);
   const dispatch = useDispatch();

  //handles user login
  const handleSignIn = (event) => {
    event.preventDefault();
    //try {
      // dispatch(
      //   loginUser({
      //     user: user.email,
      //     user: user.password,
      //   }),
      // );
      // setEmail('');
      // setPassword;('');
    // } catch (err) {
    //   console.error(err.message);
    //   alert(err.messsage);
    // }
  };

  return (
    <div>
      <h4>It looks like you're not signed-in!</h4>
      <h5>Please Login with your Gmail to proceed to your Task Dashboard</h5>
      <div className="container">
        <div className="form-div p-3">
          <form onSubmit={handleSignIn()} className="m-4">
            <input
              className="form-control form-group"
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="form-control form-group mt-3"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </form>
          <Button className="btn btn-primary" onClick={handleSignIn()}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;