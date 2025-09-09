import { env } from '@/config/env';
import { mockReponse } from '@/mock-response-data';
import { Http } from '@/services/Http';
import type { CreateUserForm, EditUserForm, User } from './user-type';

const API_ENDPOINT = '/api/v1/users';

export async function fetchUsersApi(signal: AbortSignal) {
  if (env.MOCK_API == 'true') {
    // TODO: remove this once you have auth
    return mockReponse.getUsers as any;
  }

  return await Http.get<SuccessResponse<User[]>>(API_ENDPOINT, undefined, {
    signal
  });
}

export async function fetchUserByIdApi(id: string, signal: AbortSignal) {
  if (env.MOCK_API == 'true') {
    // TODO: remove this once you have auth
    return mockReponse.getUserById as any;
  }

  return await Http.get<SuccessResponse<User>>(`${API_ENDPOINT}/${id}`, undefined, { signal });
}

export async function createUserApi(values: CreateUserForm) {
  return await Http.post<SuccessResponse<User>>(`${API_ENDPOINT}`, values);
}

export async function updateUserApi(values: EditUserForm, id: string) {
  return await Http.put<SuccessResponse<User>>(`${API_ENDPOINT}/${id}`, values);
}
