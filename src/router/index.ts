import { createRouter, createWebHistory } from 'vue-router';

import { env } from '@/config/env';
import { requiresAuth } from './guards';
import { privateRoutes } from './private-routes';
import { publicRoutes } from './public-routes';

const router = createRouter({
  history: createWebHistory(env.APP_BASE_PATH),
  routes: [
    ...publicRoutes,
    ...privateRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/modules/exception/NotFound.vue')
    }
  ]
});

router.beforeEach(requiresAuth);

export default router;
