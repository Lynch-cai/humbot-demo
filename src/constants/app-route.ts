export const AppRoute = {
  UNAUTHORIZE: '/unauthorize',

  LOGIN: '/login',
  DASHBOARD: '/dashboard',

  USER: '/user-management/users',
  USER_CREATE: '/user-management/users/create',
  USER_DETAILS: '/user-management/users/:id',
  USER_EDIT: '/user-management/users/:id/edit',

  ROLE: '/user-management/roles',
  ROLE_CREATE: '/user-management/roles/create',
  ROLE_DETAILS: '/user-management/roles/:id',
  ROLE_EDIT: '/user-management/roles/:id/edit'
} as const;
