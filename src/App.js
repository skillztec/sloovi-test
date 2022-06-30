import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { selectUser } from './redux/slices/userSlice';
import {LoginUser, signOutUser} from './redux/slices/userSlice';
import Home from './components/home/Home';
import Login from './components/auth/Login';


function App() {
  const user = useSelector(selectUser);
  const dispatch =useDispatch();

  //handles user login
  const handleSignIn = () => {
    try {
      dispatch(LoginUser({
        user: user.email,
        user: user.password
      }));
    } catch (err) {
      console.error(err.message);
      alert(err.messsage);
    }
  };

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
    <Container fluid className="app">
      {!user ? (
        <Login handleSignIn={handleSignIn} />
     ) : (
      <Home handleSignOut={handleSignOut} />
    )}
  </Container>
  );
};

export default App;
