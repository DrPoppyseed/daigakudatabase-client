import { Button } from '@mui/material'
import React, { FC, MouseEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useFilter'
import { setUrbanizationLevel } from '../../features/filterSlice'
import { FormattedMessage } from 'react-intl'

export interface UrbanizationLevelButtonProps {
  messageId: string
  value: string
}

const UrbanizationLevelButton: FC<UrbanizationLevelButtonProps> = ({
  messageId,
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
      <FormattedMessage id={messageId} />
    </Button>
  )
}

export default UrbanizationLevelButton
