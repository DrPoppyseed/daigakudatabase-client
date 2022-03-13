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
        variant: 'contained',
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
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
      },
    },
  },
})

export default theme
