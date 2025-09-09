<template>
  <PageBreadcrumb :items="breadcrumbItems" />
  <PageTitle :name="t('role.list')" :show-back-button="false">
    <template v-if="hasPermission(Permission.CREATE_ROLE)" #actionButton>
      <AddNewButton :path="AppRoute.ROLE_CREATE" :label="t('role.addNew')" />
    </template>
  </PageTitle>

  <PageContent>
    <Card>
      <DataTable :loading="isLoading" :data-source="data" :columns>
        <template #status="{ row: role }">
          <RoleStatus :status="role.status" />
        </template>

        <template #actions="{ row: role }">
          <div class="flex gap-2">
            <Button
              v-if="hasPermission(Permission.VIEW_ROLE_DETAILS)"
              :label="t('view')"
              icon="pi pi-eye"
              as="router-link"
              :to="{ name: AppRoute.ROLE_DETAILS, params: { id: role.id } }"
            />
            <Button
              v-if="hasPermission(Permission.EDIT_ROLE)"
              :label="t('edit')"
              icon="pi pi-pen-to-square"
              as="router-link"
              :to="{ name: AppRoute.ROLE_EDIT, params: { id: role.id } }"
            />
          </div>
        </template>
      </DataTable>
    </Card>
  </PageContent>
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { computed, onUnmounted } from 'vue';

import {
  AddNewButton,
  Button,
  Card,
  DataTable,
  PageBreadcrumb,
  PageContent,
  PageTitle
} from '@/components';
import { useTranslation } from '@/composables';
import { AppRoute, Permission } from '@/constants';
import { useAuth } from '@/modules/auth/useAuth';
import type { BreadcrumbItemProps, ColumnProps } from '@/types';
import RoleStatus from '../components/RoleStatus.vue';
import { useRolesQuery } from '../composables/useRoleQuery';
import { roleQueryKeys } from '../query-keys';
import type { Role } from '../role-type';

const queryClient = useQueryClient();
const { t } = useTranslation();
const { hasPermission } = useAuth();
const { data, isLoading } = useRolesQuery();

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('userManagement')
  }
]);

const columns = computed<ColumnProps<Role>[]>(() => [
  {
    title: t('role.nameEn'),
    dataIndex: 'nameEn'
  },
  {
    title: t('role.nameKh'),
    dataIndex: 'nameKh'
  },
  {
    title: t('role.roleType'),
    dataIndex: 'type'
  },
  {
    key: 'status',
    title: t('status')
  },
  {
    key: 'actions',
    title: ''
  }
]);

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: roleQueryKeys.roles });
});
</script>

<style scoped></style>
