import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import '../app/globals.css'

const router = createBrowserRouter([
  {
    index:true,
    path: "/home",
    element: <App />,
  },
  {
    index:true,
    path: "/",
    element: <Navigate to="/home"/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
