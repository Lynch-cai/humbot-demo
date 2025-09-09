import {
  createRoleApi,
  fetchRoleAutocompleteApi,
  fetchRoleByIdApi,
  fetchRolesApi,
  updateRoleApi
} from './role-api';
import type { Role, RoleRequest } from './role-type';

export async function fetchRoles(signal: AbortSignal) {
  const res = await fetchRolesApi(signal);
  return res?.data ?? [];
}

export async function fetchRoleAutocomplete(signal: AbortSignal, brancCode: string) {
  const res = await fetchRoleAutocompleteApi(signal, brancCode);
  return res?.data ?? [];
}

export async function fetchRoleById(id: string, signal: AbortSignal) {
  const res = await fetchRoleByIdApi(id, signal);
  return res?.data ?? ({} as Role);
}

export async function createRole(values: RoleRequest) {
  const res = await createRoleApi(values);
  return res?.data ?? {};
}

export async function updateRole(values: RoleRequest, id: string) {
  const res = await updateRoleApi(values, id);
  return res?.data ?? {};
}
