import React, { ChangeEvent } from 'react'
import { FormControl, FormGroup, FormLabel } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { useAppDispatch, useAppSelector } from '@/hooks/useFilter'
import { setSchoolType } from '@/features/filterSlice'
import CheckboxChild from '../shared/CheckboxChild'

const SchoolTypeCheckboxes = () => {
  const schoolType = useAppSelector(state => state.filter.schoolType)
  const dispatch = useAppDispatch()

  const handleSchoolType = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setSchoolType({
        name: e.target.name,
        checked: e.target.checked,
      })
    )
  }

  return (
    <FormControl>
      <FormLabel component='legend'>
        <FormattedMessage id='filter.school_type_checkboxes.form_label' />
      </FormLabel>
      <FormGroup>
        <div>
          <CheckboxChild
            messageId='filter.school_type_checkboxes.form_group.checkbox_label.four_year'
            name='fourYear'
            checked={schoolType.fourYear}
            onChange={handleSchoolType}
          />
          <CheckboxChild
            messageId='filter.school_type_checkboxes.form_group.checkbox_label.two_year'
            name='twoYear'
            checked={schoolType.twoYear}
            onChange={handleSchoolType}
          />
        </div>
        <div>
          <CheckboxChild
            messageId='filter.school_type_checkboxes.form_group.checkbox_label.public'
            name='publicSchool'
            checked={schoolType.publicSchool}
            onChange={handleSchoolType}
          />
          <CheckboxChild
            messageId='filter.school_type_checkboxes.form_group.checkbox_label.private'
            name='privateSchool'
            checked={schoolType.privateSchool}
            onChange={handleSchoolType}
          />
        </div>
      </FormGroup>
    </FormControl>
  )
}

export default SchoolTypeCheckboxes
