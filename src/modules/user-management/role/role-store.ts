import { acceptHMRUpdate, defineStore } from 'pinia';
import type { Role } from './role-type';

export const useRoleStore = defineStore('roleStore', {
  state: (): { roles: Role[] } => ({
    roles: []
  }),
  getters: {},
  actions: {
    setRoles(roles: Role[]) {
      this.roles = roles ?? [];
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRoleStore, import.meta.hot));
}
