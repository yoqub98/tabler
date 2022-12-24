import React, { useState,  useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, ListGroup, Dropdown, Stack } from 'react-bootstrap';



function BarPopUp(props) {
  const [toggle, SetToggle] = useState(false);
  const [testItem2, setTestItem2] = useState("Not selected");


const Toggle_select = (eventkey, event) => {

SetToggle(true) ;
RenderItems (eventkey);

}

const RenderItems = (item) => {
  if (toggle) {
return (
   <ListGroup.Item>{item}</ListGroup.Item> 
   );
}
else {
  return (
    <ListGroup.Item>{"Not selected"}</ListGroup.Item> 
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
        <ListGroup variant="flush">
          <RenderItems/>
          </ListGroup>
        <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Default Dropdown

        </Dropdown.Toggle>

        <Dropdown.Menu>
            
          <Dropdown.Item  onSelect={Toggle_select} eventKey={"Cola"} href="#" >Cola</Dropdown.Item>
          <Dropdown.Item   onSelect={Toggle_select} eventKey={"Fanta"} href="#">Fanta</Dropdown.Item>
          <Dropdown.Item   onSelect={Toggle_select} eventKey={"Pepsi"}  href="#">Pepsi</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>  
         
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default BarPopUp ;