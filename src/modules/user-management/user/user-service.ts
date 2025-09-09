import { createUserApi, fetchUserByIdApi, fetchUsersApi, updateUserApi } from './user-api';
import type { CreateUserForm, EditUserForm, User } from './user-type';

export async function fetchUsers(signal: AbortSignal) {
  const res = await fetchUsersApi(signal);
  return res?.data ?? [];
}

export async function fetchUserById(id: string, signal: AbortSignal) {
  const res = await fetchUserByIdApi(id, signal);
  return res?.data ?? ({} as User);
}

export async function createUser(values: CreateUserForm) {
  const res = await createUserApi(values);
  return res?.data ?? {};
}

export async function updateUser(values: EditUserForm, id: string) {
  const res = await updateUserApi(values, id);
  return res?.data ?? {};
}
