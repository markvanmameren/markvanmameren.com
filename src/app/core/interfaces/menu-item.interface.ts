import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface menuItem {
  title: string;
  icon?: IconDefinition;
  path?: string;
  adminsOnly?: true;
  children?: menuItem[];
}
