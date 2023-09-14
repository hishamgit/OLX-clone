import React, { useContext, useEffect, useState } from 'react';
import { postContext } from '../../store/PostContext';
import { firebaseContext } from '../../store/Context';
import './View.css';
function View() {
const {postData}=useContext(postContext)
const {firebase}=useContext(firebaseContext)
const [userData,setUserData]=useState()
useEffect(()=>{
  const {userId}=postData;
  firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{  // query of single doc
    res.forEach(doc => {
      setUserData(doc.data())
    })
})
})
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postData.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postData.price} </p>
          <span>{postData.name}</span>
          <p>{postData.category}</p>
          <span>{postData.createdAt}</span>
        </div>
       {userData && <div className="contactDetails">     {/* ternary operator used to use data ony when available */}
          <p>Seller details</p>
          <p>{userData.username}</p>
          <p>{userData.phone}</p>
        </div> }
      </div>
    </div>
  );
}
export default View;
