import {
  faAddressCard,
  faEnvelope,
  faPersonCircleQuestion,
  faProjectDiagram,
  faServer,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { menuItem } from '../../../interfaces/menu-item.interface';

export const menuContent: menuItem[] = [
  {
    title: 'About',
    icon: faPersonCircleQuestion,
    path: '/about',
  },
  {
    title: 'Resumé',
    icon: faAddressCard,
    path: '/resume',
  },
  {
    title: 'Projects',
    icon: faProjectDiagram,
    path: '/projects',
    children: [
      {
        title: 'CRUD',
        icon: faServer,
        path: '/users',
      },
      {
        title: 'NGRX',
        icon: faUsers,
        path: '/calculator',
      },
    ],
  },
  {
    title: 'My Profile',
    icon: faUser,
    path: '/my-profile',
    adminsOnly: true,
  },
  {
    title: 'Contact',
    icon: faEnvelope,
    path: '/contact',
  },
];
