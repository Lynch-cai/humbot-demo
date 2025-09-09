import { acceptHMRUpdate, defineStore } from 'pinia';
import type { User } from './user-type';

export const useUserStore = defineStore('userStore', {
  state: (): { users: User[] } => ({
    users: []
  }),
  getters: {},
  actions: {
    setUsers(users: User[]) {
      this.users = users ?? [];
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
