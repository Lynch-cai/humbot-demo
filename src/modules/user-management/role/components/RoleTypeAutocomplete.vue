<template>
  <SelectField
    :required="true"
    :loading="isLoading"
    name="type"
    :label="t('role.roleType')"
    :options="data"
    option-label="name"
    option-value="value"
  />
</template>

<script setup lang="ts">
import { SelectField } from '@/components';
import { useTranslation } from '@/composables';
import { currentUserQueryKeys } from '@/modules/current-user/query-keys';
import { useMasterDataByDataTypeQuery } from '@/modules/master-data/composables/useMasterDataQuery';
import { useQueryClient } from '@tanstack/vue-query';
import { onUnmounted } from 'vue';

const queryClient = useQueryClient();

const { t } = useTranslation();
const { data, isLoading } = useMasterDataByDataTypeQuery({ type: 'ROLE_TYPE' });

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: currentUserQueryKeys.currentUser });
});
</script>

<style scoped></style>
