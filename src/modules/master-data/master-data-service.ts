import { fetchMasterDataByDataTypeApi } from './master-data-api';
import type { MasterDataQuery } from './master-data-type';

export async function fetchMasterDataByDataType(signal: AbortSignal, query: MasterDataQuery) {
  const res = await fetchMasterDataByDataTypeApi(signal, query);
  return res?.data ?? [];
}
