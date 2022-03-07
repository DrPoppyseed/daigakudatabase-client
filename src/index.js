import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider, StyledEngineProvider, adaptV4Theme } from '@mui/material/styles';
import history from './util/history'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from './AuthContext'
import { HomeProvider } from './HomeContext'

import App from './components/App/App.jsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: '#2196f3'
    }
  }
}))

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router history={history}>
      <AuthProvider>
        <HomeProvider>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <App />
              <ReactQueryDevtools />
            </ThemeProvider>
          </StyledEngineProvider>
        </HomeProvider>
      </AuthProvider>
    </Router>
  </QueryClientProvider>,
  document.querySelector('#root')
)
