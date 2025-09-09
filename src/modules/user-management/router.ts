import { AppRoute, Permission } from '@/constants';
import type { RouteRecordRaw } from 'vue-router';

export const userManagementRoutes: RouteRecordRaw[] = [
  {
    path: AppRoute.USER,
    name: AppRoute.USER,
    component: () => import('@/modules/user-management/user/pages/UserListing.vue'),
    meta: {
      requiresAuth: true,
      authorities: [Permission.VIEW_USER_LISTING]
    }
  },
  {
    path: AppRoute.USER_CREATE,
    name: AppRoute.USER_CREATE,
    component: () => import('@/modules/user-management/user/pages/UserCreate.vue'),
    meta: {
      requiresAuth: true,
      authorities: [Permission.CREATE_USER]
    }
  },
  {
    path: AppRoute.USER_DETAILS,
    name: AppRoute.USER_DETAILS,
    component: () => import('@/modules/user-management/user/pages/UserDetails.vue'),
    meta: {
      requiresAuth: true,
      authorities: [Permission.VIEW_USER_DETAILS]
    }
  },
  {
    path: AppRoute.USER_EDIT,
    name: AppRoute.USER_EDIT,
    component: () => import('@/modules/user-management/user/pages/UserEdit.vue'),
    meta: {
      requiresAuth: true,
      authorities: [Permission.EDIT_USER]
    }
  },
  {
    path: AppRoute.ROLE,
    name: AppRoute.ROLE,
    component: () => import('@/modules/user-management/role/pages/RoleListing.vue'),
    meta: {
      requiresAuth: true,
      authorities: [Permission.VIEW_ROLE_LISTING]
    }
  },
  {
    path: AppRoute.ROLE_CREATE,
    name: AppRoute.ROLE_CREATE,
    component: () => import('@/modules/user-management/role/pages/RoleCreate.vue'),
    meta: {
      requiresAuth: true,
      authorities: [Permission.CREATE_ROLE]
    }
  },
  {
    path: AppRoute.ROLE_DETAILS,
    name: AppRoute.ROLE_DETAILS,
    component: () => import('@/modules/user-management/role/pages/RoleDetails.vue'),
    meta: {
      requiresAuth: true,
      authorities: [Permission.VIEW_ROLE_DETAILS]
    }
  },
  {
    path: AppRoute.ROLE_EDIT,
    name: AppRoute.ROLE_EDIT,
    component: () => import('@/modules/user-management/role/pages/RoleEdit.vue'),
    meta: {
      requiresAuth: true,
      authorities: [Permission.EDIT_ROLE]
    }
  }
];
