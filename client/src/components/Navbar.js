import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style/Navbar.css";

const Navbar = () => {
  const history = useHistory();
  
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  return (
    <div className="masterNav">
      <Box>
        <h1>Welcome to Chatterbox!</h1>
        <Button variant="outline">
          <i class="fa-light fa-message-plus"></i>
          <Text>New Chat</Text>
        </Button>
        <Button variant="outline" onClick={logoutHandler}>
          Log out
        </Button>
      </Box>
    </div>
  );
};

export default Navbar;
