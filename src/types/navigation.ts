export interface SideNavItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export type SideNavList = SideNavItem[];