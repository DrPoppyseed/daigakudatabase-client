import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import FlexGrow from './FlexGrow'

const NoMatch = () => (
  <FlexGrow>
    <FormattedMessage id='not_found.message' />
  </FlexGrow>
)

export default NoMatch
