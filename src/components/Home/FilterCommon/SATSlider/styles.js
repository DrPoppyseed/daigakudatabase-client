import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  satRangeSlider: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  satRangeText: {
    marginBottom: theme.spacing(1),
  },
}))

export default useStyles
