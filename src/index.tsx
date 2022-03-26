import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { Provider as ReduxStore } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { store } from '@/store'

import App from '@/App'
import theme from '@/config/muiTheme'
import { I18nProvider } from '@/config/i18nProvider'

ReactDOM.render(
  <ReduxStore store={store}>
    <BrowserRouter>
      <AuthProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <I18nProvider>
              <App />
            </I18nProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </AuthProvider>
    </BrowserRouter>
  </ReduxStore>,
  document.querySelector('#root')
)
