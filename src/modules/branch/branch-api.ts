import { env } from '@/config/env';
import { mockReponse } from '@/mock-response-data';
import { Http } from '@/services/Http';
import type { Branch } from './branch-type';

const API_ENDPOINT = '/api/v1/branches';

export async function fetchBranchAutocompleteApi(signal: AbortSignal) {
  if (env.MOCK_API == 'true') {
    // TODO: remove this once you have auth
    return mockReponse.getBranchAutoComplete as any;
  }

  return await Http.get<SuccessResponse<Branch[]>>(API_ENDPOINT + '/autocomplete', undefined, {
    signal
  });
}
