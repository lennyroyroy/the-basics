/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Glitch',
    image: 'https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Flogo-day.svg',
    infoLink: 'https://glitch.com',
    pinned: true,
    target:'_blank',
  },
    {
    caption: 'Codepen',
    image: 'https://blog.codepen.io/wp-content/uploads/2014/03/codepen-logo.svg',
    infoLink: 'https://codepen.io',
    pinned: true,
    target:'_blank',
  },
  {
    caption: 'Slides',
    image: 'https://static.slid.es/logo/slides-logo-495x479.png',
    infoLink: 'https://slides.com',
    pinned: true,
    target:'_blank',
  },
  {
    caption: 'Docusaurus',
    image: 'https://seeklogo.com/images/D/docusaurus-logo-808B78C0CA-seeklogo.com.png',
    infoLink: 'https://docusaurus.io',
    pinned: true,
    target:'_blank',
  },
  {
    caption: 'Tunetank',
    image: 'https://tunetank.com/img/logo_word.svg',
    infoLink: 'https://tunetank.com',
    pinned: true,
    target:'_blank',
  },
    {
    caption: 'Anchor',
    image: 'http://c93fea60bb98e121740fc38ff31162a8.s3.amazonaws.com/wp-content/uploads/2017/03/anchor-fm.jpg',
    infoLink: 'https://anchor.fm',
    pinned: true,
    target:'_blank',
  },


  
];

const siteConfig = {
  title: 'The Basics', // Title for your website.
  tagline: 'Learn the basics of HTML & CSS in 8 weeks with Lennyroy!',
  tagline_display: 'Learn the basics of HTML & CSS!',
  docsSideNavCollapsible: true,
  wrapPagesHTML: true,
  url: 'https://lennyroyroy.github.io', // Your website URL
  baseUrl: '/the-basics/',
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'the-basics',
  organizationName: 'lennyroyroy',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'Extras/slide-library', label: 'Slides'},
    {doc: 'Extras/video-library', label: 'Videos'},
    {doc: 'Extras/challenges', label: 'Challenges'},
    { blog: true, label: 'Blog' }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/LC-white-full.png',
  footerIcon: 'img/LR-white@2x.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#5c194d',
    secondaryColor: '#401135',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Lennyroy Codes`,
  gaTrackingId: 'UA-146614083-1',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'monokai',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  scrollToTop: true,
    scrollToTopOptions: {
    zIndex: 100,
  },

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
