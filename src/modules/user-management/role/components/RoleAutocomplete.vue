<template>
  <MultiSelectField
    display="chip"
    :disabled="!enabled"
    :name
    :required
    :loading="isLoading"
    :label="t('role.label')"
    :options="roles"
    option-label="nameEn"
    option-value="id"
  />
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { computed, onUnmounted } from 'vue';

import { MultiSelectField } from '@/components';
import { useTranslation } from '@/composables';
import { useRoleAutocompleteQuery } from '../composables/useRoleQuery';
import { roleQueryKeys } from '../query-keys';

interface BranchAutocompleteProps {
  name: string;
  required?: boolean;
  branchCode: string;
}

const { branchCode } = defineProps<BranchAutocompleteProps>();

const queryClient = useQueryClient();
const { t } = useTranslation();

const computedBranchCode = computed(() => branchCode);
const enabled = computed(() => !!branchCode);

const { roles, isLoading } = useRoleAutocompleteQuery(computedBranchCode);

onUnmounted(() => {
  queryClient.cancelQueries({
    queryKey: roleQueryKeys.roleAutocomplete(computedBranchCode)
  });
});
</script>

<style scoped></style>
