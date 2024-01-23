
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import { addContent } from '../Service/ContentService';

function VideoModal(args) {
//    const [modal, setModal] = useState(true);
   const [session, setSession] = useState("");


//   const toggle = () => setModal(!modal);

  return (
     <div>
      {/* <Button color="danger" onClick={toggle}>
        Click Me
      </Button> */}
      <Modal isOpen={args.isModal}  {...args}>
        <ModalHeader>Add video Session</ModalHeader>
        <ModalBody>
          <Label>
      Session Name
    </Label>
    <Input
      id="content"
      name="session"
      placeholder="Enter valid Session name."
      type="text"
      value={session}
      onChange={(e) => setSession(e.target.value)}
    />
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => {
            if(session){
              addContent(args.contentId , session).then((resp) => {
              args.handleChange()
              }).catch((e) => {
                alert(e);
              })
            }
          }} color="primary" >
            Add Session
          </Button>{' '}
          <Button color="secondary" onClick={args.handleChange}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default VideoModal;