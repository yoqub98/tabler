import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import firebase from 'firebase';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PoolTable from './PoolTable';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsZh12ElY0uNfEdVwkLkYiFfcxSQ7GDPU",
  authDomain: "tabler-a8de2.firebaseapp.com",
  projectId: "tabler-a8de2",
  storageBucket: "tabler-a8de2.appspot.com",
  messagingSenderId: "793771079245",
  appId: "1:793771079245:web:522e27636f281e08730e04"
};





firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export default function App  ()  {
  
  return (
    <div>
      <center>
        <h2>Active Tables</h2>
      </center>
      <PoolTable number = {"5"} />
      <PoolTable number = {"4"} />
    </div>
  );
};




     




