const user = require('@ac-business-media/package-global/config/user');

const subscribe = {
  href: '/subscribe',
  label: 'Subscribe',
};

const topics = [
  { href: '/blacktop', label: 'Blacktop' },
  { href: '/maintenance', label: 'Maintenance' },
  { href: '/business', label: 'Business' },
];

const top = [
  ...topics,
  { href: '/videos', label: 'Videos' },
  { href: '/awards', label: 'Awards' },
  { href: '/premium-content', label: 'Premium Content' },
];

const exclusives = [
  { href: '/specguide', label: 'Spec Guides' },
  { href: '/premium-content', label: 'Premium Content' },
  { href: 'https://www.pavexshow.com/', label: 'PAVE/X', target: '_blank' },
  { href: 'https://igniteconstructionsummit.com/', label: 'IGNITE', target: '_blank' },
  { href: '/videos', label: 'Videos' },
];

const expertInsights = [
  { href: '/premium-content', label: 'Premium Content' },
  { href: '/events', label: 'Events' },
  { href: '/magazine', label: 'Magazine' },
  { href: '/awards', label: 'Awards' },
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
    { href: '/videos', label: 'Video' },
    { href: '/events', label: 'Events' },
  ],
  secondary: [
    { href: '/page/Subscribe-Links', label: 'Magazines' },
    { href: 'https://acbusiness.dragonforms.com/loading.do?omedasite=FCP_prefs_ProgReg', label: 'Newsletters' },
    { href: 'https://www.constructionnetworkmediakit.com/', label: 'Advertise', target: '_blank' },
  ],
};

const tertiaryItems = [
  {
    href: '/page/Subscribe-Links',
    label: 'Magazines',
    icon: 'book',
    forceLabel: true,
  },
  {
    href: 'https://acbusiness.dragonforms.com/loading.do?omedasite=FCP_prefs_ProgReg',
    label: 'Newsletters',
    icon: 'mail',
    forceLabel: true,
    target: '_blank',
  },
];

const tertiary = { items: [...tertiaryItems, ...user.items] };

module.exports = {
  type: 'navbar-c',
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
  ],
  user,
  mobileMenu,
  topics,
  primary: {
    items: [],
  },
  secondary: {
    items: [
      ...top,
    ],
  },
  tertiary,
  contexts: [
    {
      when: ['/blacktop'],
      secondary: { items: top },
      tertiary,
      primary: {
        items: [
          { href: '/blacktop/paving', label: 'Paving' },
          { href: '/blacktop/milling', label: 'Milling' },
          { href: '/blacktop/dirt-work', label: 'Dirt Work' },
          { href: '/blacktop/technology', label: 'Technology' },
        ],
      },
    },
    {
      when: ['/maintenance'],
      secondary: { items: top },
      tertiary,
      primary: {
        items: [
          { href: '/maintenance/sealcoating', label: 'Sealcoating' },
          { href: '/maintenance/sweeping', label: 'Sweeping' },
          { href: '/maintenance/striping', label: 'Striping' },
          { href: '/maintenance/patching', label: 'Patching' },
        ],
      },
    },
    {
      when: ['/business'],
      secondary: { items: top },
      tertiary,
      primary: {
        items: [
          { href: '/business/managment', label: 'Managment' },
          { href: '/business/workforce', label: 'Workforce' },
          { href: '/business/safety', label: 'Safety' },
        ],
      },
    },
  ],
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
      label: 'Expert Insights',
      items: [
        ...expertInsights
      ],
    },
    col4: {
      label: 'Resources',
      items: utilities,
    },
  },
  footer: {
    top,
    more: exclusives,
    items: [
      ...utilities,
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
