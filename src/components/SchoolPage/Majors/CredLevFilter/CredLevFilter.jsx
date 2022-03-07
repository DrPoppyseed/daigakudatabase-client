import * as React from 'react'
import useStyles from './styles'
import { FormControl, FormGroup, Paper } from '@material-ui/core'
import CheckboxChild from '../../../Common/CheckboxChild/CheckboxChild'
import { MajorsConsumer } from '../MajorsProvider'

const CredLevFilter = ({
  programsPerCredLev,
}) => {
  const c = useStyles()

  return (
    <MajorsConsumer>
      {({ filterState, handleFilterChange }) => (
        <Paper className={c.root}>
          <FormControl>
            <FormGroup className={c.group}>
              <CheckboxChild
                label={`准学士 - Associate's (${programsPerCredLev['2']})`}
                name="2"
                checked={filterState['2']}
                onChange={handleFilterChange}
              />
              <CheckboxChild
                label={`学士 - Bachelor's (${programsPerCredLev['3']})`}
                name="3"
                checked={filterState['3']}
                onChange={handleFilterChange}
              />
              <CheckboxChild
                label={`修士 - Master's (${programsPerCredLev['5']})`}
                name="5"
                checked={filterState['5']}
                onChange={handleFilterChange}
              />
              <CheckboxChild
                label={`博士 - Doctor's (${programsPerCredLev['6']})`}
                name="6"
                checked={filterState['6']}
                onChange={handleFilterChange}
              />
            </FormGroup>
          </FormControl>
        </Paper>
      )}
    </MajorsConsumer>
  )
}

export default CredLevFilter
