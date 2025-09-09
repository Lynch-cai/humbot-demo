<template>
  <ul class="min-w-11">
    <template v-for="menu in menus" :key="menu.key ?? menu.to">
      <li>
        <MenuSubItem v-if="menu.subMenus?.length" :menu="menu">
          <template #title="{ item }">
            <slot :item="item" name="title" />
          </template>
        </MenuSubItem>

        <MenuItem v-else :menu="menu">
          <template #title="{ item }">
            <slot :item="item" name="title" />
          </template>
        </MenuItem>
      </li>
    </template>
  </ul>
</template>

<script lang="ts" setup>
import type { MenuProps } from '@/types';
import MenuItem from './MenuItem.vue';
import MenuSubItem from './MenuSubItem.vue';

defineProps<MenuProps>();
</script>

<style scoped></style>
