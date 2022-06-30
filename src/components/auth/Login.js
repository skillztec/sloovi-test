import React from 'react';

const Login = ({handleSignIn}) => {
  return (
    <div>
      <h4>It looks like you're not signed-in!\nPlease Login with your Gmail to proceed to your Task Dashboard</h4>
      <div>
        <button onClick={handleSignIn()}>
          Sign-out
        </button>
      </div>
    </div>
  )
};

export default Login;