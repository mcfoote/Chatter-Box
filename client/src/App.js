import React from 'react';
import { Route } from "react-router-dom"
import Homepage from './Pages/Homepage';
import MessengerPage from './Pages/MessengerPage';
import "./App.css";


function App() {
  return (<div className="App">
    <Route path="/" component={Homepage} exact/>
    <Route path="/chats" component={MessengerPage} />
    </div>
    )
}

export default App;
