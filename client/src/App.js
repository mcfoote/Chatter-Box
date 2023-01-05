import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from './components/CreateAccountForm';
import MessengerPage from './Pages/MessengerPage';
import signup from './components/Signup';
import Login from './components/Login';
import Homepage from './Pages/Homepage';
import AccountSettings from './components/AccountSettings';
import "./App.css";
import Navbar from './components/Navbar';
import { Nav } from 'react-bootstrap';


const client = new ApolloClient({

    uri: '/graphql',
    cache: new InMemoryCache()

});

function App() {

    //todo implement components
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
            
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/" element={<Home/>} component={Homepage}/>
                    <Route path="/chats" element={<MessengerPage/>}component={MessengerPage} exact/>
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App;