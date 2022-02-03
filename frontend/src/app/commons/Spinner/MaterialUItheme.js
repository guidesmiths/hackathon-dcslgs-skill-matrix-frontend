import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BF3088',
      light: 'rgba(191, 48, 136, 0.1)',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#50C0C2',
      contrastText: '#FFF',
    },
  },
});

export default theme;
