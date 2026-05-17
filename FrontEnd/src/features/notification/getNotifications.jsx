import React, { useState } from "react";
import { Bell } from "lucide-react";
import {
  useGetAllNotifications,
  useReadNotification,
} from "../../hooks/useNotifications";
import NotificationItem from "../../components/notification/notificationItem";
import Loader from "../../components/loading/loader";
import NotificationCount from "../../components/notification/notificationCount";
import { UseUser } from "../../hooks/useUser";
import { Link } from "react-router-dom";

const GetNotifications = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: notifications, isLoading } = useGetAllNotifications();
  const { data: user } = UseUser();
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
        {unreadCount > 0 && <NotificationCount notifCount={unreadCount} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
          <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Notifications</h3>
            <span className="text-xs text-purple-600 font-medium">
              {unreadCount} Unread
            </span>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {isLoading ? (
              <p className="p-4 text-center text-sm text-gray-400">
                {" "}
                <Loader />{" "}
              </p>
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
