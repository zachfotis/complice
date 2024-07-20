import { createTheme } from '@mui/material';

export const customTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          shadow: 'none',
          '&.Mui-disabled': {
            borderColor: '#E9DDCD',
            color: '#E9DDCD',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
          },
        },
      },
    },
  },
});

export const customThemeDatePickers = createTheme({
  palette: {
    primary: {
      main: 'rgb(156, 163, 175)',
    },
    secondary: {
      main: 'rgb(156, 163, 175)',
    },
  },
});
