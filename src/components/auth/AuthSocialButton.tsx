import React, { FC } from 'react'
import { Button, styled } from '@mui/material'
import { FormattedMessage } from 'react-intl'

export interface SocialButtonProps {
  buttonLabelMessageId: string
  onButtonClick: () => void
}

const AuthSocialButton: FC<SocialButtonProps> = ({
  buttonLabelMessageId,
  onButtonClick,
}) => {
  return (
    <ButtonRoot
      variant='outlined'
      onClick={onButtonClick}
      type='submit'
      disableElevation
    >
      <FormattedMessage id={buttonLabelMessageId} />
    </ButtonRoot>
  )
}

const ButtonRoot = styled(Button)(({ theme }) => ({
  height: 50,
  marginBottom: '.5rem !important',
  backgroundColor: theme.palette.common.white + ' !important',
  border: 'solid 1px ' + theme.palette.common.black + ' !important',
  color: theme.palette.common.black + ' !important',
  width: '100%',
}))

export default AuthSocialButton
