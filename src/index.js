import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { adaptV4Theme, createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'
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
    <BrowserRouter>
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
    </BrowserRouter>
  </QueryClientProvider>,
  document.querySelector('#root')
)
