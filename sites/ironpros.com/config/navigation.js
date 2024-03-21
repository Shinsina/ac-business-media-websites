const user = require('@ac-business-media/package-global/config/user');

const topics = [
  { href: '/equipment', label: 'Equipment' },
  { href: '/technology', label: 'Technology' },
  { href: '/workwear', label: 'Workwear' },
  { href: '/product-categories', label: 'Categories' },
];

const secondary = [
  { href: '/#', label: 'Virtual Events' },
  { href: '/#', label: 'IronPros TV' },
  { href: '/#', label: 'Awards' },
  { href: '#', label: 'Finance' },
];

const exclusives = [
  { href: '/product-categories', label: 'Product Directory' },
  { href: '/events', label: 'Events' },
  { href: '/webinars', label: 'Webinars' },
];

const utilities = [
  { href: '/contact-us', label: 'Contact Us' },
  { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
  { href: '/page/privacy-policy', label: 'Privacy Policy', target: '_blank' },
  { href: '/page/terms-conditions', label: 'Terms & Conditions', target: '_blank' },
];

const mobileMenu = {
  user,
  primary: [
    ...topics,
  ],
  secondary: [
    ...secondary,
    { href: '/', label: 'Advertise', target: '_blank' },
  ],
};

module.exports = {
  type: 'navbar-c',
  promos: [
    {
      title: 'subscribe.label',
      callToAction: 'subscribe.label',
      link: 'subscribe.href',
    },
  ],
  user,
  mobileMenu,
  topics,
  search: {
    href: '/product-categories',
    label: 'Search',
  },
  primary: {
    items: secondary,
  },
  secondary: {
    items: topics,
  },
  tertiary: {
    items: [],
  },
  toggleMenu: {
    about: {
      // label: 'About',
      // items: utilities,
    },
    col1: {
      label: 'Topics',
      items: [
        ...topics,
      ],
    },
    col2: {
      label: 'Exclusives',
      items: [
        ...exclusives,
      ],
    },
    col3: {
      label: 'Resources',
      items: utilities,
    },
  },
  footer: {
    topics,
    more: [
      ...exclusives,
    ],
    items: [
      ...utilities,
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
