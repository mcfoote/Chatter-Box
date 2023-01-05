import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from './components/CreateAccountForm';
import signup from './components/Signup';
import Login from './components/Login';
import Homepage from './Pages/Homepage';
import AccountSettings from './components/AccountSettings';


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
                    <Route path="/" element={<Login />} />
                    <Route path="/homepage" element={<Homepage />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App;



