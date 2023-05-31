
import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache,gql } from '@apollo/client'

import { Route,Routes,BrowserRouter as Router, createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/login/Login';
import Navbar from './components/NavBar';
import SingUp from './pages/singup/SingUp';
import CreatePatatoe from './pages/typePatatoe/TypePatatoe';

const client =new ApolloClient(
   {
      uri:'http://localhost:8080',
      cache: new InMemoryCache(),
   }
)
const App = () => {

   const router = createBrowserRouter([
      {
	 path:"/login",
	 element: <Login />
      },
      {
	 path:"/singup",
	 element: <SingUp/>
      },
      {
	 path:"/patatoe",
	 element:<CreatePatatoe/>
      }
   ])
  
     return (
      <ApolloProvider client={client}>
	 <RouterProvider router={router}/>
      </ApolloProvider>
     ); 
}


export default App
