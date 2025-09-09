<template>
  <section>
    <SectionTitle class="pb-3">
      {{ t('permissions') }}
    </SectionTitle>
    <Loading v-if="isLoading" />
    <div v-else class="grid grid-cols-3 gap-6">
      <Card
        v-for="resource in resources"
        :key="resource.id"
        class="!round !rounded-2xl !border-white"
      >
        <section class="flex justify-between">
          {{ resource.nameEn }}
        </section>
        <Divider class="!my-2" />
        <el-checkbox-group
          v-model="checkedPermissions"
          class="grid grid-cols-1 pointer-events-none"
        >
          <Checkbox
            v-for="permission in resource.permissions"
            :key="permission.code"
            :value="permission.code"
            :label="permission.nameEn"
            class="!mr-0"
          />
        </el-checkbox-group>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { computed, onUnmounted } from 'vue';

import { Card, Checkbox, Divider, Loading, SectionTitle } from '@/components';
import { useTranslation } from '@/composables';
import { useResourceWithPermissionQuery } from '../../resource/composables/useResourceQuery';
import { resourceQueryKeys } from '../../resource/query-keys';
import type { Permission } from '../../resource/resource-type';

type RolePermissionDetailsProps = {
  permissions: Permission[] | undefined;
};

const props = defineProps<RolePermissionDetailsProps>();

const queryClient = useQueryClient();
const { t } = useTranslation();

const { isLoading, data: resources } = useResourceWithPermissionQuery();

const checkedPermissions = computed<string[]>(() => {
  if (!props.permissions) {
    return [];
  }

  return props.permissions.map((permission) => permission.code);
});

onUnmounted(() => {
  queryClient.cancelQueries({
    queryKey: resourceQueryKeys.resourceWithPermission
  });
});
</script>

<style scoped></style>
