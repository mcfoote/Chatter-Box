import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Forms from './components/CreateAccountForm';
import signup from './components/Signup';
import Login from './components/Login';
import AccountSettings from './components/AccountSettings';

const client = new ApolloClient({

    uri: '/graphql',
    cache: new InMemoryCache()

});

function App() {

    //todo implement components
    return(
        <ApolloProvider client = {client}>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </ApolloProvider>
    )

}

export default App;