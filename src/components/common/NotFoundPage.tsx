import * as React from 'react'
import FlexGrow from './FlexGrow'
import { FormattedMessage } from 'react-intl'

const NoMatch = () => {
  return (
    <FlexGrow>
      <FormattedMessage id='not_found.message' />
    </FlexGrow>
  )
}

export default NoMatch
