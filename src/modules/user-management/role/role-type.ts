import type { Permission, PermissionId } from '../resource/resource-type';

export interface Role {
  id: number;
  nameEn: string;
  nameKh: string;
  type: string;
  description?: string;
  permissions?: Permission[];
  status: string;
}

export interface RoleForm {
  nameEn: string;
  nameKh: string;
  type: string;
  description?: string;
  permission?: Record<string, PermissionId[]>;
}

export interface RoleRequest {
  nameEn: string;
  nameKh: string;
  type: string;
  description?: string;
  permissionIds?: PermissionId[];
}
