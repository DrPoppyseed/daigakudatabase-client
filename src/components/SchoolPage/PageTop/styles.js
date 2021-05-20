import { makeStyles } from '@material-ui/core/styles'

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
    height: 300,
    width: 700,
  },
  primaryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
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
    bottom: theme.spacing(2),
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
