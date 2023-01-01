import React, { useState,  useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, ListGroup, Container, Dropdown, Stack, DropdownButton, ListGroupItem } from 'react-bootstrap';
import { ListItem } from '@mui/material';



function BarPopUp (props) {

const [togglepress, setToggle] = useState(false)
const [orderlist, setOrderList] = useState([]);


function getsign(eventKey){
  orderlist.push(eventKey);
  setToggle(true);
  RenderItems(orderlist)
  }



function RenderItems (list) {
if (list.length > 0 ) {
  console.log(list)
    //const listItems = list.map(item =>
        //<ListGroupItem key={item}>{item}</ListGroupItem>
      
      return (

       <h1>Pressed</h1> 
        
      );
}
   else if (!togglepress) {
     return ( <h1>Unpressed</h1> );
}
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
        <Dropdown.Item   eventKey="Coca-Cola" >Cola</Dropdown.Item>
        <Dropdown.Item  eventKey="Pepsi" >Pepsi</Dropdown.Item>
        <Dropdown.Item   eventKey="Fanta" >Fanta</Dropdown.Item>
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