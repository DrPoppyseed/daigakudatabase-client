//@flow
import * as React from 'react'
import CredLevFilter from './CredLevFilter/CredLevFilter'
import ProvidedMajors from './ProvidedMajors/ProvidedMajors'
import Major from './Major/Major'
import { MajorsProvider } from './MajorsProvider'

const Majors = ({
  majors,
  programsPerCredLev,
}: {
  majors: any,
  programsPerCredLev: Object,
}): React.Element<any> => {
  React.useEffect(() => {
    console.log(majors)
  })

  return (
    <MajorsProvider>
      <React.Fragment>
        <CredLevFilter programsPerCredLev={programsPerCredLev} />
        <ProvidedMajors majors={majors} />
        {majors.map(major => (
          <Major key={major.majorCIP} major={major} />
        ))}
      </React.Fragment>
    </MajorsProvider>
  )
}

export default Majors
