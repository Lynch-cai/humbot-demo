import { env } from '@/config/env';
import { mockReponse } from '@/mock-response-data';
import { Http } from '@/services/Http';
import type { Role, RoleRequest } from './role-type';

const API_ENDPOINT = '/api/v1/roles';

export async function fetchRolesApi(signal: AbortSignal) {
  if (env.MOCK_API == 'true') {
    // TODO: remove this once you have auth
    return mockReponse.getRoles as any;
  }

  return await Http.get<SuccessResponse<Role[]>>(API_ENDPOINT, undefined, {
    signal
  });
}

export async function fetchRoleAutocompleteApi(signal: AbortSignal, brancCode: string) {
  if (env.MOCK_API == 'true') {
    // TODO: remove this once you have auth
    return mockReponse.getRoleAutoComplete as any;
  }

  return await Http.get<SuccessResponse<Role[]>>(
    `${API_ENDPOINT}/autocomplete?branchCode=${brancCode}`,
    undefined,
    { signal }
  );
}

export async function fetchRoleByIdApi(id: string, signal: AbortSignal) {
  if (env.MOCK_API == 'true') {
    // TODO: remove this once you have auth
    return mockReponse.getRoleById as any;
  }

  return await Http.get<SuccessResponse<Role>>(`${API_ENDPOINT}/${id}`, undefined, { signal });
}

export async function createRoleApi(requestBody: RoleRequest) {
  return await Http.post<SuccessResponse<Role>>(`${API_ENDPOINT}`, requestBody);
}

export async function updateRoleApi(requestBody: RoleRequest, id: string) {
  return await Http.put<SuccessResponse<Role>>(`${API_ENDPOINT}/${id}`, requestBody);
}
