import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import firebase from 'firebase';
import React, { useState } from 'react';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsZh12ElY0uNfEdVwkLkYiFfcxSQ7GDPU",
  authDomain: "tabler-a8de2.firebaseapp.com",
  projectId: "tabler-a8de2",
  storageBucket: "tabler-a8de2.appspot.com",
  messagingSenderId: "793771079245",
  appId: "1:793771079245:web:522e27636f281e08730e04"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
 
const Read = () => {
  
  
  var db = firebase.firestore();
  const [info , setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener('load', () => {
      Fetchdata();
    });

  // Fetch the required data using the get() method
  const Fetchdata = ()=>{
      db.collection("tables").get().then((querySnapshot) => {
          
          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach(element => {
              var tables = element.data();
              setInfo(arr => [...arr , tables]);
               
          });
      })
  }
   
  // Display the result on the page
  return (
      <div>
          <center>
          <h2>Active Tables</h2>
          </center>
       
      {
          info.map((tables) => (
          <Frame tableNumber={tables.tableNumber}
                 tableType={tables.tableNumber}
                 rate={tables.rate}
                 checkIn = {tables.checkIn}
                 checkOut = {tables.checkOut}


                 />
          ))
      }
      </div>

  );
}






// Define how each display entry will be structured
const Frame = ({checkOut , checkIn , tableNumber, rate, tableType}) => {
  console.log(checkOut + " " + checkIn + " " + tableNumber + " " + tableType + " " + rate );
  return (
      <center>
          <div className="div">
               
<p>Number : {tableNumber}</p>

               
<p>Type : {tableType}</p>

               
<p>Checked in : {checkIn}</p>
<p>Checked out : {checkOut}</p>
<p>Rate : {rate}</p>


          </div>
      </center>
  );
}

export default Read;

     




