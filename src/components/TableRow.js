import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import './TableRow.css';

export default function TableRow(props){
 
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleOnClick = () => {
      props.getElementData(props.url);
      handleShow();
    }
  
    const array = [];
    
    for (const [key, value] of Object.entries(props.elementData)) {
      array.push(
        <div className='element'>
          <span className='element--title'>{key.toUpperCase()}</span>-
          {
            typeof value === 'object'? 
            <div className='element--array'>
              {value.map(item => <span>{item}</span>)}
            </div>
            :
            <span>{value}</span>
          }
        </div>
      );
    }
    
    return (
      <>
      <div className='row--container'>
        <span className='row--name' onClick={handleOnClick}>{props.name || props.title}</span>
        <span>{props.created}</span>
        <span>{props.edited}</span>
      </div>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.elementData.name || props.elementData.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className='element--container'>
            {array}
          </Modal.Body>
        </Modal>
      </>
    );
  }
  