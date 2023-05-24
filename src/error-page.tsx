// react
import React from 'react';
// react-router-dom
import { useLocation, useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {

  const error: any = useRouteError();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const home = () => {
    navigate(pathname, { replace: true });
    navigate("/");
  }
  return (
    <div className='flex h-screen'>
      <div className='flex flex-col m-auto gap-2 text-center'>
        <h1 className='text-8xl text-gray-500'>404</h1>
        <p className='text-xl font-bold text-gray-500'> {error.statusText || error.message} </p>
        <p className='text-md'>Sorry, we couldn't find this page.</p>
        <button type="button" className='btn btn-blue' onClick={home}>Back to homepage</button>
      </div>
    </div>
  );
}