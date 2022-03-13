import * as React from 'react'
import { FC } from 'react'
import { Card, styled, Typography } from '@mui/material'
import Datacards from './Datacards'
import D3Graphs from './D3Graphs'
import CardLikedIcon from './CardLikedIcon'
import LearnMoreButton from './LearnMoreButton'

export interface HomeSchoolCardProps {
  general: any
}

const HomeSchoolCard: FC<HomeSchoolCardProps> = ({
  general: {
    name_en,
    education,
    campus,
    classifications,
    tuition,
    admissions,
    students,
    ipeds_unitid,
    isLiked,
  },
}) => (
  <CardContainer>
    <TitleBlock>
      <TitleContainer>
        <CardLikedIcon unitid={ipeds_unitid} isLiked={isLiked} />
        <Typography variant='h6'>{name_en}</Typography>
      </TitleContainer>
      <LearnMoreButton />
    </TitleBlock>
    <BodyBlock>
      <Datacards
        campus={campus}
        education={education}
        classifications={classifications}
        tuition={tuition}
        admissions={admissions}
      />
      <D3Graphs
        admissionsData={admissions}
        tuitionData={tuition}
        educationData={education}
        studentsData={students}
        ipeds_unitid={ipeds_unitid}
      />
    </BodyBlock>
  </CardContainer>
)

const CardContainer = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  padding: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: theme.spacing(2),
  },
  [theme.breakpoints.up('md')]: {
    width: 900,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}))

const TitleBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(2),
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}))

const TitleContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}))

const BodyBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}))

export default HomeSchoolCard
