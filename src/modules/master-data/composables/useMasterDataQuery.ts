import { useQuery } from '@tanstack/vue-query';
import { fetchMasterDataByDataType } from '../master-data-service';
import type { MasterDataQuery } from '../master-data-type';
import { masterDataQueryKeys } from '../query-keys';

export function useMasterDataByDataTypeQuery(query: MasterDataQuery) {
  return useQuery({
    queryKey: masterDataQueryKeys.masterDataByDataType(query),
    queryFn: ({ signal }) => fetchMasterDataByDataType(signal, query)
  });
}
