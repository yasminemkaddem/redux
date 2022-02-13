import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../actions/action";

const ModalExample = (props) => {
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState(props.el.description);
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const handleEdit = () => {
    dispatch(editTask({ id: props.el.id, edited: editedText }));
    toggle();
  };

  const toggle = () => {
    setModal(!modal);
    setEditedText(props.el.description);
  };
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  return (
    <div>
      <Button color="green" onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
        <ModalBody>
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          ></input>
          <br />
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>yasmine mkaddem</ModalHeader>
            <ModalBody>hello</ModalBody>
            <ModalFooter>
              <Button color="black" onClick={toggleNested}>
                Done
              </Button>{" "}
             
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleEdit} color="black">
            Ok
          </Button>{" "}
          <Button color="green" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
