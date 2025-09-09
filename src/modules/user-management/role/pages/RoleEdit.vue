<template>
  <PageBreadcrumb :items="breadcrumbItems" />
  <PageTitle :name="role?.nameEn" :loading="isLoading" />

  <PageContent>
    <Form @submit="onSubmit">
      <PageContentSection :title="t('role.info')">
        <Row>
          <Col :md="8">
            <InputField required name="nameEn" :label="t('role.nameEn')" />
          </Col>
          <Col :md="8">
            <InputField required name="nameKh" :label="t('role.nameKh')" />
          </Col>
          <Col :md="8">
            <RoleTypeAutocomplete />
          </Col>
        </Row>
        <Row>
          <Col :md="24">
            <TextAreaField maxlength="255" name="description" :label="t('description')" />
          </Col>
        </Row>
      </PageContentSection>

      <RolePermission />

      <div class="flex justify-end gap-2">
        <CancelButton />
        <UpdateButton :loading="isSubmitting" />
      </div>
    </Form>
  </PageContent>
</template>

<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

import {
  CancelButton,
  Col,
  Form,
  InputField,
  PageBreadcrumb,
  PageContent,
  PageContentSection,
  PageTitle,
  Row,
  TextAreaField,
  UpdateButton
} from '@/components';
import { useTranslation } from '@/composables';
import { AppRoute } from '@/constants';
import type { BreadcrumbItemProps } from '@/types';
import RolePermission from '../components/RolePermission.vue';
import RoleTypeAutocomplete from '../components/RoleTypeAutocomplete.vue';
import { useRoleEditForm } from '../composables/useRoleEditForm';
import { useRolePermissionIdsByIdQuery } from '../composables/useRoleQuery';
import { roleQueryKeys } from '../query-keys';

const queryClient = useQueryClient();
const { t } = useTranslation();
const { params } = useRoute();

const breadcrumbItems = computed<BreadcrumbItemProps[]>(() => [
  {
    title: t('userManagement')
  },
  {
    title: t('role.list'),
    to: AppRoute.ROLE
  },
  {
    title: t('edit')
  }
]);

const { isLoading, data: role } = useRolePermissionIdsByIdQuery(params.id as string);
const { isSubmitting, onSubmit } = useRoleEditForm(params.id as string, role);

onUnmounted(() => {
  queryClient.cancelQueries({
    queryKey: roleQueryKeys.rolePermissionIdsById(params.id as string)
  });
});
</script>

<style scoped></style>
