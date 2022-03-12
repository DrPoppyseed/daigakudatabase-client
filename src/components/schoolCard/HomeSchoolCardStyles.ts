import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      marginBottom: theme.spacing(1),
      padding: theme.spacing(3),
      [theme.breakpoints.down('md')]: {
        width: '100%',
        padding: theme.spacing(2),
      },
      [theme.breakpoints.up('md')]: {
        width: 900,
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
      },
    },
    titleBlock: {
      display: 'flex',
      marginBottom: theme.spacing(2),
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    buttonContainer: {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
      [theme.breakpoints.up('md')]: {
        display: 'inline-block',
      },
    },
    buttonLink: {
      textDecoration: 'None',
      color: 'white',
    },
    bodyBlock: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column-reverse',
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logoContainer: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: theme.spacing(2),
      backgroundColor: 'grey',
      marginLeft: theme.spacing(1),
    },
  })
)

export default useStyles
