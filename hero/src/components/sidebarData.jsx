import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import NotificationIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import ProfileIcon from '@mui/icons-material/Person';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/studentHome"
    },
    {
        title: "Notification",
        icon: <NotificationIcon />,
        link: "#"
    },
    {
        title: "Messages",
        icon: <MessageIcon />,  // FIXED: Capitalized
        link: "#"
    },
    {
        title: "Groups",
        icon: <GroupIcon />,  // FIXED: Capitalized
        link: "#"
    },
    {
        title: "Events",
        icon: <EventIcon />,  // FIXED: Capitalized
        link: "#"
    },
    {
        title: "My Profile",
        icon: <ProfileIcon />,  // FIXED: Capitalized
        link: "#"
    }
];
