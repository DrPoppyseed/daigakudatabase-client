// @flow
import * as React from 'react'
import { Button, ButtonGroup } from '@material-ui/core'

type Props = {
  states: any,
  handleUrbanizationLevel: () => null,
}

const UrbanButtonGroup = (props: Props): React.Node => {
  return (
    <ButtonGroup
      variant="text"
      color="primary"
      aria-label="school region urbanization level selector">
      <Button
        disableElevation
        onClick={e => props.handleUrbanizationLevel(e, 'city')}
        variant={`${
          props.states.urbanizationLevel === 'city' ? 'contained' : 'text'
        }`}>
        都市
      </Button>
      <Button
        disableElevation
        onClick={e => props.handleUrbanizationLevel(e, 'suburb')}
        variant={`${
          props.states.urbanizationLevel === 'suburb' ? 'contained' : 'text'
        }`}>
        郊外
      </Button>
      <Button
        disableElevation
        onClick={e => props.handleUrbanizationLevel(e, 'town')}
        variant={`${
          props.states.urbanizationLevel === 'town' ? 'contained' : 'text'
        }`}>
        町
      </Button>
      <Button
        disableElevation
        onClick={e => props.handleUrbanizationLevel(e, 'rural')}
        variant={`${
          props.states.urbanizationLevel === 'rural' ? 'contained' : 'text'
        }`}>
        田舎
      </Button>
    </ButtonGroup>
  )
}

export default UrbanButtonGroup
