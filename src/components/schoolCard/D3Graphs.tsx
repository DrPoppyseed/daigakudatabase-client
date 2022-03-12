import React, { FC } from 'react'
import useStyles from './D3GraphsStyles'
import clsx from 'clsx'
import TuitionAndTestscoresGraph from './TuitionAndTestscoresGraph'
import StudentsGraph from './StudentsGraph'
import ProgramsGraph from './ProgramsGraph'

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
  const c = useStyles()
  const [activeGraph, setActiveGraph] = React.useState(0)

  const handleActiveGraphChange = (newValue: number) => {
    if (newValue !== activeGraph) setActiveGraph(newValue)
  }

  return (
    <div className={c.d3GraphsContainer}>
      <div className={c.tabs}>
        <button
          className={clsx(c.tab, activeGraph === 0 && c.active)}
          onClick={() => handleActiveGraphChange(0)}
        >
          人気
          <br className={c.mobileBreakLine} />
          プログラム
        </button>
        <button
          className={clsx(c.tab, activeGraph === 1 && c.active)}
          onClick={() => handleActiveGraphChange(1)}
        >
          テストと
          <br className={c.mobileBreakLine} />
          学費
        </button>
        <button
          className={clsx(c.tab, activeGraph === 2 && c.active)}
          onClick={() => handleActiveGraphChange(2)}
        >
          生徒人口
          <br className={c.mobileBreakLine} />
          の詳細
        </button>
      </div>
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
    </div>
  )
}

export default D3Graphs
