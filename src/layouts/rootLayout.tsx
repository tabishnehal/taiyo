// react
import React from "react";
// react-router-dom
import { Outlet } from "react-router-dom";
// react-custom-alert
import { ToastContainer } from 'react-custom-alert';
// App files
import Sidebar from "./sidebar/sidebar";

export default function RootLayout() {
  return (
    <div className='flex flex-col md:gap-5 md:flex-row'>
      <Sidebar />
      <main className="max-w-5xl flex-1 mx-auto py-4">
        <Outlet />
      </main>
      <ToastContainer floatingTime={100} />
    </div>
  );
}