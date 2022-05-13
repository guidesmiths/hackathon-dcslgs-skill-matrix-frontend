import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';

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

const CustomSpinner = styled(CircularProgress)(() => ({
  color: theme,
}));

export const Spinner = () => (
  <Box>
    <ThemeProvider theme={theme}>
      <CustomSpinner size={80} />
    </ThemeProvider>
  </Box>
);
