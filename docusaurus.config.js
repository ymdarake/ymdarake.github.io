// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ymdarake\'s website',
  tagline: 'ymdarake',
  url: 'https://ymdarake.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ymdarake', // Usually your GitHub org/user name.
  projectName: 'ymdarake.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ymdarake',
        logo: {
          alt: 'ymdarake\'s icon',
          src: 'img/logo.png',
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/blog/tags', label: 'Tags', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Internal Links',
            items: [
              {
                label: 'Now',
                to: '/now',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Tags',
                to: '/blog/tags',
              },
              {
                label: 'Reading List',
                to: '/reading-list',
              },
            ]
          },
          {
            title: 'External Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ymdarake',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ymdarake. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
