import React, { useState,  useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, ListGroup, Dropdown, Stack, DropdownButton, ListGroupItem } from 'react-bootstrap';



function BarPopUp(props) {
  

  const [orderlist, setOrderList] = useState([]);
  const [orderItem, setsetOrderItem] = useState("");


const addToList = (eventKey) => {
  setsetOrderItem(eventKey);
  let tempArr = orderlist;

  tempArr.push(orderItem);

  setOrderList(tempArr);

  setsetOrderItem("");
  RenderItems(orderlist);

};




function getsign(eventKey){
   
    console.log('events :', eventKey);

    addToList(eventKey)

    }


function RenderItems  (orderlist)  {
  if (orderlist.length === 0 ) 
  return (
    "Error"
  )
  else {
return (
  <ListGroup>{orderlist.length > 0 && orderlist.map((item) => <ListGroupItem eventKey={item}>{item} </ListGroupItem>)}</ListGroup>
)
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