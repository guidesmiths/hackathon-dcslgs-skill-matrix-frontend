import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { TourProvider, components } from '@reactour/tour';
import AppRouter from './AppRouter';
import theme from './app/commons/Theme/Theme';

function App() {
  // eslint-disable-next-line react/prop-types
  function Badge({ children }) {
    return (
      <components.Badge
        styles={{ badge: base => ({
          ...base,
          backgroundColor: '#BF3088',
          fontFamily: '\'Poppins\', sans-serif',
          fontSize: 14,
        }) }}
      >
        {children}
      </components.Badge>
    );
  }
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <TourProvider
          scrollSmooth
          components={{ Badge }}
          padding={{ mask: 0 }}
          styles={{
            popover: base => ({
              ...base,
              maxWidth: 1000,
              width: 560,
              borderRadius: 8,
              padding: 0,
            }),
            dot: (base, { current }) => ({
              ...base,
              background: current ? '#BF3088' : '#FFF',
              borderColor: '#BF3088',
              height: current ? 8 : 6,
              width: current ? 8 : 6,
              transform: 'none',
              margin: 10,
              '&:hover': {
                textTransform: 'none',
              },
            }),
            arrow: base => ({
              ...base,
              padding: 0,
              marginLeft: 20,
              marginRight: 20,
            }),
            controls: base => ({
              ...base,
              justifyContent: 'center',
              marginBottom: 23,
              marginTop: 0,
            }),
          }}
        >
          <AppRouter />
        </TourProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
