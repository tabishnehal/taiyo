// react
import React from "react";

// react-router-dom
import { Outlet } from "react-router-dom";

// react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// App files
import Sidebar from "./sidebar/sidebar";

// RootLayout component
const RootLayout = () => {
  return (
    <div className='flex flex-col md:gap-5 md:flex-row'>

      {/* sidebar */}
      <Sidebar />

      {/* main */}
      <main className="max-w-5xl flex-1 mx-auto py-4">
        <Outlet />
      </main>

      <ToastContainer />
    </div>
  );
}

export default RootLayout;