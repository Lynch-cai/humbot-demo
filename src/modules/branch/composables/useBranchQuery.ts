import { useQuery } from '@tanstack/vue-query';
import { fetchBranchAutocomplete } from '../branch-service';
import { branchQueyKeys } from '../query-keys';

export function useBranchAutocompleteQuery() {
  return useQuery({
    queryKey: branchQueyKeys.branchAutocomplete,
    queryFn: ({ signal }) => fetchBranchAutocomplete(signal)
  });
}
