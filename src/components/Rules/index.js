import React from "react";
import Modal from 'react-bootstrap/Modal';

const Rules = props => (
  <Modal show={props.show} onClick={props.hideModal} aria-labelledby="contained-modal-title-vcenter"
  centered>
    <Modal.Header>
      <Modal.Title>
        Twice Clicky Game!
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Click on an image to earn points, but don't click on any more than once!</p>
    </Modal.Body>
  </Modal>
)

export default Rules;