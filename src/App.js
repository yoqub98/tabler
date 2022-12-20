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




     




