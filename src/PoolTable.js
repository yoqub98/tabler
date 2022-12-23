import React, { useState, useRef } from 'react';

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import useTimer from './UseTimer';
import { formatTime } from './Utils';
import MyVerticallyCenteredModal from './Bar'
import firebase from 'firebase';
import {ListGroup} from 'react-bootstrap';
import {Stack} from 'react-bootstrap';
import { BsPlusCircle } from "react-icons/bs";
<i class="bi bi-0-square"></i>
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
  const [modalShow, setModalShow] = React.useState(false); /// for BAR items
  var today = new Date();
  const { timer, isActive, isPaused, checkOutTime, handleStart, handlePause, handleResume, handleReset,  } = useTimer(0);
    
    const [startTime, setStartTime] = useState("00:00:00") // capture what time started 
    const [rate, setRate] = useState("16000")
    const total_Pay = 1;
      

    
    async function handlePost (table_numberFB, usedTimeFB, startTimeFB, rateFB,) {
      var today = new Date(),
      current_time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      const data = {
        table_number : table_numberFB,
        total_pay : Number.parseFloat((Number(usedTimeFB)/60)*(Number(rate)/60).toFixed(1)),
        checked_in: startTimeFB,
        checked_out: current_time,
        used_time: formatTime (usedTimeFB),
        rate : rateFB,
        
      };
      console.log(Number.parseFloat((Number(usedTimeFB)/60)*(Number(rate)/60).toFixed(1)))
      const res = await db.collection('pool_table_orders').add(data, {merge:true});
    }
   
   

 

    return (
      <div>
      <Card style={{ width: '18rem' }}>
       
        <Card.Body>
          <Card.Title>Pool Table</Card.Title>
          <Card.Text>
          <ListGroup variant="flush">
        <ListGroup.Item>Table number : {number}</ListGroup.Item>
        <ListGroup.Item>Checked in : {startTime}</ListGroup.Item>
        <ListGroup.Item>Timer : {formatTime(timer)}</ListGroup.Item>
        <ListGroup.Item> Rate : {rate}</ListGroup.Item>
      </ListGroup>
                              
          </Card.Text>
         
          <Stack gap={3}>
         
          <Button size='lg' variant="outline-success"
          onClick={() => {
            handleStart()
            var today = new Date(),
            setStartTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
              /// Set start time here
            }}
          >Check in</Button>
          <Button size='lg' variant="outline-danger"
          onClick={() => {
            handleReset();
            handlePause();
            handlePost (number, timer, startTime, rate)
             
           }}
          >Check out</Button>
                       
          <Button size='lg' variant = "primary"
          onClick={()=>{
            setModalShow(true)
          }}
          >{"   "} Bar {"   "}{"   "} <BsPlusCircle/></Button>
         </Stack>
        
        </Card.Body>
      </Card>
       <MyVerticallyCenteredModal
       show={modalShow}
       onHide={() => setModalShow(false)}
     />
     </div>
    );
  }
  export default function PoolTable({number}) {
    return (
      
      <Table number={number}/>
     
    );
  }
  