import { LOCAL_HEIGHT, LOCAL_WIDTH, LOCAL_COLOR } from './src/constants/localTheme';

export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: LOCAL_COLOR.white,
        backWhite: LOCAL_COLOR.backWhite,
        gray: LOCAL_COLOR.gray,
        darkGray: LOCAL_COLOR.darkGray,
        yellow: LOCAL_COLOR.yellow,
        green: LOCAL_COLOR.green,
        black: LOCAL_COLOR.black,
      },
      fontFamily: {
        base: 'Inter',
      },
      fontSize: {
        '14px_medium': [
          '14px',
          {
            fontWeight: '500',
          },
        ],
        '18px_medium': [
          '18px',
          {
            fontWeight: '500',
          },
        ],
        '24px_bold': [
          '24px',
          {
            fontWeight: '700',
          },
        ],
      },
      spacing: {
        header: LOCAL_HEIGHT.header.sm,
      },
      maxWidth: {
        container: LOCAL_WIDTH.container,
      },
    },
  },
  plugins: [],
};
