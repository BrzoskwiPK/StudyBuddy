export interface Link {
  name: string;
  path: string;
}

export interface SidebarSectionProps {
  links?: Link[];
}

export interface SidebarItemProps {
  link: Link;
}
