import { toTypedSchema } from '@vee-validate/zod';

import { useFormAsync } from '@/composables';
import { roleValidationSchema } from '../role-schema';
import type { RoleForm } from '../role-type';
import { useCreateRoleMutation } from './useRoleQuery';

export function useRoleCreateForm() {
  const { handleSubmit } = useFormAsync<RoleForm>({
    validationSchema: toTypedSchema(roleValidationSchema)
  });

  const { isPending, mutate } = useCreateRoleMutation();

  const onSubmit = handleSubmit((formValues) => {
    mutate(formValues);
  });

  return {
    isSubmitting: isPending,
    onSubmit
  };
}
