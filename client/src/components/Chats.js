import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import './style/Chats.css'
import { ADD_MESSAGE } from '../util/mutations'
import { useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/toast";

const Chats = () => {
    const [content, setContent] = useState('');
    const history = useHistory();
    const [createMessage] = useMutation(ADD_MESSAGE);
    // const messageBox = document.getElementsByClassName('messageBox')
    const toast = useToast();

    const submitHandler = async (e) => {
        if (!content || content === '' || content === undefined) {
            toast({
                title: "Please enter a message",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }

        try {
            await createMessage({
                variables: { content }
            });

        } catch (error) {
            console.error(error)
            toast({
                title: "Error Occured!",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
        }
    }

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
            <Input 
            className="inputbox"
            placeholder="Start typing..."
                        name="text"
                        type='text'/>
            <Button 
            onClick={submitHandler} 
            className="sendbutton">
                Send
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Chats;
