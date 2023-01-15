import React from "react";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import "./style/Chats.css";

const Chats = () => {
  const history = useHistory();

  const backButton = () => {
    history.push("/messager");
  };

  return (
    <div className="app">
      {/* Thread list of chats
      <Navbar className="navbar" /> */}
      <div className="chatarea">
        <Button onClick={backButton} className="backbutton">Back</Button>
        <Box className="mainarea">
          <Box className="chatbox"></Box>
          <div className="secondaryarea">
            <Input className="inputbox"></Input>
            <Button className="sendbutton">Send</Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Chats;
