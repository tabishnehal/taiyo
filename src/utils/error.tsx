// react
import React from "react";

// DataError component
export const DataError = ({ error }: any) => {
  return (
    <span className='text-red'>{error.message ? error.message : error}</span>
  );
}