// react
import React from "react";

// react-icons
import { FaSpinner } from "react-icons/fa";

// Loader component
export const Loader = ({ message }: any) => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col items-center gap-1 m-auto">
        <FaSpinner className="w-10 h-10 animate-spin" />
        <span>{message}</span>
      </div>
    </div>
  );
}