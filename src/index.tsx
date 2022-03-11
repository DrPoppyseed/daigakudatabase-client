import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import {
  adaptV4Theme,
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles'
import { Provider as ReduxStore } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from './AuthContext'
import { store } from './store'

import App from './components/App'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const theme = createTheme(
  adaptV4Theme({
    palette: {
      primary: {
        main: '#2196f3',
      },
    },
  })
)

ReactDOM.render(
  <ReduxStore store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <App />
              <ReactQueryDevtools />
            </ThemeProvider>
          </StyledEngineProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </ReduxStore>,
  document.querySelector('#root')
)
