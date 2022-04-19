import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const UserSidebarItems = [
    {
      title: 'User',
      path: '/profile',
      icon: <AiIcons.AiOutlineUser />,
      cName: 'nav-text'
    },
    
    {
      title: 'Logout',
      path: '/logout',
      icon: <FiIcons.FiLogOut />,
      cName: 'nav-text'
    },
    
  ];