import type { RouteRecordRaw } from 'vue-router';

import { AppRoute } from '@/constants';
import { userManagementRoutes } from '@/modules/user-management/router';

export const privateRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/master-layout/AppMasterLayout.vue'),
    children: [
      {
        path: AppRoute.DASHBOARD,
        name: AppRoute.DASHBOARD,
        component: () => import('@/modules/dashboard/DashboardView.vue'),
        alias: ['/'],
        meta: { requiresAuth: true }
      },
      ...userManagementRoutes
    ]
  }
];
