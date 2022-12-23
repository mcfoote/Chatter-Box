import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Forms from './components/CreateAccountForm';

const client = new ApolloClient({

    uri: '/graphql',
    cache: new InMemoryCache()

});

function App() {

    return(
        <ApolloProvider client = {client}>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </ApolloProvider>
    )

}

export default App;