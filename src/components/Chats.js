import React from "react";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router-dom";

const Chats = () => {
    const history = useHistory();

    const backButton = () => {
        history.push('/messager')
    }

    return (
        <div>Thread list of chats
            <Button onClick={backButton}>Back</Button>
        </div>
    );
};

export default Chats;

