import React from "react";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";
import Navbar from '../components/Navbar'
import { Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import './style/Chats.css'

const Chats = () => {
    const history = useHistory();

    const backButton = () => {
        history.push('/messager')
    }

    return (
        <div>Thread list of chats
            <Navbar/>
            <Button onClick={backButton}>Back</Button>
            <Box>
                <Box></Box>
                <div>
                    <Input></Input>
                    <Button></Button>
                </div>
            </Box>
        </div>
    );
};

export default Chats;
