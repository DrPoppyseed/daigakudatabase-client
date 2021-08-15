import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  d3GraphsContainer: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      width: 450,
    },
  },
  tabs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(1),
  },
  tab: {
    backgroundColor: 'white',
    border: 'none',
    background:
      'linear-gradient(currentColor 0 0) bottom/var(--d, 0) 1px no-repeat',
    transition: '0.2s',
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
      opacity: 1,
      '--d': '100%',
      color: '#2196f3',
    },
  },
  active: {
    color: '#2196f3',
  },
  graphContainer: {
    display: 'flex',
    padding: theme.spacing(0.5),
    height: 210,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-around',
    },
  },
  programNameColorBox: {
    height: 10,
    width: 10,
    minWidth: 10,
    marginRight: 5,
    opacity: 0.5,
    display: 'inline-block',
    transform: 'translate(0, -1px)',
    transition: '0.5s',
  },
  programsNamesContainer: {
    overflow: 'auto',
  },
  programNameContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  squareActive: {
    opacity: 1,
    transition: '0.5s',
  },
  nullProgramsContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 60,
    width: 450,
    height: 210,
  },
  nullGraphContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 60,
    width: 220,
    height: 210,
  },
  studentsGraphContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-around',
    },
  },
  studentsTextBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
  },
  nullStudentsGraphContainer: {
    height: 210,
    width: 450,
    display: 'flex',
    justifyContent: 'center',
  },
  raceNamesContainer: {
    overflow: 'auto',
    height: 170,
    width: 188,
  },
  raceNameContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  raceIndicatorColorBox: {
    height: 10,
    width: 10,
    borderRadius: 10,
    marginRight: 5,
    opacity: 0.6,
    transition: '0.5s',
    transform: 'translate(0, -2px)',
  },
}))

export default useStyles
