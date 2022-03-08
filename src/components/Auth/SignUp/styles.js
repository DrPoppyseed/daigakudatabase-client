import { alpha } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  pageContainer: {
    position: 'absolute',
    left: '50%',
    top: '5%',
    transform: 'translate(-50%, 0)',
    padding: '2rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    marginBottom: '2rem',
  },
  box: {
    marginTop: 20,
    width: 350,
  },
  divider: {
    width: '100%',
    height: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  form: {
    // marginTop: 8,
  },
  emailField: {
    marginTop: '.5rem !important',
    width: '100%',
  },
  passwordField: {
    marginTop: '1rem !important',
    width: '100%',
  },
  forgotPasswordLink: {
    textDecoration: 'none',
  },
  signUpButton: {
    height: 50,
    margin: '1.5rem 0 1rem 0 !important',
    width: '100%',
    backgroundColor: theme.palette.info.main + ' !important',
  },
  signUpText: {
    color: alpha(theme.palette.common.black, 0.5) + ' !important',
  },
  signInLink: {
    textDecoration: 'none',
  },
  toLegalContainer: {
    display: 'flex',
  },
  toLegalText: {},
  formControl: {
    paddingTop: '1rem',
    // paddingBottom: '.6rem',
  },
}))

export default useStyles
