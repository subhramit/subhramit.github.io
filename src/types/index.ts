export interface NavItem {
  label: string;
  href: string;
}

export interface Character {
  name: string;
  description: string;
}

export interface BlogPost {
  title: string;
  date: string;
  quote?: {
    text: string;
    author: string;
  };
  content: string;
}