import { Button } from '@mui/material'
import React, { FC, MouseEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useFilter'
import { setUrbanizationLevel } from '../../features/filterSlice'

export interface UrbanizationLevelButtonProps {
  label: string
  value: string
}

const UrbanizationLevelButton: FC<UrbanizationLevelButtonProps> = ({
  label,
  value,
}) => {
  const urbanizationLevel = useAppSelector(
    state => state.filter.urbanizationLevel
  )
  const dispatch = useAppDispatch()

  const handleUrbanizationLevel = (
    e: MouseEvent<HTMLButtonElement>,
    value: string
  ) => {
    dispatch(setUrbanizationLevel(value))
  }

  return (
    <Button
      disableElevation
      onClick={e => handleUrbanizationLevel(e, value)}
      variant={`${urbanizationLevel === value ? 'contained' : 'text'}`}
    >
      {label}
    </Button>
  )
}

export default UrbanizationLevelButton
