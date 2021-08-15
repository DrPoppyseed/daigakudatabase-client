// @flow
import * as React from 'react'
import { FormControl, FormGroup, FormLabel } from '@material-ui/core'
import CheckboxChild from '../../../Common/CheckboxChild/CheckboxChild'
import useStyles from './styles'
import { HomeContext } from '../../../../HomeContext'

const SchoolTypeForm = (): React.Node => {
  const c = useStyles()
  const { handleFilterChange, filterState } = React.useContext(HomeContext)
  const { fourYear, twoYear, publicSchool, privateSchool } = filterState

  return (
    <FormControl>
      <FormLabel component="legend">大学の区分</FormLabel>
      <FormGroup>
        <div>
          <CheckboxChild
            label="４年制"
            name="fourYear"
            checked={fourYear}
            onChange={handleFilterChange}
            className={c.checkbox}
          />
          <CheckboxChild
            label="２年制"
            name="twoYear"
            checked={twoYear}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <CheckboxChild
            label="公立 (1985校)"
            name="publicSchool"
            checked={publicSchool}
            onChange={handleFilterChange}
            className={c.checkbox}
          />
          <CheckboxChild
            label="私立 (4338校)"
            name="privateSchool"
            checked={privateSchool}
            onChange={handleFilterChange}
            className={c.checkbox}
          />
        </div>
      </FormGroup>
    </FormControl>
  )
}

export default SchoolTypeForm
