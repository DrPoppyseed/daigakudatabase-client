import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardRoot: { marginBottom: theme.spacing(1), width: 300, borderRadius: 0 },
  buttonBaseRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    height: 90,
    width: 300,
    objectFit: 'cover',
  },
  textContainer: {
    width: '100%',
    paddingTop: theme.spacing(1.3),
    paddingBottom: theme.spacing(1.3),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  link: { textDecoration: 'none', color: 'inherit' },
  infoContainer: {
    marginTop: theme.spacing(0.4),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
}))

export default useStyles
