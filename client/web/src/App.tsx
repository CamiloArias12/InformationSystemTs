
import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache,gql } from '@apollo/client'

import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from './pages/login/Login';

const client =new ApolloClient(
   {
      uri:'http://192.168.43.17:8080',
      cache: new InMemoryCache(),
   }
)

function App() {

  return (
    <ApolloProvider client={client}>
      <Login />
    </ApolloProvider>
  )
}

export default App
