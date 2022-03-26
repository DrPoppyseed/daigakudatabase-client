import React, { FC } from 'react'
import {
  Card,
  FormControl,
  InputLabel,
  styled,
  Typography,
} from '@mui/material'

import { FormattedMessage } from 'react-intl'
import FlexGrow from '../common/FlexGrow'
import SortBySelector from './SortBySelector'
import { useAppSelector } from '@/hooks/useFilter'

interface SortByBoxProps {
  data: any
}

const SortByBox: FC<SortByBoxProps> = ({ data }) => {
  const params = useAppSelector(state => state.params)

  return (
    <Root>
      <HitsContainer>
        <Typography variant='h5'>
          {data.totalSchoolsFound}{' '}
          <FormattedMessage id='sort.hits_container.schools_found_post_text' />
        </Typography>
        <Typography variant='caption'>
          {data.totalSchoolsFound >= 10 ? 10 : data.totalSchoolsFound}{' '}
          <FormattedMessage id='sort.hits_container.schools_currently_showing' />
          - <FormattedMessage id='sort.hits_container.current_page' />{' '}
          {params.page} / {Math.ceil(data.totalSchoolsFound / 10)}
        </Typography>
      </HitsContainer>
      <FlexGrow />
      <FormControl>
        <InputLabel id='select-sort-label'>
          <FormattedMessage id='sort.sort_box.input_label' />
        </InputLabel>
        <SortBySelector />
      </FormControl>
    </Root>
  )
}

const Root = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: 900,
  },
}))

const HitsContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}))

export default SortByBox
