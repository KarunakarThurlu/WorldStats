import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#fbc600', // set primary yellow explicitly
    },
    ...(mode === 'dark' && {
      background: {
        default: '#121212',
      },
    }),
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fbc600',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#fbc600',
          },
        },
        input: {
          ...(mode === 'dark' && {
            '&::-webkit-calendar-picker-indicator': {
              filter: 'invert(1)',
            },
          }),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // remove uppercase
        },
        outlined: {
          borderColor: '#fbc600',
          color: '#fbc600',
          '&:hover': {
            borderColor: '#fbc600',
            backgroundColor: 'rgba(251, 198, 0, 0.1)',
          },
        },
        contained: {
          backgroundColor: '#fbc600',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#e6b800',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          ...(mode === 'dark' && {
            backgroundColor: '#121212',
            boxShadow: '0px 2px 8px 1px white', // white shadow in dark mode
          }),
        },
      },
    },
  },
});

export const getTheme = (mode) => createTheme(getDesignTokens(mode));
