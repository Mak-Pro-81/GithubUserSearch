const colors = Object.freeze({
  // blue
  blue1: '#0079FF',
  blue2: '#60ABFF',

  // white
  white: '#FFFFFF',

  // black
  black: '#000000',

  // gray
  gray1: '#F6F8FF',
  gray2: '#697C9A',
  gray3: '#4B6A9B',
  gray4: '#2B3442',
  gray5: '#1E2A47',
  gray6: '#141D2F',

  // red
  red1: '#F74646',

  // shadow
  shadow: '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)',
});

type Theme = {
  colors: { [key in keyof typeof colors]: string };
};

export const theme: Theme = {
  colors,
};
