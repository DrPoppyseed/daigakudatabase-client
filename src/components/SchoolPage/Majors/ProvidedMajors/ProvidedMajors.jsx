import * as React from 'react'
import useStyles from './styles'
import { Grid, Paper } from '@material-ui/core'
import { MajorsConsumer } from '../MajorsProvider'
import ProvidedMajor from './ProvidedMajor/ProvidedMajor'

const ProvidedMajors = ({ majors }) => {
  const c = useStyles()

  return (
    <MajorsConsumer>
      {({ programNumsOnFilterChange }) => (
        <Paper className={c.root}>
          <Grid container spacing={1}>
            {majors.map(major => {
              const { majorTitleJap, programsPerCredLevInDept } = major
              return (
                <Grid key={majorTitleJap} item xs={6}>
                  <ProvidedMajor
                    majorTitleJap={majorTitleJap}
                    programNum={programNumsOnFilterChange(
                      programsPerCredLevInDept
                    )}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Paper>
      )}
    </MajorsConsumer>
  )
}

export default ProvidedMajors
