import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/pages/Home';
import Jobs from './components/pages/Jobs';

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/jobs",
    element:<Jobs/>
  },
  {
    path:"/",
    element:<Home/>
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App;
