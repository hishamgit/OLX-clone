import React, {  useContext,useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost';
import {authContext, firebaseContext} from './store/Context';



/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';



function App() {
  const {setUser}=useContext(authContext)
  const {firebase}=useContext(firebaseContext)
useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{ // checking whether user present while mounting
    setUser(user)
  })
})
  return (
    <div>
      
      <Router>
        <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/view' element={<ViewPost/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
