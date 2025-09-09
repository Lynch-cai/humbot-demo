<template>
  <div
    class="menu-item flex items-center cursor-pointer rounded-lg p-3 hover:bg-color-primary"
    @click="toggleSubMenu"
  >
    <div class="flex">
      <div class="menu-item--icon mr-2">
        <slot v-if="$slots.icon" :item="menu" name="icon" />
        <component :is="menu.icon" v-else size="20" />
      </div>
    </div>

    <div
      :class="`menu-item--title flex items-center justify-between ${collapsed ? 'w-0' : 'w-full'}`"
    >
      <div>
        <slot v-if="$slots.title" :item="menu" name="title" />
        <span v-else>{{ menu.label }}</span>
      </div>
      <ChevronDown :class="`${showSubMenu ? '-rotate-180' : ''} duration-200`" :size="16" />
    </div>
  </div>

  <ul :class="`sub-menu ${showSubMenu ? 'show' : ''} ml-8`">
    <div class="overflow-hidden">
      <li v-for="subMenu in menu.subMenus ?? []" :key="subMenu.key ?? subMenu.to">
        <MenuItem :menu="subMenu" class="p-0">
          <template #title="{ item }">
            <slot :item="item" name="title" />
          </template>
        </MenuItem>
      </li>
    </div>
  </ul>
</template>

<script lang="ts" setup>
import { ChevronDown } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';

import type { MenuItemProps } from '@/types';
import { useUseLayoutStore } from '../useLayout';
import MenuItem from './MenuItem.vue';

defineProps<MenuItemProps>();

const store = useUseLayoutStore();
const { toggleSubMenu } = store;
const { collapsed, showSubMenu } = storeToRefs(store);
</script>

<style scoped>
.sub-menu {
  display: grid;
  grid-template-rows: 0fr;
  transition: 0.2s ease-in-out;

  > div {
    overflow: hidden;
  }
}

.sub-menu.show {
  grid-template-rows: 1fr;
}

.menu-item:hover {
  color: var(--menu-hover-color);
  background: var(--menu-hover-background);
}

.menu-item .menu-item--title {
  overflow: hidden;
  transition: 0.2s ease-in-out;
}
</style>
