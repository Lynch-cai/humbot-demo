<template>
  <div class="app-layout h-dvh grid grid-cols-[auto_1fr]">
    <AppSidebar />
    <div class="app-container">
      <AppHeader />
      <AppContent>
        <div v-if="isLoading" class="flex justify-center">Loading...</div>
        <UnauthorizeView v-else-if="!isAuthorized" />
        <RouterView v-else />
      </AppContent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useAuth } from '@/modules/auth/useAuth';
import { useCurrentUserStore } from '@/modules/current-user/current-user-store';
import type { CurrentUser } from '@/modules/current-user/current-user-type';

import { useCurrentUserQuery } from '@/modules/current-user/composables/useCurrectUserQuery';
import UnauthorizeView from '@/modules/exception/Unauthorize.vue';
import AppContent from './AppContent.vue';
import AppHeader from './AppHeader.vue';
import AppSidebar from './AppSidebar.vue';

const { data, isLoading } = useCurrentUserQuery();

const route = useRoute();
const { setCurrentUser } = useCurrentUserStore();
const { hasAuthority } = useAuth();

watch(data, () => {
  setCurrentUser(data.value as CurrentUser);
});

const isAuthorized = computed(() => {
  return hasAuthority(route.meta.authorities);
});
</script>

<style scoped></style>
