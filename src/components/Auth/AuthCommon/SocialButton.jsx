import * as React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  socialButton: {
    height: 50,
    marginBottom: '.5rem !important',
    backgroundColor: theme.palette.common.white + ' !important',
    border: 'solid 1px ' + theme.palette.common.black + ' !important',
    color: theme.palette.common.black + ' !important',
    width: '100%',
  },
}))

const SocialButton = ({
  text,
  onButtonClick,
}) => {
  const c = useStyles()
  return (
    <Button
      className={c.socialButton}
      variant="outlined"
      // disabled={isLoading ? true : false}
      onClick={() => onButtonClick()}
      type="submit"
      disableElevation>
      {text}
      {/* {isLoading ? <CircularProgress /> : 'ログイン'} */}
    </Button>
  )
}

export default SocialButton
