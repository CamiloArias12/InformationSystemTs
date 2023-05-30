import React from 'react'
import { ApolloClient, InMemoryCache,ApolloProvider,gql } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



const router =createBrowserRouter([
   {
      path:"/",
      element: <App/>,
   },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)