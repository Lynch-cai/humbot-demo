import { fetchResourceWithPermissionApi } from './resource-api';

export async function fetchResourceWithPermission(signal: AbortSignal) {
  const res = await fetchResourceWithPermissionApi(signal);
  return res?.data ?? [];
}
