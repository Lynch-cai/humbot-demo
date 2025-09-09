import { env } from '@/config/env';
import { mockReponse } from '@/mock-response-data';
import { Http } from '@/services/Http';
import type { CurrentUser } from './current-user-type';

export async function fetchCurrentUserApi() {
  if (env.MOCK_API == 'true') {
    // TODO: remove this once you have auth
    return mockReponse.me as any;
  }

  return await Http.get<SuccessResponse<CurrentUser>>('/api/v1/users/me');
}
