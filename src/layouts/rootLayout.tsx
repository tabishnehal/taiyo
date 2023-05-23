import React from "react";
import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-custom-alert';

export default function RootLayout() {
  return (
    <div className='flex gap-5'>
      <Sidebar />
      <main className="max-w-5xl flex-1 mx-auto py-4">
        <Outlet />
      </main>
      <ToastContainer floatingTime={100} />
    </div>
  );
}