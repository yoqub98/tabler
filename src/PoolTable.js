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



const Table  = ({number}) => {
  
  const { timer, isActive, isPaused, checkOutTime, handleStart, handlePause, handleResume, handleReset,  } = useTimer(0);
 
    const [checkInTime, setCheckinTime] = useState("00:00:00")
    const [usedTime, setUsedTime] = useState(checkOutTime)
    const [rate, setRate] = useState("16000")
    const tableType = "Pool Table" ;
      
    function PostData  ()  {
      console.log(usedTime,rate,tableType);
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
      <p>Timer : {formatTime(timer)}</p>
        <br />
      Checked out :  {formatTime(checkOutTime)}
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
     setUsedTime(checkOutTime)
   PostData();
    
      
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