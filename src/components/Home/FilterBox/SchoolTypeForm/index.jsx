// @flow
import * as React from 'react'
import { FormControl, FormGroup, FormLabel } from '@material-ui/core'
import CheckboxChild from '../../../Common/CheckboxChild/CheckboxChild'
import useStyles from './styles'

type Props = {
  states: any,
  handleFilterChange: () => null,
}

const SchoolTypeForm = (props: Props): React.Node => {
  const c = useStyles()
  const { fourYear, twoYear, publicSchool, privateSchool } =
    props.states.filterState

  return (
    <FormControl>
      <FormLabel component="legend">大学の区分</FormLabel>
      <FormGroup>
        <div>
          <CheckboxChild
            label="４年制"
            name="fourYear"
            checked={fourYear}
            onChange={props.handleFilterChange}
            className={c.checkbox}
          />
          <CheckboxChild
            label="２年制"
            name="twoYear"
            checked={twoYear}
            onChange={props.handleFilterChange}
          />
        </div>
        <div>
          <CheckboxChild
            label="公立 (1985校)"
            name="publicSchool"
            checked={publicSchool}
            onChange={props.handleFilterChange}
            className={c.checkbox}
          />
          <CheckboxChild
            label="私立 (4338校)"
            name="privateSchool"
            checked={privateSchool}
            onChange={props.handleFilterChange}
            className={c.checkbox}
          />
        </div>
      </FormGroup>
    </FormControl>
  )
}

export default SchoolTypeForm
