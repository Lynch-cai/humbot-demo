<template>
  <div class="h-full overflow-auto px-3">
    <Menu :menus="authorizedMenus">
      <template #title="{ item }">
        {{ t(item.label) }}
      </template>
    </Menu>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import { useTranslation } from '@/composables';
import { useAuth } from '@/modules/auth/useAuth';
import type { IMenuItem } from '@/types';
import { ArrayUtils } from '@/utils/common';

import { menus } from '../../constants/app-menu';
import Menu from './menu/Menu.vue';

const { t } = useTranslation();
const route = useRoute();
const { hasAuthority } = useAuth();

const activeMenu = ref<string>('');
const authorizedMenus = ref<IMenuItem[]>(getAuthorizedMenus(menus));

onMounted(() => {
  activeMenu.value = route.path;
});

watchEffect(() => {
  authorizedMenus.value = getAuthorizedMenus(menus);
  activeMenu.value = route.path;
});

function getAuthorizedMenus(menus: IMenuItem[]): IMenuItem[] {
  const authorizedMenus: IMenuItem[] = [];
  for (const menu of menus) {
    if (ArrayUtils.isEmpty(menu.subMenus) && hasAuthority(menu.authorities)) {
      authorizedMenus.push(menu);
    } else if (!ArrayUtils.isEmpty(menu.subMenus)) {
      const subMenus = getAuthorizedMenus(menu.subMenus ?? []);
      if (!ArrayUtils.isEmpty(subMenus)) {
        authorizedMenus.push({ ...menu, subMenus });
      }
    }
  }
  return authorizedMenus;
}
</script>

<style scoped></style>
