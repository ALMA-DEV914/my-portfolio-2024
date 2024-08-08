import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h2: {
      fontSize: '2.5rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
  },
});

export default theme;
