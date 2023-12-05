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
          margin: '0 0 8px',
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '400',
          color: 'rgba(0, 0, 0, 0.48)',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
  },
});
