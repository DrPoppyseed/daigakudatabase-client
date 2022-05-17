import React, { FC } from 'react'
import { styled, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import DatacardSection from './DatacardSection'
import formatMoney from '@/util/formatMoney'

export interface DatacardsProps {
  campus: any
  education: any
  classifications: any
  tuition: any
  admissions: any
}

const Datacards: FC<DatacardsProps> = ({
  campus,
  education,
  classifications,
  tuition,
  admissions,
}) => (
  <DatacardsBlock>
    <DatacardSection sectionTitleMessageId='school_card.datacard_section.title.school_summary'>
      <DatacardSummaryItem>
        <Typography variant='caption'>
          <FormattedMessage id='school_card.datacard.item_title.campus_control' />
          {campus.control_ja} ・
          <FormattedMessage id='school_card.datacard.item_title.calendar_system' />
          {education.calendar_system_ja}
        </Typography>
      </DatacardSummaryItem>
      <DatacardSummaryItem>
        <Typography variant='caption'>
          {campus.state_ja}州 ({campus.region_ja}）
        </Typography>
      </DatacardSummaryItem>
      {classifications !== undefined ? (
        <>
          <DatacardSummaryItem>
            <Typography variant='caption'>
              <FormattedMessage id='school_card.datacard.item_title.school_size' />
              {classifications.carnegie_size_category_ja}
            </Typography>
          </DatacardSummaryItem>
          <DatacardSummaryItem>
            <Typography variant='caption'>
              <FormattedMessage id='school_card.datacard.item_title.carnegie_category' />
              {classifications.carnegie_classification_ja}
            </Typography>
          </DatacardSummaryItem>
        </>
      ) : (
        <div>ー</div>
      )}
      {admissions.population.admissions_rate !== null &&
      admissions.population.admissions_rate !== '-' ? (
        <Typography variant='caption'>
          <FormattedMessage id='school_card.datacard.item_title.acceptance_rate' />
          {admissions.population.admissions_rate}%
        </Typography>
      ) : (
        <Typography variant='caption'>
          <FormattedMessage id='school_card.datacard.item_title.acceptance_rate' />
          ー
        </Typography>
      )}
    </DatacardSection>
    <DatacardSection sectionTitleMessageId='school_card.datacard_section.title.tests_and_tuition'>
      {tuition !== null ? (
        <Typography variant='caption'>
          <FormattedMessage id='school_card.datacard.item_title.out_of_state_tuition' />
          ${formatMoney(tuition.out_of_state[2019].tuition)}
        </Typography>
      ) : (
        <Typography variant='caption'>
          <FormattedMessage id='school_card.datacard.item_title.out_of_state_tuition' />
          ー
        </Typography>
      )}
      {admissions.act.comp_25th_percentile === null &&
      admissions.sat.eng_25th_percentile === null ? (
        <>
          <Typography variant='caption'>
            <FormattedMessage id='school_card.datacard.item_title.act_average_of_accepted_students' />
            ー
          </Typography>
          <Typography variant='caption'>
            <FormattedMessage id='school_card.datacard.item_title.sat_average_of_accepted_students' />
            ー
          </Typography>
        </>
      ) : (
        <>
          <Typography variant='caption'>
            <FormattedMessage id='school_card.datacard.item_title.act_average_of_accepted_students' />
            {admissions.act.comp_25th_percentile} ~
            {admissions.act.comp_75th_percentile}
          </Typography>
          <Typography variant='caption'>
            <FormattedMessage id='school_card.datacard.item_title.sat_average_of_accepted_students' />
            {admissions.sat.total_25th_percentile} ~
            {admissions.sat.total_75th_percentile}
          </Typography>
        </>
      )}
    </DatacardSection>
  </DatacardsBlock>
)

const DatacardsBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    width: '100%',
  },
}))

const DatacardSummaryItem = styled('div')(({ theme }) => ({
  width: 350,
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}))

export default Datacards
