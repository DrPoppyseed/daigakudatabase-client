import { alpha } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  algoliaContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  hitsContainer: {
    width: 350,
    position: 'fixed',
    top: 69,
  },
  hitsList: {
    display: 'none',
  },
  hitsOpen: {
    display: 'block',
    minHeight: 60,
  },
  hitsClosed: {
    display: 'none',
  },
  hitItem: {
    color: 'black',
  },
  headerRoot: {
    position: 'fixed',
    width: '100%',
  },
  toolbarRoot: {
    width: '100%',
    display: 'grid',
    padding: theme.spacing(1),
    gridSpacing: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1020px 1fr !important',
    },
    [theme.breakpoints.between('sm', 'xl')]: {
      gridTemplateColumns: '1fr 900px 1fr',
    },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: 0,
    },
  },
  toolbarInnerRoot: {
    gridColumn: 2,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  menuItemLink: {
    textDecoration: 'none',
    color: theme.palette.common.black,
  },
  title: {},
  titleLink: {
    color: theme.palette.common.black,
    textDecoration: 'none',
    letterSpacing: '5px',
    fontWeight: '300',
  },
  searchInputBase: {
    width: 350,
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    padding: `2px 4px 2px 12px !important`,
    display: 'flex',
    alignItems: 'center',
    width: 400,
    border: `1px solid ${theme.palette.text.disabled}`,
  },
  searchIcon: {
    color: alpha(theme.palette.common.black, 0.5),
    marginRight: -theme.spacing(1),
  },
  profileMenu: {
    marginLeft: theme.spacing(2),
  },
  buttonsContainer: {
    marginLeft: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  authButton: { marginRight: theme.spacing(1) },
  authButtonLink: {
    textDecoration: 'none',
  },
  signinButtonLink: { color: theme.palette.primary.main },
  signupButtonLink: {
    color: 'white',
  },
  sortByScroller: {},
}))
export default useStyles
