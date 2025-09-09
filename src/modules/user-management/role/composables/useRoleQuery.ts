import { useMutation, useQuery } from '@tanstack/vue-query';
import { computed, type ComputedRef } from 'vue';

import { AppRoute } from '@/constants';
import router from '@/router';

import {
  getPermissionIdsFromValuesToPermissionIds,
  getResourcePermissionIds
} from '../../resource/resource-utils';
import { roleQueryKeys } from '../query-keys';
import {
  createRole,
  fetchRoleAutocomplete,
  fetchRoleById,
  fetchRoles,
  updateRole
} from '../role-service';
import type { RoleForm } from '../role-type';

export function useRolesQuery() {
  return useQuery({
    queryKey: roleQueryKeys.roles,
    queryFn: ({ signal }) => fetchRoles(signal)
  });
}

export function useRoleAutocompleteQuery(branchCode: ComputedRef<string>) {
  const enabled = computed(() => !!branchCode);

  const { data: roles, isLoading } = useQuery({
    queryKey: roleQueryKeys.roleAutocomplete(branchCode),
    queryFn: ({ signal }) => fetchRoleAutocomplete(signal, branchCode.value),
    enabled
  });

  return { roles, isLoading };
}

export function useRoleQuery(id: string) {
  return useQuery({
    queryKey: roleQueryKeys.role(id),
    queryFn: ({ signal }) => fetchRoleById(id, signal)
  });
}

export function useRolePermissionIdsByIdQuery(id: string) {
  return useQuery({
    queryKey: roleQueryKeys.rolePermissionIdsById(id),
    queryFn: ({ signal }) => fetchRoleById(id, signal),
    select(data): RoleForm {
      return {
        nameEn: data?.nameEn ?? '',
        nameKh: data?.nameKh ?? '',
        type: data?.type ?? '',
        description: data?.description,
        permission: getResourcePermissionIds(data?.permissions)
      };
    }
  });
}

export function useCreateRoleMutation() {
  return useMutation({
    mutationFn: (formValues: RoleForm) => {
      return createRole({
        nameEn: formValues.nameEn,
        nameKh: formValues.nameKh,
        type: formValues.type,
        description: formValues.description,
        permissionIds: getPermissionIdsFromValuesToPermissionIds(formValues.permission)
      });
    },
    onSuccess: () => {
      router.push({ name: AppRoute.ROLE });
    }
  });
}

export function useUpdateRoleMutation(id: string) {
  return useMutation({
    mutationFn: (formValues: RoleForm) => {
      return updateRole(
        {
          nameEn: formValues.nameEn,
          nameKh: formValues.nameKh,
          type: formValues.type,
          description: formValues.description,
          permissionIds: getPermissionIdsFromValuesToPermissionIds(formValues.permission)
        },
        id
      );
    },
    onSuccess: () => {
      router.push({ name: AppRoute.ROLE });
    }
  });
}
