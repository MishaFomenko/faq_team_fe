import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import App from 'App.tsx';
import store from 'redux/store.ts';

import 'translation/i18n.ts';

import { globalStyles } from 'styles/globalStyles.ts';
import { theme } from 'styles/theme.ts';

const muiTheme = createTheme(theme as ThemeOptions);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="faq_team_fe/">
            <App />
          </BrowserRouter>
          <Global styles={globalStyles} />
        </ThemeProvider>
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
);
