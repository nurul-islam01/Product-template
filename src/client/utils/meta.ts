const description =
  'Abhishar Jangir is a MERN Stack Developer based in Gurgaon, IN, who specializes in developing websites.';

export default {
  default: {
    title: 'Nurul Islam Tipu',
    description,
    image: 'https://avatars.githubusercontent.com/u/34369548?v=4',
    twitter: '@<twitter>',
    sep: ' | ',
    siteURL: 'nurulislam.dev',
    keywords:
      'Nurul, nurul, nurul isalm, nurulislam, nurul dev, nurul islam dev, Full Stack Developer',
    facebookAppId: 'XXXXXXXXX',
    updated: new Date().toDateString(),
    published: new Date().toDateString(),
    contentType: 'website',
  },
  '/': {
    id: 'home',
    title: 'MERN Stack Developer',
    description,
  },
  '/home': {
    id: 'home',
    title: 'Home',
    description,
  },
  '/about': {
    id: 'about',
    title: 'About',
    description,
  },
  '/work': {
    id: 'work',
    title: 'Work',
    description,
  },
  '/contact': {
    id: 'contact',
    title: 'Contact',
    description,
  },
  '/experience': {
    id: 'experience',
    title: 'Experience',
    description,
  },
  '/app/json-key-path-finder': {
    pathname: '/app/json-key-path-finder',
    id: 'json',
    title: 'JSON Key path finder Utility',
    keywords:
      'json key path finder, json key path, json key path search, get path of key in json, get path in json',
    description:
      'An utility to search path of specified key in the given JSON.',
  },
  '/404': {
    pathname: '/404',
    id: 'notfound',
    title: 'oh! no',
    description: 'There&lsquo;s not much left here for you.',
  },
};
