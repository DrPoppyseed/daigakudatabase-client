import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  summaryContainer: {
    borderRadius: 0,
  },
  primaryImageContainer: {
    position: 'relative',
  },
  imgContainer: {
    borderRadius: '0 !important',
    // height: 300,
    // width: 700,
  },
  swiper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 700,
  },
  imgNotFoundContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 700,
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
  primaryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  basicStatsBreadcrumb: {},
  summaryTextContainer: {
    padding: theme.spacing(3),
  },
  summaryTitleArea: {
    // marginBottom: theme.spacing(2),
  },
  buttonGroup: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    right: theme.spacing(2),
    top: theme.spacing(2),
    zIndex: 9,
  },
  likeButton: {
    marginLeft: theme.spacing(2),
  },

  summaryBreadcrumbsArea: {
    // marginTop: theme.spacing(2),
    // marginBottom: theme.spacing(2),
  },
  schoolNameJap: {},
  schoolNameEn: {
    letterSpacing: theme.spacing(0.5),
    opacity: 0.7,
  },
  summaryTabsContainer: {
    // marginTop: theme.spacing(2),
  },
  summaryTabs: {},
}))

export default useStyles
