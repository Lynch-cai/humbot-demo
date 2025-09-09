import { fetchCurrentUserApi } from './current-user-api';

export async function fetchCurrentUser() {
  const res = await fetchCurrentUserApi();
  return res?.data ?? {};
}
