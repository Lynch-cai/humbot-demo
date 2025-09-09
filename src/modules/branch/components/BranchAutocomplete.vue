<template>
  <SelectField
    :required
    :name
    :loading="isLoading"
    :label="t('branch.label')"
    :options="data"
    option-label="nameEn"
    option-value="code"
    @change="onChange"
  />
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { onUnmounted } from 'vue';

import { SelectField } from '@/components';
import { useTranslation } from '@/composables';

import { useBranchAutocompleteQuery } from '../composables/useBranchQuery';
import { branchQueyKeys } from '../query-keys';

interface BranchAutocompleteProps {
  name: string;
  required?: boolean;
}

const emit = defineEmits<{
  change: [id: string];
}>();

defineProps<BranchAutocompleteProps>();

const queryClient = useQueryClient();
const { t } = useTranslation();
const { data, isLoading } = useBranchAutocompleteQuery();

function onChange(id: string) {
  emit('change', id);
}

onUnmounted(() => {
  queryClient.cancelQueries({ queryKey: branchQueyKeys.branchAutocomplete });
});
</script>

<style scoped></style>
