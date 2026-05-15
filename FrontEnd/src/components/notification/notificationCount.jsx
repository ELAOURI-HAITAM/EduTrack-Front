import React from 'react';

const NotificationCount = ({notifCount}) => {
    return (
        <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
            {notifCount}
          </span>
    );
}

export default NotificationCount;
