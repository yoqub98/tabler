import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import useTimer from './UseTimer';
import { formatTime } from './Utils';



const element = <FontAwesomeIcon icon={faClock} />



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const PoolTableData = {
  tableType : "Pool Table",
  tableNumber : "5" ,
  rate : 15000,
  checkIn : "NaN"
}

const Table  = ({number}) => {
  
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)
  
 return (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    Table number :  {number}
      </Typography>
      <Typography variant="h4" component="div">
      {PoolTableData.tableType}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
     Rate : {PoolTableData.rate}
      </Typography>
      <Typography variant="body2">
      <p>{formatTime(timer)}</p>
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
     
    </CardActions>
    <CardActions>
    <Button variant="outlined" size="small"
    onClick={() => {
      handleStart()
    }}
    >Check In</Button>
    <Button variant="outlined"  color="error"  size="small"
    onClick={() => {
     handleReset();
      handlePause();
    }}
    >Check Out</Button>
             
    </CardActions>
  </React.Fragment>
);
  }
export default function PoolTable({number}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Table number = {number}   variant="outlined">{Table({number})}</Table>
    </Box>
  );
}
