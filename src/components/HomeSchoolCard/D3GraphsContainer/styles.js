import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  d3GraphsContainer: {
    [theme.breakpoints.down('lg')]: {
      width: 'calc(100vw - 32px - 16px)',
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
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'space-around',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      height: 260,
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
  programsContainer: {},
  programNameContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
    },
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
  testscoresAndTuitionContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      overflowX: 'auto',
      paddingLeft: theme.spacing(10),
    },
  },
  studentsGraphContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'space-around',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  studentsTextBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      alignItems: 'center',
      paddingTop: 0,
    },
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
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 50,
    },
  },
  raceNameContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 2,
      paddingBottom: 2,
    },
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
  mobileBreakLine: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'initial',
    },
  },
}))

export default useStyles
