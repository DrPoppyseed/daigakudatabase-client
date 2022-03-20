import { Button, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import { FormattedMessage } from 'react-intl'

const LearnMoreButton = () => (
  <ButtonContainer variant='contained' disableElevation>
    <ButtonLink to='#'>
      <FormattedMessage id='school_card.datacard.learn_more_button.label' />
    </ButtonLink>
  </ButtonContainer>
)

const ButtonContainer = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'inline-block',
  },
}))

const ButtonLink = styled(Link)(() => ({
  textDecoration: 'None',
  color: 'white',
}))

export default LearnMoreButton
