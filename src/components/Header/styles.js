import { fade, makeStyles } from '@material-ui/core/styles'
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
    display: 'grid',
    position: 'fixed',
    padding: theme.spacing(1),
    gridSpacing: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1020px 1fr !important',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      gridTemplateColumns: '1fr 900px 1fr',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '20px auto 20px',
    },
  },
  toolbarRoot: {
    gridColumn: 2,
    // display: 'flex',
    // flexDi
  },
  menuItemLink: {
    textDecoration: 'none',
    color: theme.palette.common.black,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
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
    color: fade(theme.palette.common.black, 0.5),
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
}))
export default useStyles
