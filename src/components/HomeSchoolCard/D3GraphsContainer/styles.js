import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  tabs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(1)
  },
  tab: {
    backgroundColor: 'white',
    border: 'none',
    background: 'linear-gradient(currentColor 0 0) bottom/var(--d, 0) 1px no-repeat',
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
    color: '#2196f3'
  },
  programsContainer: {
  },
  graphContainer: {
    display: 'flex',
    padding: theme.spacing(0.5),
    width: 450,
    height: 200
  },
  programsNamesBlock: {
  },
  programsTitleContainer: {
  },
  programsNamesContainer: {
    overflow: 'auto',
    postition: 'relative',
  },
  nullProgramsContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 60,
    width: 450,
    height: 200
  },
  nullGraphContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 60,
    width: 220,
    height: 200
  },

}))

export default useStyles