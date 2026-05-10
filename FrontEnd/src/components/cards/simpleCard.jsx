import React from "react";
import { Link } from "react-router-dom";

const SimpleCard = ({
  id,
  name,
  members,
  to = "",
  onclick,
  description= "",
  actions = null,
  icon,
  DetailLink,
  DeleteButton,
  UpdateButton,
  onclick_delete,
  onclick_update,
}) => {
  return (
    <div data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="800" className="block rounded-lg border border-purple-400 bg-white p-6 shadow-md transition-shadow duration-700 hover:shadow-purple-300 dark:bg-gray-800">
      <div className="flex items-start justify-between">
        <h2 className="text-xl flex items-center gap-5 font-semibold text-gray-800 dark:text-white">
          {name}
          {icon}
        </h2>
        <span className="rounded-full text-2xl font-medium">{members}</span>
      </div>
      {description && (
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      )}
          <div className="mt-5 flex gap-5 m-auto">
            {DeleteButton}
            {UpdateButton}
          </div>
      <div className="mt-6  items-center justify-between text-sm">
        {DetailLink}
        
      </div>
    </div>
  );
};

export { SimpleCard };
