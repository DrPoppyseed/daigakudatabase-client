import * as React from 'react'
import CredLevFilter from './CredLevFilter/CredLevFilter'
import ProvidedMajors from './ProvidedMajors/ProvidedMajors'
import Major from './Major/Major'
import Skeleton from '@mui/material/Skeleton'
import { MajorsProvider } from './MajorsProvider'

import { useGetMajorsOfSchoolById } from '../../../hooks/useSchools'

const Majors = ({ uuid }) => {
  const { status, data } = useGetMajorsOfSchoolById(uuid)

  return (
    <MajorsProvider>
      {status === 'loading' ? (
        <div>
          <Skeleton
            animation='wave'
            variant='rectangular'
            width={700}
            height={134}
            style={{ marginTop: 24 }}
          />
          <Skeleton
            animation='wave'
            variant='rectangular'
            width={700}
            height={390}
            style={{ marginTop: 16 }}
          />
        </div>
      ) : status === 'error' ? (
        'エラー：専攻情報を取得するのに失敗しました。'
      ) : (
        <React.Fragment>
          <CredLevFilter programsPerCredLev={data.majors.programsPerCredLev} />
          <ProvidedMajors majors={data.majors.majors} />
          {data.majors.majors.map(major => (
            <Major key={major.majorCIP} major={major} />
          ))}
        </React.Fragment>
      )}
    </MajorsProvider>
  )
}

export default Majors
