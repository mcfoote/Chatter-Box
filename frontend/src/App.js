import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {  Route } from "react-router-dom";
import MessengerPage from './Pages/MessengerPage';
import "./App.css";
import Homepage from './Pages/Homepage';

const client = new ApolloClient({

    uri: '/graphql',
    cache: new InMemoryCache()

});

function App() {

    return(<div className="App">
        
        <ApolloProvider client = {client}>
            <Route path="/" component={Homepage} exact/>
            <Route path="/chats" component={MessengerPage} exact/> 
        </ApolloProvider>
        
        </div>
    )
    
}

export default App;