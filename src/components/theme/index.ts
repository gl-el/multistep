import { createTheme } from '@mui/material/styles';

export const themeOptions = createTheme({
  spacing: 7,
  palette: {
    mode: 'light',
    primary: {
      main: '#5558FA',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          textTransform: 'none',
        },
        sizeLarge: {
          padding: '10px 14px',
        },
        outlined: {
          '&:hover': {
            borderWidth: '1.5px',
          },
          borderWidth: '1.5px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          color: '#333333',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontSize: '14px',
          padding: '12px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: '8px 0 0',
        },
      },
    },
  },
});
