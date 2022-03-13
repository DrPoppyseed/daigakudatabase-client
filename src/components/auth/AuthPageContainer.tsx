import { Paper, styled, Typography } from '@mui/material'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import AuthLink from './AuthLink'
import FlexGrow from '../common/FlexGrow'
import { useMutation } from 'react-query'
import { signInWithGoogle } from '../../hooks/useAuth'
import AuthSocialButton from './AuthSocialButton'
import PaddedDivider from '../common/PaddedDivider'
import { AuthContext } from '../../contexts/AuthContext'

export interface AuthPageContainerProps {
  pageTitleMessageId: string
}

const AuthPageContainer: FC<AuthPageContainerProps> = ({
  children,
  pageTitleMessageId,
}) => {
  const { setUser } = React.useContext(AuthContext)

  const useSignInWithGoogle = useMutation(signInWithGoogle, {
    onSuccess: data => {
      setUser(data)
    },
  })

  return (
    <PageContainer>
      <ContentContainer>
        <Typography variant='h6'>
          <FormattedMessage id={pageTitleMessageId} />
        </Typography>
        <Body>
          <AuthSocialButton
            buttonLabelMessageId='auth.social_button.button_label.google'
            onButtonClick={useSignInWithGoogle.mutate}
          />
          <PaddedDivider />
          {children}
        </Body>
      </ContentContainer>
      <div style={{ display: 'flex' }}>
        <FlexGrow />
        <AuthLink to='/legal/user-agreement' text='利用規約' type='legal' />
        <AuthLink to='/legal/privacy' text='プライバシー' type='legal' />
      </div>
    </PageContainer>
  )
}

const PageContainer = styled('div')(() => ({
  position: 'absolute',
  left: '50%',
  top: '5%',
  transform: 'translate(-50%, 0)',
  padding: '2rem',
}))

const ContentContainer = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  marginBottom: '2rem',
}))

const Body = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '350px',
}))

export default AuthPageContainer
