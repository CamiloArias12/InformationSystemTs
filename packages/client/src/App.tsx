
import { ApolloClient, ApolloProvider, InMemoryCache,gql } from '@apollo/client'

import { Route,Routes,BrowserRouter as Router, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from './pages/login/Login';
import SingUp from './pages/singup/SingUp';
import CreatePatatoe from './pages/typePatatoe/TypePatatoe';
import CreateLot from './pages/lot/Lot';
import Home from './pages/home/Home';
import NavBarLot from './components/NavBar/NavLot';
import NavBarSeed from './components/NavBar/NavSeed';
import NavBarPatatoe from './components/NavBar/NavPatatoe';
import NavBarProduction from './components/NavBar/NavProduction';
import { GlobalStorage } from './storage/GlobalStorage';
import NavbarDashboard from './pages/dashboard/DashBoard';

const client =new ApolloClient(
   {
      uri:'http://localhost:8080',
      cache: new InMemoryCache(),
   }
)
const App = () => {

   const router = createBrowserRouter([

      {
	 path:"/",
	 element:<Home/>,
	 children: [
	    {
	       path:"login",
	       element: <Login />,
	    },
	    {
	       path:"singup",
	       element: <SingUp/>
	    },
	    ]
	 },
      {
	 path:"/dashboard",
	 element:<NavbarDashboard/>,
	 children: [
	    {
	       path:"lot",
	       element: <NavBarLot />,
	       children: [
		  {
		     path:"createLot",
		     element: <CreateLot />,
		  },
		  {
		     path:"singup",
		     element: <SingUp/>
		  },
		  {
		     path:"createLot",
		     element: <CreateLot />,
		  },

	    ]

	    },
	    {
	       path:"seed",
	       element: <NavBarSeed/>,
	       children: [
		  {
		     path:"createLot",
		     element: <CreateLot />,
		  },
		  {
		     path:"singup",
		     element: <SingUp/>
		  },
		  {
		     path:"createLot",
		     element: <CreateLot />,
		  },
		  ]
	    },
	    {
	       path:"patatoe",
	       element: <NavBarPatatoe/>,
	       children: [
		  {
		     path:"createLot",
		     element: <CreatePatatoe />,
		  },
		  {
		     path:"singup",
		     element: <SingUp/>
		  },
		  {
		     path:"createLot",
		     element: <CreateLot />,
		  },
		  ]

	    },
	    {
	       path:"production",
	       element: <NavBarProduction />,
	       children: [
		  {
		     path:"createLot",
		     element: <CreateLot />,
		  },
		  {
		     path:"singup",
		     element: <SingUp/>
		  },
		  {
		     path:"createLot",
		     element: <CreateLot />,
		  },
		  ]

	    },

	    ]
	 }


   ])
  
     return (
      <GlobalStorage>
	 <ApolloProvider client={client}>
	    <RouterProvider router={router}/>
	 </ApolloProvider>
      </GlobalStorage>
     ); 
}


export default App
