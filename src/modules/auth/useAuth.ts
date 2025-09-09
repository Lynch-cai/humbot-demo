import { storeToRefs } from 'pinia';

import { useCurrentUserStore } from '@/modules/current-user/current-user-store';
import type { Permission } from '@/types';

export function useAuth() {
  const store = useCurrentUserStore();
  const { authorities } = storeToRefs(store);

  function hasAuthority(menuAuthorities?: string[]): boolean {
    return true;
    // TODO: enable once you have auth
    // return store.isAuthorize(menuAuthorities);
  }

  function hasPermission(permission: Permission): boolean {
    return true;
    // TODO: enable once you have auth
    // return authorities.value.includes(permission);
  }

  return {
    authorities,
    hasAuthority,
    hasPermission
  };
}
