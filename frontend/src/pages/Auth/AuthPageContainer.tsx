import { Paper, styled, Typography } from '@mui/material'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import AuthLink from './AuthLink'
import FlexGrow from '../shared/FlexGrow'
import { useSignInWithGoogle } from '@/hooks/useAuth'
import AuthSocialButton from './AuthSocialButton'
import PaddedDivider from '../shared/PaddedDivider'

export interface AuthPageContainerProps {
  pageTitleMessageId: string
}

const AuthPageContainer: FC<AuthPageContainerProps> = ({
  children,
  pageTitleMessageId,
}) => {
  const { authenticateWithGoogle } = useSignInWithGoogle()

  return (
    <PageContainer>
      <ContentContainer>
        <Typography variant='h6'>
          <FormattedMessage id={pageTitleMessageId} />
        </Typography>
        <Body>
          <AuthSocialButton
            buttonLabelMessageId='auth.social_button.button_label.google'
            onButtonClick={authenticateWithGoogle}
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
