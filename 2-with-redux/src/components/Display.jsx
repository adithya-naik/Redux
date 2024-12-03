import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const counter = useSelector(store => store.counter);
  return (
    <p className="lead mb-4 fw-bold text-success">
      Counter Value : {counter}
    </p>
  );
};

export default Display;
