module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {},
    colors: {
      primary: '#fece2f',
      primaryLight: '#fece2f33',
      secondary: '#000000',
      secondaryLight: '#0a0a0a',
      secondaryLighter: '#151515',
      secondaryLightest: '#92929233',
      tertiary: '#929292',
      tertiaryLight: '#d4d4d4',
      tertiaryLigher: '#e6f1ff',
    },
    /**
     * Light  theme color varialbles
     */
    // light: {
    //   primary: '#0131d0',
    //   primaryLight: '#0131d033',
    //   secondary: '#ffffff',
    //   secondaryLight: '#f5f5f5',
    //   secondaryLighter: '#eaeaea',
    //   secondaryLightest: '#6d6d6d33',
    //   tertiary: '#6d6d6d',
    //   tertiaryLight: '#2b2b2b',
    //   tertiaryLigher: '#190e00',
    // },
    blend: 'screen',
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
