import Navbar from '../components/Navbar'
// import ThreadList from '../components/ChatBox';
// import ChatBox from '../components/ChatBox';
import Chats from '../components/Chats';
import './style/MessengerPage.css';
import { ChatState } from '../Context/ChatProvider';
import { Box } from "@chakra-ui/layout";
//import { useState } from 'react';


const Chatpage = () => {
  //const { user } = ChatState();

  return (
    <div className='app' >
      {<Navbar className="navbar"/>}
      <Box
      display="flex"
      justifyContent="space-between"
      w="100%"
      h="90vh">
        <Chats />
      </Box>
    </div>
  );
};

export default Chatpage;
