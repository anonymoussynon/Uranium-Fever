// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nuclear Sunset',
  tagline: 'A Hardcore TTW Modlist',
  favicon: 'img/NS.ico',

  // Set the production url of your site here
  url: 'https://nuclearsunset.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'anonymoussynon', // Usually your GitHub org/user name.
  projectName: 'Nuclear-Sunset', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/anonymoussynon/Nuclear-Sunset/edit/main/",
        },
        blog: {
          showReadingTime: false,
          editUrl:
            "https://github.com/anonymoussynon/Nuclear-Sunset/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
            colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: false,
      },
            docs: {
        sidebar: {
          hideable: true,
        },
      },
      // Replace with your project's social card
      image: 'img/NSlink.png',
      navbar: {
        title: '             ',
        logo: {
          alt: 'NS Logo',
          src: 'img/NS2.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'right',
            label: 'Setup',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gallerySidebar',
            position: 'right',
            label: 'Showcase',
          },
          {
            type: "doc",
            docId: "main/faq",
            position: "right",
            label: "FAQ",
          },
          {
            type: "docSidebar",
            sidebarId: "changelogSidebar",
            position: "right",
            label: "Changelog",
          },
          {
            type: "docSidebar",
            sidebarId: "resourcesSidebar",
            position: "right",
            label: "Resources",
          },
          {
            type: "doc",
            docId: "main/donations",
            position: "right",
            label: "Donate",
          },
          {
            type: "doc",
            docId: "main/support",
            position: "right",
            label: "Help",
          },
        ],
      },
      footer: {
        style: 'dark',
links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/pwQKKXTdwg',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nuclear Sunset Team`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.vscdarkplus,
      },
    }),
};

export default config;
