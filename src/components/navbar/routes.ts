export interface Route {
  route: string;
  text: string;
}

export const routes: Route[] = [
  {
    route: '/',
    text: 'About',
  },
  {
    route: '/projects',
    text: 'Projects',
  },
  {
    route: '/blog',
    text: 'Blog',
  },
];
