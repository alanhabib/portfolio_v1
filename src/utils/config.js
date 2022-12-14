module.exports = {
  email: 'dalanhabib@gmail.com',

  socialMedia: [
    // {
    //   name: "GitHub",
    //   url: "https://github.com/alanhabib",
    // },
    // {
    //   name: "Instagram",
    //   url: "https://www.instagram.com",
    // },
    {
      name: 'Twitter',
      url: 'https://twitter.com/alanhabib10',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/alan-habib-43a5b9167/',
    },
    {
      name: 'Calendly',
      url: 'https://calendly.com/alanhabib/15min',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: 'about',
      key: 1,
    },
    {
      name: 'Experience',
      url: 'jobs',
      key: 2,
    },
    {
      name: 'Work',
      url: 'projects',
      key: 3,
    },
    {
      name: 'Contact',
      url: 'contact',
      key: 4,
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
