import React, { ChangeEvent } from 'react'
import { FormControl, FormGroup, FormLabel } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hooks/useFilter'
import { setSchoolType } from '../../features/filterSlice'
import CheckboxChild from '../common/CheckboxChild'

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
      <FormLabel component='legend'>大学の区分</FormLabel>
      <FormGroup>
        <div>
          <CheckboxChild
            label='４年制'
            name='fourYear'
            checked={schoolType.fourYear}
            onChange={handleSchoolType}
          />
          <CheckboxChild
            label='２年制'
            name='twoYear'
            checked={schoolType.twoYear}
            onChange={handleSchoolType}
          />
        </div>
        <div>
          <CheckboxChild
            label='公立 (1985校)'
            name='publicSchool'
            checked={schoolType.publicSchool}
            onChange={handleSchoolType}
          />
          <CheckboxChild
            label='私立 (4338校)'
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
