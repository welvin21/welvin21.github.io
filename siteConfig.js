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
      email: { name: 'welvin07@gmail.com', link: 'mailto:welvin07@gmail.com' },
      twitter: { name: 'welvin21', link: 'https://twitter.com/welvin21' },
      github: { name: 'welvin21', link: 'https://github.com/welvin21' },
      linkedin: {
        name: 'Welvin Bun',
        link: 'https://www.linkedin.com/in/welvin-bun/',
      },
    },
  },
};

module.exports = siteConfig;
