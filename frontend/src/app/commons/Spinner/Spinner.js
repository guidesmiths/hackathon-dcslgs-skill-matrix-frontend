import * as React from 'react';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from './MaterialUItheme';
import CustomSpinner from './CustomSpinner';

export default function SpinnerLoader() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CustomSpinner size={80}/>
      </ThemeProvider>
    </Box>
  );
}
