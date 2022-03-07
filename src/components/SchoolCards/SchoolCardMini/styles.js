import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  cardRoot: { marginBottom: theme.spacing(1), width: 300, borderRadius: 0 },
  buttonBaseRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  swiper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 300,
  },
  imgNotFoundContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 300,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  imgNotFound: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
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
