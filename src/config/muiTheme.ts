import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'large',
      },
    },
  },
})

export default theme
