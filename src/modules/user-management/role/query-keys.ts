import type { ComputedRef } from 'vue';

export const roleQueryKeys = {
  roles: ['roles'],
  role: (id: string) => ['role', id],
  roleAutocomplete: (branchCode: ComputedRef<string>) => ['rolesAutocomplete', branchCode],
  rolePermissionIdsById: (id: string) => ['rolePermissionIdsById', id]
};
