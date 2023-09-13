import React, { useContext, useState } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { firebaseContext } from '../../store/FirebaseContext';
import {useHistory} from 'react-router-dom'

function Login() {
  const history=useHistory()
  const {firebase}=useContext(firebaseContext)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then((userCredential) => {
        // Signed in 
        const uid = userCredential.user.uid;
        history.push('/')
        firebase.firestore().collection('users').doc(uid).get().then((snap)=>{
          console.log(snap.data())
         })
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
