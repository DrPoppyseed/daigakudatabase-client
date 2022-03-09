import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  sortByScrollerContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingRight: theme.spacing(2),
  },
  filterIconButton: {
    marginRight: theme.spacing(2),
  },
  chipItemsContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'no-wrap',
    overflowX: 'auto',
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
  },
  chipItem: {
    flex: '0 0 auto',
    marginRight: theme.spacing(1),
  },
  hitsChipItem: {
    marginRight: theme.spacing(1),
  },
}))

export default useStyles
