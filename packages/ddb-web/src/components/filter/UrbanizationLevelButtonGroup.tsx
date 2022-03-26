import React from 'react'
import { ButtonGroup } from '@mui/material'
import UrbanizationLevelButton from './UrbanizationLevelButton'

const UrbanButtonGroup = () => (
  <ButtonGroup
    variant='text'
    color='primary'
    aria-label='school region urbanization level selector'
  >
    <UrbanizationLevelButton
      messageId='filter.urbanization_level_button.label.city'
      value='city'
    />
    <UrbanizationLevelButton
      messageId='filter.urbanization_level_button.label.suburb'
      value='suburb'
    />
    <UrbanizationLevelButton
      messageId='filter.urbanization_level_button.label.town'
      value='town'
    />
    <UrbanizationLevelButton
      messageId='filter.urbanization_level_button.label.rural'
      value='rural'
    />
  </ButtonGroup>
)

export default UrbanButtonGroup
