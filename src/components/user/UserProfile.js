import React from 'react';
// import { useSelector, useDispatch } from 'react-redux'; //'react-redux/es/exports'
// import { selectUser } from '../redux/slices/userSlice';

const UserProfile = ({handleSignOut}) => {

  return (
    <div>
      <button onClick={handleSignOut()}>
        Sign-out
      </button>
    </div>
  )
}

export default UserProfile