import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Form, InputGroup, Button, FormControl } from "react-bootstrap";
import { addItem} from "../js/actions/ActionTask";

const AddItems = ({handelFilter, filter}) => {
  const [Grabbedvalue, setGrabbedvalue] = useState("");

  const handlChange = (e) => {
    setGrabbedvalue(e.target.value);
  };

  const dispatch = useDispatch();
  const addNewItem = (e) => {
    e.preventDefault();
    if (Grabbedvalue) {
      dispatch(
        addItem({
          id: Date.now(),
          description: Grabbedvalue,
          isDone: false,
        })
      );
      setGrabbedvalue("");
    } else alert("Please enter text");
  };


  return (
    <Card bg="primary">
      <Card.Body>
        <h1 className={"text-white"}>To-Do-App !</h1>
        
        <Form onSubmit={addNewItem}>
          <Form.Group>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={Grabbedvalue}
                onChange={handlChange}
              />
              <InputGroup.Append>
                <Button variant="success" onClick={addNewItem}>
                  +
                </Button>
              </InputGroup.Append>

            </InputGroup>
          </Form.Group>
        </Form>
        <Button variant="info" className="mr-3" onClick={handelFilter}>{filter?"All":"isDone"}</Button>
      </Card.Body>
    </Card>
  );
};

export default AddItems;
