import Navbar from '../components/Navbar'
import ThreadList from '../components/ChaatBox';
import ChatBox from '../components/ChaatBox';
import './style/MessengerPage.css';
import { ChatState } from '../Context/ChatProvider';
import { Box } from "@chakra-ui/layout";


const Chatpage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <Navbar />}
      <Box
      display="flex"
      justifyContent="space-between"
      w="100%"
      h="90vh">
        {user && <ThreadList />}
        {user && <ChatBox />}
      </Box>
    
      <h1>hello world</h1>
    </div>
  );
};

export default Chatpage;
