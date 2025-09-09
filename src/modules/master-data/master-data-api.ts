import { env } from '@/config/env';
import { mockReponse } from '@/mock-response-data';
import { Http } from '@/services/Http';
import type { MasterData, MasterDataQuery } from './master-data-type';

const API_ENDPOINT = '/api/v1/master-data';

export async function fetchMasterDataByDataTypeApi(signal: AbortSignal, query: MasterDataQuery) {
  if (env.MOCK_API == 'true') {
    // TODO: remove this once you have auth
    return mockReponse.getMasterDataRoleType.ROLE_TYPE as any;
  }

  return await Http.get<SuccessResponse<MasterData[]>>(API_ENDPOINT, query, {
    signal
  });
}
