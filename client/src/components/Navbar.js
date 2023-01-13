import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import "./style/Navbar.css";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Navbar = () => {
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="masterNav">
      <Box>
        <h1>Welcome to Chatterbox!</h1>
        <Button variant="outline">
          <i class="fa-light fa-message-plus"></i>
          <Text onClick={openModal}>New Chat</Text>
        </Button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          New Chat 2
        </Modal>
        <Button variant="outline" onClick={logoutHandler}>
          Log out
        </Button>
      </Box>
    </div>
  );
};

export default Navbar;
