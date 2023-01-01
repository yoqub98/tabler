import React, { useState,  useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, ListGroup, Container, Dropdown, Stack, DropdownButton, ListGroupItem } from 'react-bootstrap';
import { ListItem } from '@mui/material';



function Test (props) {
  
const [togglepress, setToggle] = useState(false)
const [orderlist, setOrderList] = useState([]);


function getsign(eventKey){
 addToList(eventKey)
  }


const addToList = (eventKey) => {

orderlist.push(eventKey);
setToggle(true);
console.log(orderlist) // testing
};

function RenderItems (list) {
if (togglepress && list.length > 0 ) {
    const listItems = list.map(item =>
        <ListGroupItem key={item}>{item}</ListGroupItem>
      );
      return (
      <Container>
       <h1>Pressed</h1> 
        <ListGroup>{listItems}</ListGroup>
      </Container>);
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

export default Test ;