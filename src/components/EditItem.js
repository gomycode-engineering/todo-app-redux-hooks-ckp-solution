import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editItem } from "../js/actions/ActionTask";

const EditItem = ({ item }) => {
  const [show, setShow] = useState(false);
  const [Myinput, setMyinput] = useState(item.description);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => setMyinput(e.target.value);

  const edit = () => {
    dispatch(editItem({ id: item.id, description: Myinput }));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={Myinput}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              setMyinput(item.description);
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              edit();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditItem;
