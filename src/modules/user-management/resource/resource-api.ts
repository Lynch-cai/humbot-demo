import { env } from '@/config/env';
import { mockReponse } from '@/mock-response-data';
import { Http } from '@/services/Http';
import type { Resource } from './resource-type';

const API_ENDPOINT = '/api/v1/resources/permissions';

export async function fetchResourceWithPermissionApi(signal: AbortSignal) {
  if (env.MOCK_API == 'true') {
    // TODO: remove this once you have auth
    return mockReponse.getResourceWithPermission as any;
  }

  return await Http.get<SuccessResponse<Resource[]>>(API_ENDPOINT, undefined, {
    signal
  });
}
