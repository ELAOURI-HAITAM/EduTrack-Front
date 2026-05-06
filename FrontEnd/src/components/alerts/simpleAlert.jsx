import React from "react";
import { Alert } from "flowbite-react";

const SimpleAlert = ({color , message , icon}) =>{
  return (
    <Alert color={color} icon={icon}>
      <span className="font-medium">{message}</span>
    </Alert>
  );
}
export default SimpleAlert;