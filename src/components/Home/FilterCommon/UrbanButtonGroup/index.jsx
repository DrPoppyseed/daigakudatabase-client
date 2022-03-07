import * as React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import { HomeContext } from '../../../../HomeContext'

const UrbanButtonGroup = () => {
  const { handleUrbanizationLevel, urbanizationLevel } =
    React.useContext(HomeContext)
  return (
    <ButtonGroup
      variant="text"
      color="primary"
      aria-label="school region urbanization level selector">
      <Button
        disableElevation
        onClick={e => handleUrbanizationLevel(e, 'city')}
        variant={`${urbanizationLevel === 'city' ? 'contained' : 'text'}`}>
        都市
      </Button>
      <Button
        disableElevation
        onClick={e => handleUrbanizationLevel(e, 'suburb')}
        variant={`${urbanizationLevel === 'suburb' ? 'contained' : 'text'}`}>
        郊外
      </Button>
      <Button
        disableElevation
        onClick={e => handleUrbanizationLevel(e, 'town')}
        variant={`${urbanizationLevel === 'town' ? 'contained' : 'text'}`}>
        町
      </Button>
      <Button
        disableElevation
        onClick={e => handleUrbanizationLevel(e, 'rural')}
        variant={`${urbanizationLevel === 'rural' ? 'contained' : 'text'}`}>
        田舎
      </Button>
    </ButtonGroup>
  )
}

export default UrbanButtonGroup
