import type { RouteRecordRaw } from 'vue-router';

import { AppRoute } from '@/constants';
import { getAccessToken } from './auth-util';

const routes: RouteRecordRaw[] = [
  {
    path: AppRoute.LOGIN,
    name: AppRoute.LOGIN,
    beforeEnter: (to, from, next) => {
      if (!getAccessToken()) {
        next();
      } else {
        next({ path: from.fullPath, replace: true });
      }
    },
    component: () => import('@/modules/auth/pages/LoginPage.vue')
  }
];

export default routes;
