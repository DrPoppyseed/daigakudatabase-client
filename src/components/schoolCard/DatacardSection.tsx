import { styled, Typography } from '@mui/material'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'

export interface DatacardSectionProps {
  sectionTitleMessageId: string
}

const DatacardSection: FC<DatacardSectionProps> = ({
  sectionTitleMessageId,
  children,
}) => (
  <DatacardSectionContainer>
    <div>
      <Typography variant='button'>
        <FormattedMessage id={sectionTitleMessageId} />
      </Typography>
    </div>
    <DatacardSectionBodyContainer>{children}</DatacardSectionBodyContainer>
  </DatacardSectionContainer>
)

const DatacardSectionContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  padding: theme.spacing(0.5),
  flexDirection: 'column',
  width: 350,
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}))

const DatacardSectionBodyContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(0.5),
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
}))

export default DatacardSection
