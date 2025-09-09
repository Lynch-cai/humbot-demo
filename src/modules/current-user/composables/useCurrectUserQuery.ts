import { useQuery } from '@tanstack/vue-query';
import { fetchCurrentUser } from '../current-user-service';
import { currentUserQueryKeys } from '../query-keys';

export function useCurrentUserQuery() {
  return useQuery({
    queryKey: currentUserQueryKeys.currentUser,
    queryFn: fetchCurrentUser
  });
}
