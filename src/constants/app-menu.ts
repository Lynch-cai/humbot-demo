import { LayoutDashboard, UserCog } from 'lucide-vue-next';

import { AppRoute, Permission } from '@/constants';
import type { IMenuItem } from '@/types';

export const menus: IMenuItem[] = [
  {
    to: AppRoute.DASHBOARD,
    label: 'dashboard', // Locale key
    icon: LayoutDashboard
  },
  {
    to: '/user-management',
    label: 'userManagement', // Locale key
    icon: UserCog,
    subMenus: [
      {
        to: AppRoute.USER,
        label: 'user.label', // Locale key
        authorities: [
          Permission.CREATE_USER,
          Permission.EDIT_USER,
          Permission.VIEW_USER_LISTING,
          Permission.VIEW_USER_DETAILS
        ]
      },
      {
        to: AppRoute.ROLE,
        label: 'role.label', // Locale key
        authorities: [
          Permission.CREATE_ROLE,
          Permission.EDIT_ROLE,
          Permission.VIEW_ROLE_LISTING,
          Permission.VIEW_ROLE_DETAILS
        ]
      }
    ]
  }
];
