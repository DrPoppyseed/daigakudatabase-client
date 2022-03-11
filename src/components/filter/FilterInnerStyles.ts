import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filterInnerContainer: {
      paddingTop: theme.spacing(3),
    },
    listItem: {
      padding: theme.spacing(2),
    },
    testRangeContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
    },
    buttonGroupContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
  })
)

export default useStyles
