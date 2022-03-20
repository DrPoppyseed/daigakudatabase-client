import React, { useState, FC } from 'react'
import { styled } from '@mui/material'
import TuitionAndTestscoresGraph from './TuitionAndTestscoresGraph'
import StudentsGraph from './StudentsGraph'
import ProgramsGraph from './ProgramsGraph'
import D3GraphTabs from './D3GraphTabs'

export interface D3GraphsProps {
  admissionsData: any
  tuitionData: any
  educationData: any
  studentsData: any
  ipeds_unitid: any
}

const D3Graphs: FC<D3GraphsProps> = ({
  admissionsData: admissions,
  tuitionData: tuition,
  educationData: education,
  studentsData: students,
  ipeds_unitid,
}) => {
  const [activeGraph, setActiveGraph] = useState(0)

  return (
    <D3GraphsContainer>
      <D3GraphTabs activeGraph={activeGraph} setActiveGraph={setActiveGraph} />
      {activeGraph === 0 ? (
        <ProgramsGraph
          programSizes={education.program_sizes_ja}
          unitid={ipeds_unitid}
        />
      ) : activeGraph === 1 ? (
        <TuitionAndTestscoresGraph
          admissions={admissions}
          tuition={tuition}
          unitid={ipeds_unitid}
        />
      ) : (
        <StudentsGraph students={students} unitid={ipeds_unitid} />
      )}
    </D3GraphsContainer>
  )
}

const D3GraphsContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    width: 'calc(100vw - 32px - 16px)',
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.up('md')]: {
    width: 450,
  },
}))

export default D3Graphs
