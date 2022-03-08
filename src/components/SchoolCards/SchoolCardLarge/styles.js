import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  swiper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    height: 230,
  },
  swiperContainer: { position: 'relative' },
  tagContainer: {
    backgroundColor: '#eeeeee',
    backgdropFilter: 'blur(1px)',
    borderRadius: 60,
    width: 48,
    height: 48,
    zIndex: 9,
    right: 5,
    top: 10,
    position: 'absolute',
  },
  tag: {
    zIndex: 19,
    position: 'absolute',
    opacity: 1,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    height: 230,
  },
  imgNotFound: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  linkContainer: {
    textDecoration: 'none',
    color: 'black',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    height: 230,
    width: 700,
  },
  cardText: {
    marginBottom: theme.spacing(2),
  },
  cardTitle: {
    marginBottom: theme.spacing(2),
  },
  breadcrumbContainer: {
    paddingBottom: '.5rem',
  },
  shortSummary: {
    marginTop: '.5rem !important',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  ratingText: {
    paddingLeft: theme.spacing(1),
  },
  bottomGroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  actionGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))

export default useStyles
