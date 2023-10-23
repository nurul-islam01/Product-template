import image from '@assets/images/abhishar.jpg';
const description =
  'Abhishar Jangir is a MERN Stack Developer based in Gurgaon, IN, who specializes in developing websites.';

export default {
  default: {
    title: 'Abhishar Jangir',
    description,
    image,
    twitter: '@abhishar_jangir',
    sep: ' | ',
    siteURL: 'https://abhisharjangir.com',
    keywords:
      'Abhishar Jangir, Abhishar, Jangir, Front end developer, reactjs developer, web developer, mern stack developer, javascript developer, abhisharkjangir,abhishar.jangir, Full Stack Developer',
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
