import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import { Route } from "react-router-dom"
import Homepage from './Pages/Homepage';
import MessengerPage from './Pages/MessengerPage';
import "./App.css";

const client = new ApolloClient({

    uri: '/graphql',
    cache: new InMemoryCache()

});

function App() {

    return(
        <ApolloProvider client = {client}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/" component={Homepage} exact/>
                <Route path="/chats" component={MessengerPage} exact/>
            </Routes>
        </ApolloProvider>
    )

}

export default App;