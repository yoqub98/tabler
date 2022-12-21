import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useTimer from './UseTimer';
import { formatTime } from './Utils';

import firebase from 'firebase';



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







const Table  = ({number}) => {

  var today = new Date();
  const { timer, isActive, isPaused, checkOutTime, handleStart, handlePause, handleResume, handleReset,  } = useTimer(0);
    
    const [startTime, setStartTime] = useState("00:00:00") // capture what time started 
    const [rate, setRate] = useState("16000")
    const tableType = "Pool Table" ;
      

    
 

    
    
    async function handlePost (tableTypeFB, table_numberFB, usedTimeFB, startTimeFB, rateFB,) {
      var today = new Date(),
      current_time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      const data = {
        table_number : table_numberFB,
        table_type : tableTypeFB,
        checked_in: startTimeFB,
        checked_out: current_time,
        used_time: usedTimeFB,
        rate : rateFB,
        
      };
      const res = await db.collection('pool_table_orders').add(data, {merge:true});
    }
   
   

 

 return (
  
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    Table number :  {number}
      </Typography>
      <Typography variant="h4" component="div">
      {tableType}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
     Rate : {rate}
      </Typography>
      <Typography variant="body1">
      
      Checked in :  {startTime}
      </Typography>
      <Typography variant="body1">
      Timer : {formatTime(timer)}
     
      </Typography>
    </CardContent>
    <CardActions>
     
    </CardActions>
    <CardActions>
    <Button variant="outlined" size="small" 
    ///// CHECK IN FUNCTION
    onClick={() => {
    handleStart()
      /// Set start time here
    }}
    >Check In</Button>

    <Button variant="outlined"  color="error"  size="small" 
    ///// CHECK OUT FUNCTION
    onClick={() => {
     handleReset();
     handlePause();
     handlePost (tableType, number, formatTime(timer), startTime, rate)
     
    
      
    }}
    >Check Out</Button>
             
    </CardActions>
  </React.Fragment>
)
  }
  export default function PoolTable({number}) {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Table number = {number}   variant="outlined">{Table({number})}</Table>
      </Box>
    );
  }
  