import React, { useState, FC } from 'react'
import { List, ListItem, Typography } from '@mui/material'
import { KeyValueObject } from '../../../types/common'
import useStyles from './ProgramsGraphStyles'
import D3ProgramsGraph from './D3ProgramsGraph'

export interface ProgramsGraphProps {
  programSizes: KeyValueObject[]
  unitid: string
}

const ProgramsGraph: FC<ProgramsGraphProps> = ({ programSizes, unitid }) => {
  const c = useStyles()
  const [highlighted, setHighlighted] = useState('')

  return programSizes.length ? (
    <div className={c.graphContainer}>
      <div>
        <div
          className={`programsVizContainer programsViz-${unitid}`}
          style={{ display: 'relative' }}
        >
          <D3ProgramsGraph
            width={200}
            height={160}
            data={programSizes}
            unitid={unitid}
            highlighted={highlighted}
          />
        </div>
      </div>
      <List className={c.programsNamesContainer}>
        {programSizes.map((program: KeyValueObject, index: number) => {
          const itemId = `circle-${unitid}-${program.cip}`
          return (
            <ListItem
              key={`${itemId}`}
              className={c.programNameContainer}
              button
              onMouseEnter={() => setHighlighted(itemId)}
              onMouseLeave={() => setHighlighted('')}
            >
              <div
                className={`${c.programNameColorBox} ${
                  itemId === highlighted ? c.squareActive : ''
                }`}
                style={{ backgroundColor: `${program.color}` }}
              />
              <Typography variant='caption'>
                {index + 1} -{' '}
                {parseFloat(`${program.percentage * 100}`).toFixed(1)}%:{' '}
                {program.program_ja}
              </Typography>
            </ListItem>
          )
        })}
      </List>
    </div>
  ) : (
    <div className={c.nullProgramsContainer}>データがありません。</div>
  )
}

export default ProgramsGraph
