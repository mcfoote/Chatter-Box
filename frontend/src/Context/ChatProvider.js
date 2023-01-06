import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  
  const [user, setUser] = useState();
  

  return (
    <ChatContext.Provider>
      {children}
    </ChatContext.Provider>
  );
};

 export const ChatState = () => {
  return useContext(ChatContext);
}; 

export default ChatProvider;
