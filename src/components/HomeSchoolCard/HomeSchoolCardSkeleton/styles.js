import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  cardContainer: {
    width: 900,
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
    height: 373
  },
  titleBlock: {
    marginBottom: theme.spacing(2),
  },
  bodyBlock: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}))

export default useStyles
