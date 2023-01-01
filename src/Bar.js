import React, { useState,  useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, ListGroup, Container, Dropdown, Stack, DropdownButton, ListGroupItem } from 'react-bootstrap';
import { ListItem } from '@mui/material';



function BarPopUp (props) {

const [togglepress, setToggle] = useState(false)
const [orderlist, setOrderList] = useState({
 cola : {
  price : 8000,
  quantity : 0,
  total : 0
 },
 fanta : {
  price : 7000,
  quantity : 0,
  total : 0
 },
});


function getsign(eventKey){
  const itemname = eventKey;

 console.log(orderlist[itemname])
  //orderlist[eventKey].push(eventKey);
  //setToggle(true);
  //RenderItems(orderlist)
  }



function RenderItems (list) {

  if (list.length > 0 || togglepress) {
    
 console.log( typeof(numbers) )
}
else {
  return (
    <h2>No orders</h2>
  )
}
;
}
    


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            BAR Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        
      <RenderItems/>

        <Dropdown className="d-inline mx-2">
        <DropdownButton title="Select item" id="dropdown-basic-button" onSelect={getsign} >
        <Dropdown.Item   eventKey="cola" >Cola</Dropdown.Item>
        <Dropdown.Item  eventKey="pepsi" >Pepsi</Dropdown.Item>
        <Dropdown.Item   eventKey="fanta" >Fanta</Dropdown.Item>
        </DropdownButton>

      </Dropdown>  
         
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default BarPopUp ;