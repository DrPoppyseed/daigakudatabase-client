import { alpha } from '@mui/material/styles'

import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(8),
  },
  brand: {
    letterSpacing: '.8rem',
    color: theme.palette.common.white + ' !important',
  },
  rootContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: 'auto auto',
    background: alpha(theme.palette.common.black, 1),
    marginTop: theme.spacing(4),
  },
  linkStyle: {
    textDecoration: 'none',
    color: theme.palette.common.white,
  },
  listItemText: {
    display: 'block',
    color: theme.palette.common.white,
    fontWeight: 700 + ' !important',
  },
  listItemBody2: {
    // fontWeight: 700 + ' !important',
  },
  listColumn1: {
    gridRow: 1,
    gridColumn: 1,
  },
  listColumn2: {
    gridRow: 1,
    gridColumn: 2,
  },
  listColumn3: {
    gridRow: 1,
    gridColumn: 3,
  },
  copyrightContainer: {
    marginTop: theme.spacing(2),
    gridRow: 2,
    gridColumn: 2,
  },
  copyright: {
    color: alpha(theme.palette.common.white, 0.7),
    marginLeft: theme.spacing(2),
  },
}))

export default useStyles
