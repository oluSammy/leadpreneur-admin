import React, { useEffect } from 'react';
import './App.scss';
import Dashboard from './pages/dashboard/dashboard.component';
import Login from './pages/login-page/login.component';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { connect } from 'react-redux';
import { setUser } from './Redux/User/user.actions';
import { selectUserSlice } from './Redux/User/user.selectors';
import { auth } from './firebase/firebase.utils';

const App = ({ setCurrentUser, currentUser }) => {

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    //cleanup function
    return () => {
      unSubscribeFromAuth();
    }
  },[setCurrentUser])

  return(
    <div className="App">
      {
        currentUser ? <Dashboard />   : <Login />
      }
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setUser(user)),
});

const mapStateToProps = state => ({
  currentUser: selectUserSlice(state)
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
