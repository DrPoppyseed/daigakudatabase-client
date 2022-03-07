import * as React from 'react'
import useStyles from './styles'
import { Divider, List, Paper, Typography } from '@material-ui/core'
import { MajorsContext } from '../MajorsProvider'

import Program from '../Program/Program'

const Major = ({ major }) => {
  const context = React.useContext(MajorsContext)
  const c = useStyles()

  return (
    <Paper className={c.root}>
      <div className={c.title} id={`${major.majorTitleJap}`}>
        <Typography variant="body1" className={c.majorTitle}>
          {major.majorTitleJap}
        </Typography>
      </div>
      <Divider className={c.divider} />
      <List className={c.programsContainer}>
        {major.programs.map((program: Object) => {
          return context.filterCredLevs.includes(program.credLev) ? (
            <Program
              key={`${program.codeFull}${program.credLev}`}
              program={program}
            />
          ) : null
        })}
      </List>
    </Paper>
  )
}

export default Major
