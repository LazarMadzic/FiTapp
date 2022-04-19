import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as Io5Icons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';


export const SidebarItems = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Workouts',
    path: '/workouts',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Steps',
    path: '/steps',
    icon: <Io5Icons.IoFootsteps />,
    cName: 'nav-text'
  },
  {
    title: 'Calories',
    path: '/calories',
    icon: <MdIcons.MdFastfood/>,
    cName: 'nav-text'
  },
  {
    title: 'Water',
    path: '/water',
    icon: <Io5Icons.IoWater />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];