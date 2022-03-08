import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    display: 'grid',
    gridSpacing: theme.spacing(4),
    gridTemplateColumns: '1fr 300px 20px 700px 1fr',
  },
  profileItemContainer: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(4),
  },
  mypageContainer: {
    gridColumn: '2 / 5',
    width: '100%',
  },
  profileImageArea: {},
  editProfileImageArea: {},
  profileImageContainer: {
    borderRadius: theme.spacing(100),
  },

  editProfileTextArea: {},
  profileTextItem: {
    marginBottom: theme.spacing(2),
  },
  editIconContainer: {
    alignSelf: 'flex-start',
    margin: -theme.spacing(2),
  },
  clearIcon: {
    alignSelf: 'flex-start',
    // margin: -theme.spacing(2),
  },
  editIcon: {},
}))

export default useStyles
