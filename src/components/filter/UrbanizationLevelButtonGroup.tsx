import React from 'react'
import { ButtonGroup } from '@mui/material'
import UrbanizationLevelButton from './UrbanizationLevelButton'

const UrbanButtonGroup = () => {
  return (
    <ButtonGroup
      variant='text'
      color='primary'
      aria-label='school region urbanization level selector'
    >
      <UrbanizationLevelButton label={'都市'} value={'city'} />
      <UrbanizationLevelButton label={'郊外'} value={'suburb'} />
      <UrbanizationLevelButton label={'町'} value={'town'} />
      <UrbanizationLevelButton label={'田舎'} value={'rural'} />
    </ButtonGroup>
  )
}

export default UrbanButtonGroup
