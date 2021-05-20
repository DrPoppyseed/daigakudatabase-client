import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import history from './util/history'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from './AuthContext.jsx'

import App from './components/App/App.jsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
})

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router history={history}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
          <ReactQueryDevtools />
        </ThemeProvider>
      </AuthProvider>
    </Router>
  </QueryClientProvider>,
  document.querySelector('#root')
)
