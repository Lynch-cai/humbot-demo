import { useQuery } from '@tanstack/vue-query';
import { resourceQueryKeys } from '../query-keys';
import { fetchResourceWithPermission } from '../resource-service';

export function useResourceWithPermissionQuery() {
  return useQuery({
    queryKey: resourceQueryKeys.resourceWithPermission,
    queryFn: ({ signal }) => fetchResourceWithPermission(signal)
  });
}
