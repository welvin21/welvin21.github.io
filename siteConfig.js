const siteConfig = {
  url: 'https://welvin21.com',
  title: 'welvin21.com',
  description: "Welvin's official website.",
  menu: [
    {
      text: 'About',
      route: '/',
    },
    {
      text: 'Projects',
      route: '/projects',
    },
    {
      text: 'Blog',
      route: '/blog',
    },
  ],
  author: {
    name: 'Welvin Bun',
    picturePath: '/welvin.png',
    contacts: {
      email: 'welvin07@gmail.com',
      twitter: 'welvin21',
      github: 'welvin21',
    },
  },
};

module.exports = siteConfig;
