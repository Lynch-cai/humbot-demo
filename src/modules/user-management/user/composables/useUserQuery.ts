import { AppRoute } from '@/constants';
import router from '@/router';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { userQueryKeys } from '../query-keys';
import { createUser, fetchUserById, fetchUsers, updateUser } from '../user-service';
import type { CreateUserForm, EditUserForm } from '../user-type';

export function useUsersQuery() {
  return useQuery({
    queryKey: userQueryKeys.users,
    queryFn: ({ signal }) => fetchUsers(signal)
  });
}

export function useUserQuery(id: string) {
  return useQuery({
    queryKey: userQueryKeys.user(id),
    queryFn: ({ signal }) => fetchUserById(id, signal)
  });
}

export function useUserFormQuery(id: string) {
  return useQuery({
    queryKey: userQueryKeys.user(id),
    queryFn: ({ signal }) => fetchUserById(id, signal),
    select: (data) => {
      const { branch, roles, ...rest } = data;
      return {
        ...rest,
        branchCode: branch.code,
        roleIds: roles.map((role: any) => role.id)
      };
    }
  });
}

export function useCreateUserMutation() {
  return useMutation({
    mutationFn: (values: CreateUserForm) => createUser(values),
    onSuccess: () => {
      router.push({ name: AppRoute.USER });
    }
  });
}

export function useUpdateUserMutation(id: string) {
  return useMutation({
    mutationFn: (values: EditUserForm) => updateUser(values, id),
    onSuccess: () => {
      router.push({ name: AppRoute.USER });
    }
  });
}
