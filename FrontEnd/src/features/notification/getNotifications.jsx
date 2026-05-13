import React, { useState } from "react";
import { Bell } from "lucide-react";
import { useGetAllNotifications, useReadNotification } from "../../hooks/useNotifications";
import NotificationItem from "../../components/notification/notificationItem";
import Loader from "../../components/loading/loader";

const GetNotifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const { data: notifications, isLoading } = useGetAllNotifications();
  const { mutate: markAsRead } = useReadNotification();

  const unreadNotifications = notifications?.filter((n) => !n.is_read) || [];
  const unreadCount = unreadNotifications.length;

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all"
      >
        <Bell size={24} />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
          <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Notifications</h3>
            <span className="text-xs text-purple-600 font-medium">{unreadCount} Unread</span>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {isLoading ? (
              <p className="p-4 text-center text-sm text-gray-400"> <Loader/> </p>
            ) : unreadNotifications.length > 0 ? (
              unreadNotifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  title={notif.title}
                  message={notif.message}
                  createdAt={notif.created_at}
                  onClick={() => {
                    markAsRead(notif.id);
                  }}
                />
              ))
            ) : (
              <div className="p-8 text-center text-gray-400">
                <p className="text-sm">There Is No Notifications</p>
              </div>
            )}
          </div>
          
          
        </div>
      )}
    </div>
  );
};

export default GetNotifications;