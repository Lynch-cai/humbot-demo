import { Permission } from '@/constants';

export type { BreadcrumbItemProps } from '@/components/shared/PageBreadcrumb.vue';
export type { ColumnProps } from '@/components/ui/DataTable.vue';
export type { DescriptionsFieldProps } from '@/components/ui/Descriptions.vue';
export type { TagProps } from '@/components/ui/Tag.vue';

export interface IMenuItem {
  key?: string;
  to: string;
  label: string;
  icon?: any;
  authorities?: string[];
  subMenus?: IMenuItem[];
  type?: 'group';
}

export interface MenuProps {
  menus: IMenuItem[];
}

export interface MenuItemProps {
  menu: IMenuItem;
}

export type Permission = (typeof Permission)[keyof typeof Permission];
