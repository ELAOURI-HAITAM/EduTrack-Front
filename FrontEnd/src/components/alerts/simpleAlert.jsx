import React from "react";
import { Alert } from "flowbite-react";

const SimpleAlert = ({color,className , message , icon}) =>{
  return (
    <Alert className={className} color={color} icon={icon}>
      <span className="font-medium">{message}</span>
    </Alert>
  );
}
export default SimpleAlert;