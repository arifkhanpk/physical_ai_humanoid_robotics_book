// @ts-check

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'A Comprehensive Textbook for Teaching Embodied Intelligence',
  favicon: 'img/favicon.ico',

  url: "https://arifkhanpk.github.io",
  baseUrl: "/physical_ai_humanoid_robotics_book/",
  organizationName: 'arifkhanpk',
  projectName: 'Physical_AI_Humanoid_Robotics_Book',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/arifkhanpk/Physical_AI_Humanoid_Robotics_Book/edit/main/',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Robotics Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          href: 'https://github.com/arifkhanpk',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            { label: 'Preface', to: '/preface' },
            { label: 'Part I: Foundations', to: '/physical-ai' },
            { label: 'Appendices', to: '/appendix' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'ROS 2 Documentation', href: 'https://docs.ros.org/' },
            { label: 'NVIDIA Isaac Sim', href: 'https://docs.omniverse.nvidia.com/isaacsim/' },
            { label: 'Gazebo', href: 'https://gazebosim.org/' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/arifkhanpk' },
            { label: 'Created with Claude Code', href: 'https://claude.com/claude-code' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Course. Built with Docusaurus.`,
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['python', 'bash', 'yaml', 'json', 'cpp', 'markup'],
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  }),

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        language: 'en',
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
