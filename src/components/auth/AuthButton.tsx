import { Button, CircularProgress, styled } from '@mui/material'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { MuiColor } from '../../types/mui'

export interface AuthButtonProps {
  color?: MuiColor
  isLoading: boolean
  disabled?: boolean
  labelMessageId: string
}

const AuthButton: FC<AuthButtonProps> = ({
  color = 'primary',
  isLoading,
  disabled = isLoading,
  labelMessageId,
}) => {
  return (
    <AuthButtonBase color={color} disabled={disabled} type='submit'>
      {isLoading ? (
        <CircularProgress data-testid={'auth-button-progress'} />
      ) : (
        <FormattedMessage
          data-testid={'auth-button-formatted-message'}
          id={labelMessageId}
        />
      )}
    </AuthButtonBase>
  )
}

const AuthButtonBase = styled(Button)(({ theme }) => ({
  height: 50,
  margin: '1.5rem 0 1rem 0 !important',
  width: '100%',
  backgroundColor: theme.palette.info.main + ' !important',
}))

export default AuthButton
